import {InitialsPipe} from './initials.pipe';
import {
    inject,
    TestBed
  } from '@angular/core/testing';
import {Observable} from 'rxjs';
describe('InitialsPipe', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {
          }
        ]
      });
    });
    it('create an instance', () => {
        const pipe = new InitialsPipe();
        expect(pipe)
          .toBeTruthy();
      });
      it('should call transform method of initials pipe', () => {
        const pipe = new InitialsPipe();
        expect( pipe.transform('sample')).toBeDefined();
        expect( pipe.transform('sample')).toEqual('S');
      });
});
