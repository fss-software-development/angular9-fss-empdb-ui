import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

/**
 * Meta option for MultiKeyTranslatePipe
 *
 * separator : for separating the multi translation key.
 *
 * interpolationArgs : consolidated value of all interpolation value of all keys
 */
export interface MultiKeyTranslatePipeMeta {
  /**
   * separator key if that is used to separate the translate key
   */
  separator?: string,
  /**
   * interpolation argument if need to translate the value with interpolation
   */
  interpolationArgs?: any
}

/**
 * Translate the multiple keys separated with separator using translate service of @ngx-translate
 */
@Pipe({
  name: 'multikeytranslate'
})
export class MultiKeyTranslatePipe implements PipeTransform {
  /**
   * MultiKeyTranslatePipe constructor
   * @param {TranslateService} translateService
   */
  constructor(private translateService: TranslateService) {
  }

  /**
   * method to transform the value
   * @param value: value to translate
   * @param {MultiKeyTranslatePipeMeta} options:  meta options with separator and interpolation argument value if any
   * @returns {string} : translate string if exist
   */
  transform(value: any, options?: MultiKeyTranslatePipeMeta): string {
    let keys = '';
    let translatedText = '';
    if (value) {
      if (options && options.separator) {
        keys = value.split(options.separator);
      } else {
        keys = value;
      }
      if (options && options.interpolationArgs) {
        this.translateService.get(keys, options.interpolationArgs)
          .subscribe((res) => {
            translatedText = this.concatPropValue(res);
          });
      } else {
        this.translateService.get(keys)
          .subscribe((res) => {
            translatedText = this.concatPropValue(res);
          });
      }
    }
    return translatedText;
  }

  /**
   * Method to concat translated value
   * @param obj: object to read the property value
   * @returns {string} : empty string or concat translated string
   */
  private concatPropValue(obj: any): string {
    let values = '';
    if (obj) {
      Object.keys(obj)
        .forEach(key => {
          values += obj[key];
        });
    }
    return values;
  }

}
