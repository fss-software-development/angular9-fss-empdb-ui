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
  name: 'firstLetterCapitalized'
})

export class FirstLetterCapitalizedPipe implements PipeTransform {
  /**
   * method to transform the given string
   * @param {string} value: value to be transform
   * @param args
   * @returns {any}
   */
  transform(value: string, ...args: any[]): any {
    value = value.trim();
    let titleArray: string[] = value.split(' ');
    titleArray = titleArray
      .map((word: string) => word.toLowerCase())
      .map((word: string) => {
        const charArray = word.split('');
        charArray[0] = charArray[0].toUpperCase();
        word = charArray.join('');
        return word;
      });
    return titleArray.join(' ');
  }
}
