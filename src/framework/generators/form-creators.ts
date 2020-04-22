import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn
} from '@angular/forms';

import {FormArray} from '@angular/forms';

interface FieldConstraintMeta {
  onScreenMessage?: any,
  validation?: Array<ValidatorFn>,
  type?: 'FormArray' | 'FormGroup'
}

const viewDataModels: Map<string, any> = new Map<string, any>();
const embeddableDataModels: Map<string, { target: any, fieldConstraintsMap: Map<string, FieldConstraintMeta> }> = new Map();

/**
 * View form decorators to create form with the given model name
 * @param {string} modelName: name of the form
 * @returns {any}
 */
export function viewForm(modelName: string) {
  return <any>function (target) {
    // Set field constraints
    let fieldConstraintsMap = null;
    if (target.prototype && target.prototype.fieldConstraintsMap) {
      fieldConstraintsMap = target.prototype.fieldConstraintsMap;
    }
    viewDataModels.set(modelName, createFormGroup(modelName, target, fieldConstraintsMap));
    // set embedded object to the target
    if (target.prototype && target.prototype.embeddedMap) {
      updateEmbeddedFormGroup(modelName, target.prototype.embeddedMap);
    }
  };

}

/**
 * field constraints meta data for the form
 * @param {FieldConstraintMeta} constraints
 * @returns {(target: any, key: (string | symbol)) => any}
 */
export function fieldConstraint(constraints: FieldConstraintMeta) {
  return function (target: any, key: string | symbol) {
    if (!target.fieldConstraintsMap) {
      target.fieldConstraintsMap = new Map();
    }
    target.fieldConstraintsMap.set(key, constraints);
  };
}

/**
 * embeddable decorator that is to attached with embedded decorator
 * Eg: Address in embeddable object to AddUser and EditUser form.
 * @param modelName
 * @returns {(target) => any}
 */
export function embeddable(modelName) {
  return (target) => {
    // field constraints meta data
    let fieldConstraintsMap = null;
    if (target.prototype && target.prototype.fieldConstraintsMap) {
      fieldConstraintsMap = target.prototype.fieldConstraintsMap;
    }
    embeddableDataModels.set(modelName, {
      target: target,
      fieldConstraintsMap: fieldConstraintsMap
    });
  };
}

/**
 * embedded decorator to attach the embeddable form the the target form
 * @param modelName
 * @returns {(target: any, key: (string | symbol)) => any}
 */
export function embedded(modelName) {
  return (target: any, key: string | symbol) => {
    if (!target.embeddedMap) {
      target.embeddedMap = new Map();
    }
    const embeddableData = embeddableDataModels.get(modelName);
    target.embeddedMap.set(key, createFormGroup(modelName, embeddableData.target, embeddableData.fieldConstraintsMap));
  };
}

/**
 * AutowireViewModel decorator to inject viewModel with given name
 * Eg: Below addUserForm would init with AddUser form
 * @AutowireViewModel('AddUser')
 * addUserForm ;
 * @param {string} formName
 * @returns {(target: any, key: (string | symbol)) => any}
 * @constructor
 */
export function AutowireViewModel(formName: string) {
  return (target: any, key: string | symbol) => {
    let _val = getViewModel(formName);
    Object.defineProperty(target, key, {
      set: (value) => {
        _val = value;
      },
      get: () => {
        return _val;
      },
      enumerable: true,
      configurable: true
    });
  };
}

/**
 * method to set the form group on the target
 * @param target
 * @param fieldConstraintsMap
 * @returns {AbstractControl}
 */
function createFormGroup(modalName: string, target: any, fieldConstraintsMap: Map<string, FieldConstraintMeta>): AbstractControl {
  const obj = new target();
  const formGroup = new FormBuilder().group({});
  fieldConstraintsMap = fieldConstraintsMap || new Map();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fieldConstraintMeta: FieldConstraintMeta = fieldConstraintsMap.get(key);
      const controlType = fieldConstraintMeta && fieldConstraintMeta.type || 'FormControl';
      const validators = fieldConstraintMeta && fieldConstraintMeta.validation || [];
      switch (controlType) {
        case 'FormArray':
          formGroup.addControl(key, new FormArray(obj[key], validators));
          break;
        case 'FormGroup':
          formGroup.addControl(key, new FormGroup({}, validators));
          break;
        default:
          formGroup.addControl(key, new FormControl(obj[key], validators));
      }
      initErrorKeyAndMsgMap(modalName, key, fieldConstraintMeta);
    }
  }
  return formGroup;
}

/**
 * Method to init error Messages and their respective in the viewModel
 * @param {string} modalName
 * @param key
 * @param {FieldConstraintMeta} fieldConstraintMeta
 */
function initErrorKeyAndMsgMap(modalName: string, key: any, fieldConstraintMeta: FieldConstraintMeta) {
  if (fieldConstraintMeta && fieldConstraintMeta.validation && fieldConstraintMeta.onScreenMessage) {
    const errorKeysId = `${modalName}ErrorKeys`;
    const errorMsgsId = `${modalName}ErrorMsgs`;
    let errorKeysMap = getViewModel(errorKeysId);
    // init error keys map
    if (!errorKeysMap) {
      viewDataModels.set(errorKeysId, new Map<string, any>());
      errorKeysMap = getViewModel(errorKeysId);
    }
    errorKeysMap.set(key, fieldConstraintMeta.validation);

    // init error message map
    let errorMsgMap = getViewModel(errorMsgsId);
    if (!errorMsgMap) {
      viewDataModels.set(errorMsgsId, new Map<string, any>());
      errorMsgMap = getViewModel(errorMsgsId);
    }
    errorMsgMap.set(key, fieldConstraintMeta.onScreenMessage);
  }
}

/**
 * Method update the form group with embedded form
 * @param {string} modelName
 * @param {Map<string, any>} embeddedMap
 */
function updateEmbeddedFormGroup(modelName: string, embeddedMap: Map<string, any>) {
  const fg = getViewModel(modelName) as FormGroup;
  embeddedMap.forEach((value, key) => {
    fg.setControl(key, value);
  });
}


export function getViewModel(modelName: string) {
  return viewDataModels.get(modelName);
}

export function getOnScreenMessage(formName: string, controlName: string) {
  const keyArray = controlName.split('.');
  let errorMsgs: Map<string, any> = getViewModel(`${formName}ErrorMsgs`);
  for (let i = 0; i < keyArray.length; i++) {
    if (errorMsgs.get(keyArray[i])) {
      errorMsgs = errorMsgs.get(keyArray[i]);
      break;
    } else {
      if (getViewModel(`${keyArray[i]}ErrorMsgs`)) {
        errorMsgs = getViewModel(`${keyArray[i]}ErrorMsgs`);
      }
    }
  }
  return errorMsgs;
}

export function getEmbrddableDataModels(modalName: string) {
  return embeddableDataModels.get(modalName);
}