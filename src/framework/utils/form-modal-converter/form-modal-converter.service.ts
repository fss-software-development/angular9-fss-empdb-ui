import {Injectable} from '@angular/core';

/**
 * Convert the object from FormGroup value or the response json or any other object to specific class type object
 * ```
 * Example:
 * Suppose want to convert the some object to Sample class object
 * class Sample {
 *   counter: number;
 *   constructor(startCounter?: number) {
 *       this.counter = startCounter || 0;
 *   }
 * }
 * // grab the reference of the FormModalConverter
 * // Injection would do the same
 * const formModalConverter = new FormModalConverter();
 * const testObject = {id:1,otherProp:'junk'};
 * const sample: Sample = <Sample>formModalConverter
 *    .convertTo(testObject, Sample);
 * ```
 * * sample object is `{counter:0}` that is type of `Sample` and ignored other properties (`testObject.otherProp`)
 */
@Injectable()
export class FormModalConverterService {

  /**
   * FormModalConverterService constructor
   */
  constructor() {
  }

  /**
   * Convert the sourceObject to targetType
   * ```
   * throw Error source is an array or if targetType is null or undefined
   * ```
   * @param sourceObject source from which object properties will be read
   * @param targetType  target type which that value would be converted if present
   */
  public convertTo<T>(sourceObject: any, targetType: { new(...args: any[]): T; }): T {
    if (sourceObject instanceof Array) {
      throw new Error(`Use the convertToArray method as sourceObject is any array`);
    }
    try {
      const targetObject = this.createNew(targetType);
      this.setProperty(sourceObject, targetObject);
      return targetObject;
    } catch (err) {
      throw new Error(`Object conversion failure of type: ${targetType}`);
    }

  }

  /**
   * convert array of sourceObjects to array of targetType
   * @param sourceObjects array of sourceObjects to be converted
   * @param targetType converted into
   */
  public convertToArray<T>(sourceObjects: any[], targetType: { new(): T; }): T[] {
    const targetObject: T[] = [];
    if (sourceObjects) {
      sourceObjects.forEach((sourceObject) => {
        targetObject.push(this.convertTo(sourceObject, targetType));
      });
    }
    return targetObject;
  }

  /**
   * Method to create object for target type
   * @param type targetType
   */
  private createNew<T>(type: { new(): T; }): T {
    return new type() as T;
  }

  /**
   * Developer must know that the source & target types are at their own risk for the expected outputs
   *
   * Method to Set each property from source to target
   * @param sourceObject source from which object properties will be read
   * @param targetObject target to which value set for the properties
   */
  public setProperty(sourceObject: any, targetObject: any) {
    if (sourceObject && targetObject) {
      Object.keys(targetObject)
        .forEach((key) => {
          if (sourceObject[key] !== null && sourceObject[key] !== undefined) {
            targetObject[key] = sourceObject[key];
          }
        });
    }
  }

  /**
   * Method to Set each property from source to target object
   * @param sourceObject source from which object properties will be read
   * @param targetObject target to which value set for the properties
   * @param objectType object to refer to default values.
   */
  public designProperty<T>(sourceObject: any, targetObject: any, targetObjectType: { new(): T; }) {
    const objectType = this.createNew(targetObjectType);
    if (sourceObject && targetObject) {
      Object.keys(targetObject)
        .forEach((key) => {
          if (sourceObject[key] || sourceObject[key] === objectType[key]) {
            targetObject[key] = sourceObject[key];
          }
        });
    }
  }

}
