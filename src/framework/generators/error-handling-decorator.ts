import {
  getViewModel
} from './form-creators';

/**
 * Decorator function to handle field error
 * @param {Object} target
 * @param {string | symbol} key
 * @param {TypedPropertyDescriptor<Function>} descriptor
 */
export function FieldErrorHandler() {
  return (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args: any[]) => {
      if (args.length < 2) {
        throw new Error('FieldErrorHandler decorated method should have 2 arguments');
      }
      const form = getViewModel(args[0]);
      const controlName: string = args[1];
      const control = form.get(controlName);
      if (!control.valid && (control.dirty || control.touched)) {
        args.push(control.errors);
      }
      return originalMethod.apply(this, args);
    };
  };
}

// @Idea: the below code is the placeholder for improving the command handler's
// success & failure code in a declarative way.
export function ViewStateUpdater(viewChanges) {
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {

  };
}
