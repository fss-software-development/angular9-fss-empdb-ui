import { TestBed, inject } from '@angular/core/testing';
import { FormHelperService } from './form-helper.service';
import {
    FormBuilder
  } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('FormHelperService', () => {
    let formBuilder: FormBuilder;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                FormHelperService,
                FormBuilder,
            ]
        });
    });
    beforeEach(() => {
        formBuilder = TestBed.get(FormBuilder);
    })
    it('FormHelperService should be created', inject([FormHelperService], (service: FormHelperService) => {
        expect(service).toBeTruthy();
    }));
});
