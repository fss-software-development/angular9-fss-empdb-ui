import {
  MultiKeyTranslatePipe,
  MultiKeyTranslatePipeMeta
} from './multikeytranslate.pipe';
import {TranslateService} from '@ngx-translate/core';

import {
  inject,
  TestBed
} from '@angular/core/testing';
import {
  Observable,
  of
} from 'rxjs';

class MockTranslateService {
  get(key: string, value?: any): Observable<any> {
    const obj = {};
    obj[key] = key;
    return of(obj);
  }
}

describe('MultiKeyTranslatePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslateService,
          useClass: MockTranslateService
        }
      ]
    });
  });
  it('create an instance', inject([TranslateService], (translateService: TranslateService) => {
    const pipe = new MultiKeyTranslatePipe(translateService);
    expect(pipe)
      .toBeTruthy();
  }));

  it('should call get method of translation service',
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      spyOn(translateService, 'get')
        .and
        .returnValue(of({hello: 'hello'}));
      pipe.transform('Hello');
      expect(translateService.get)
        .toHaveBeenCalled();
    }));

  it('should splits the multiple key and return the concat result',
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      const keyToTranslate = 'TRANSLATE_KEY1,TRANSLATE_KEY2,TRANSLATE_KEY3';
      const result = pipe.transform('TRANSLATE_KEY1,TRANSLATE_KEY2,TRANSLATE_KEY3', {separator: ','});
      expect(result)
        .toBe(keyToTranslate.split(',')
          .join());

    }));

  it('transform : method should return empty string if empty parameter passed',
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      const result = pipe.transform('');
      expect(result)
        .toBe('');
    }));
  it('transform : method should return empty string if null param passed',
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      const result = pipe.transform(null);
      expect(result)
        .toBe('');
    }));
  it('transform : method should return empty string if undefined param passed',
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      const result = pipe.transform(undefined);
      expect(result)
        .toBe('');
    }));
  it('transform : method should call get method of translation service, if MultiKeyTranslatePipeMeta options is not passed',
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      spyOn(translateService, 'get')
        .and
        .returnValue(of({hello: 'hello'}));
      pipe.transform('Hello');
      expect(translateService.get)
        .toHaveBeenCalledWith('Hello');
    }));

  it(`transform : method should call get method of translation service with array of key, 
      if MultiKeyTranslatePipeMeta options is passed with separator options`,
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      spyOn(translateService, 'get')
        .and
        .returnValue(of({hello: 'hello'}));
      const keyToTranslate = 'TRANSLATE_KEY1,TRANSLATE_KEY2,TRANSLATE_KEY3';
      pipe.transform(keyToTranslate, {separator: ','});
      expect(translateService.get)
        .toHaveBeenCalledWith(keyToTranslate.split(','));
    }));

  it(`transform : method should call get method of translation service, 
      if MultiKeyTranslatePipeMeta options is passed with interpolationArgs`,
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      spyOn(translateService, 'get')
        .and
        .returnValue(of({hello: 'hello'}));
      const keyToTranslate = 'TRANSLATE_KEY1';
      const interpolationArgs = {
        value1: 1,
        value2: 2
      };
      pipe.transform(keyToTranslate, {interpolationArgs: interpolationArgs});
      expect(translateService.get)
        .toHaveBeenCalledWith(keyToTranslate, interpolationArgs);
    }));

  it(`transform : method should call get method of translation service with array of keys, 
      if MultiKeyTranslatePipeMeta options is passed`,
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      spyOn(translateService, 'get')
        .and
        .returnValue(of({hello: 'hello'}));
      const keyToTranslate = 'TRANSLATE_KEY1,TRANSLATE_KEY2,TRANSLATE_KEY3';
      const multiKeyMetaOptions: MultiKeyTranslatePipeMeta = {
        separator: ',',
        interpolationArgs: {
          value1: 1,
          value2: 2
        }
      };
      pipe.transform(keyToTranslate, multiKeyMetaOptions);
      expect(translateService.get)
        .toHaveBeenCalledWith(keyToTranslate.split(multiKeyMetaOptions.separator), multiKeyMetaOptions.interpolationArgs);
    }));
  it('transform : method should return empty string if get method of translation service return empty value',
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      spyOn(translateService, 'get')
        .and
        .returnValue(of(''));
      const keyToTranslate = 'TRANSLATE_KEY1,TRANSLATE_KEY2,TRANSLATE_KEY3';
      const multiKeyMetaOptions: MultiKeyTranslatePipeMeta = {
        separator: ',',
        interpolationArgs: {
          value1: 1,
          value2: 2
        }
      };
      const result = pipe.transform(keyToTranslate, multiKeyMetaOptions);
      expect(translateService.get)
        .toHaveBeenCalledWith(keyToTranslate.split(multiKeyMetaOptions.separator), multiKeyMetaOptions.interpolationArgs);
      expect(result)
        .toBe('');
    }));
  it('transform : method should return empty string if get method of translation service return null',
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      spyOn(translateService, 'get')
        .and
        .returnValue(of(null));
      const keyToTranslate = 'TRANSLATE_KEY1,TRANSLATE_KEY2,TRANSLATE_KEY3';
      const multiKeyMetaOptions: MultiKeyTranslatePipeMeta = {
        separator: ',',
        interpolationArgs: {
          value1: 1,
          value2: 2
        }
      };
      const result = pipe.transform(keyToTranslate, multiKeyMetaOptions);
      expect(translateService.get)
        .toHaveBeenCalledWith(keyToTranslate.split(multiKeyMetaOptions.separator), multiKeyMetaOptions.interpolationArgs);
      expect(result)
        .toBe('');
    }));
  it('transform : method should return empty string if get method of translation service return undefined',
    inject([TranslateService], (translateService: TranslateService) => {
      const pipe = new MultiKeyTranslatePipe(translateService);
      spyOn(translateService, 'get')
        .and
        .returnValue(of(undefined));
      const keyToTranslate = 'TRANSLATE_KEY1,TRANSLATE_KEY2,TRANSLATE_KEY3';
      const multiKeyMetaOptions: MultiKeyTranslatePipeMeta = {
        separator: ',',
        interpolationArgs: {
          value1: 1,
          value2: 2
        }
      };
      const result = pipe.transform(keyToTranslate, multiKeyMetaOptions);
      expect(translateService.get)
        .toHaveBeenCalledWith(keyToTranslate.split(multiKeyMetaOptions.separator), multiKeyMetaOptions.interpolationArgs);
      expect(result)
        .toBe('');
    }));
});
