import {FirstLetterCapitalizedPipe} from './first-letter-capitalized.pipe';
import {
    inject,
    TestBed
  } from '@angular/core/testing';
  describe('FirstLetterCapitalizedPipe', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {
          }
        ]
      });
    });
    it('create an instance', () => {
        const pipe = new FirstLetterCapitalizedPipe();
        expect(pipe)
          .toBeTruthy();
      });
      it('should call transform method of FirstLetterCapitalizedPipe', () => {
        const pipe = new FirstLetterCapitalizedPipe();
        expect( pipe.transform('sample')).toBeDefined();
        expect( pipe.transform('sample')).toEqual('Sample');
      });
});
