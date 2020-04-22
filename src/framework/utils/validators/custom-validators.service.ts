import {Injectable} from '@angular/core';
import {
  FormControl,
  ValidatorFn,
  AbstractControl,
  FormGroup
} from '@angular/forms';

/**
 * The CustomValidators Service
 *
 * This service contains custom methods for validating user inputs
 */
@Injectable()
export class CustomValidatorsService {
  /**
   * Method to validate whether user input is a number or not
   * @param {FormControl} control
   * @return {{ [s: string]: boolean }}
   */
  public static readonly isNumber = (control: FormControl): { [s: string]: boolean } => {
    const NUMBER_FORMAT = /^\d+$/;
    if (!(NUMBER_FORMAT.test(control.value)) && (control.value !== '')) {
      return {isNumber: true};
    }
    return null;
  };
  /**
   * Method to validate whether user input is a valid phone number or not
   * @param {FormControl} control
   * @return {{ [s: string]: boolean }}
   */
  public static readonly isPhoneNumber = (control: FormControl): { [s: string]: boolean } => {
    // tslint:disable-next-line:max-line-length
    const PHONE_PATTERN = /^(\+[0-9]{1,3})?[\s]?(\(?([0-9]{2,4})\)?)[-\s]?(([0-9]{7,8})|(([0-9]{3,4})?[-\s]?([0-9]{4})))(?!\w!\s)$/;
    const isPhoneNumber = PHONE_PATTERN.test(control.value);
    if (!control.value || control.value === '') {
      return null;
    }
    const COUNT_SPACES = (control.value.split(' ').length - 1);
    const COUNT_DASHES = (control.value.split('-').length - 1);
    const RAW_PHONE_NUMBER = control.value.replace(/\+|\)|\(|-|\s/g, '');
    if (!isPhoneNumber
      || (RAW_PHONE_NUMBER.length < 10
        || RAW_PHONE_NUMBER.length > 15
        || (RAW_PHONE_NUMBER.length > 10 && COUNT_SPACES > 4)
        || (RAW_PHONE_NUMBER.length <= 10 && COUNT_SPACES > 3)
        || COUNT_DASHES > 2)
      ) {
      return {isPhoneNumber: true};
    }
  };
  /**
   * Method to validate whether user input has non printable characters or not
   * @param {FormControl} control
   * @return {any}
   */
  public static readonly hasPrintableCharacters = (control: FormControl) => {
    const nonPrintableChar = /([^\x21-\x7e])/;
    if ((nonPrintableChar.test(control.value))) {
      return {nonPrintableChar: true};
    }
    return null;
  };
  /**
   * Method to validate whether user input is a valid email or not
   * @param {FormControl} control
   * @return {{ [s: string]: boolean }}
   */
  public static readonly isEmail = (control: FormControl): { [s: string]: boolean } => {
    // tslint:disable-next-line:max-line-length
    const EMAIL = /(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(EMAIL.test(control.value)) && (control.value !== '')) {
      return {isEmail: true};
    }
    return null;
  };

  /**
   * Method to validate whether user input is a valid postal code or not
   * It checks for aphanumeric character should be atmost 10, 2 space and 1 - symbol
   * @param {FormControl} control
   * @return {{ [s: string]: boolean }}
   */
  public static readonly postalCodeValidation = (control: FormControl): { [s: string]: boolean } => {
    const postalCodeRegex = /^[a-zA-Z0-9- ]*$/i;
    if (!control.value || control.value === '') {
      return null;
    }
    if (control.value !== null && control.value !== '') {
      if (postalCodeRegex.test(control.value) &&
      (control.value.match(/\s/g) === null || control.value.match(/\s/g).length < 3) &&
      (control.value.match(/-/g) === null || control.value.match(/-/g).length < 2) &&
      (control.value.match(/\w/g) === null || control.value.match(/\w/g).length < 11)) {
        return null;
      } else {
        return {'invalidPostalCode': true};
      }
    }
    return null;
  }

  constructor() {
  }

  /**
   * Method to validate whether user input contains alpha numeric characters
   * @param {FormControl} control
   * @return {{ [s: string]: boolean }}
   */
  isAlphaNumeric(control: FormControl): { [s: string]: boolean } {
    const ALPHANUMERIC = /^[a-z0-9]+$/i;
    if (!(ALPHANUMERIC.test(control.value))) {
      return {isAlphaNumeric: true};
    }
    return null;
  }

  /**
   * Method to validate whether the IP address is of IPV4 or not
   * @param {FormControl} control
   * @return {{ [s: string]: boolean }}
   */
  isIPV4(control: FormControl): { [s: string]: boolean } {
    const IPV4 = /((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$/;
    if (!(IPV4.test(control.value))) {
      return {isIPV4: true};
    }
    return null;
  }

  /**
   * Method to validate  whether the IP address is of IPV6 or not
   * @param {FormControl} control
   * @return {{ [s: string]: boolean }}
   */
  isIPV6(control: FormControl): { [s: string]: boolean } {
    const IPV6 = /((^|:)([0-9a-fA-F]{0,4})){1,8}$/;
    if (!(IPV6.test(control.value))) {
      return {isIPV6: true};
    }
    return null;
  }

  /**
   * Method to validate whether the user input is a valid URL or not
   * @param {FormControl} control
   * @return {{ [s: string]: boolean }}
   */
  isURL(control: FormControl): { [s: string]: boolean } {
    // tslint:disable-next-line:max-line-length
    const URL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    if (!(URL.test(control.value))) {
      return {isURL: true};
    }
    return null;
  }

  /**
   * Method to validate whether the new password entered is of a valid pattern
   * @param {FormControl} control
   * @return {{ [s: string]: boolean }}
   */
  isPasswordPattern(control: FormControl): { [s: string]: boolean } {
    const regex = /(^\S*$)/;
    if (control.value) {
      if (!control.value.match(regex)) {
        return {'invalidPassword': true};
      }
    }
    return null;
  }

  /**
   * Method to validate confirm password matches with new password
   * @param {string} passwordKey
   * @param {string} passwordConfirmationKey
   * @return {any}
   */
  isRepeatPasswordValidation(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  /**
   * Method to validate the min and max value
   * @param {number} minValue
   * @param {number} maxValue
   * @return {ValidatorFn}
   */
  minMaxValueValidation(minValue: number, maxValue?: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } => {
      const value: number = parseInt(control.value, 10);
      if (maxValue && (!(value >= minValue && value <= maxValue))) {
        return {minMaxValue: false};
      } else if (!(value >= minValue)) {
        return {minMaxValue: false};
      }
    };
  }
}
