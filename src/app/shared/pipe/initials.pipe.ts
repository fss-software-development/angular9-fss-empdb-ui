import {
  Pipe,
  PipeTransform
} from '@angular/core';

/**
 * Pipe read the first letter of each word in the given string,
 *
 * and return the upper case of those letters
 */
@Pipe({
  name: 'initials'
})

export class InitialsPipe implements PipeTransform {
  /**
   * method to transform the given string
   * @param value
   * @param args
   * @returns {any}
   */
  transform(value: any, ...args: any[]): any {
    value = value.trim();
    let titleArray: string[] = value.split(' ');
    titleArray = titleArray
      .map((word: string) => word.toUpperCase())
      .map((word: string) => word[0]);
    return titleArray.join('');
  }
}
