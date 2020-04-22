import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {Test} from '../Test.model';
import {OnScreenMessageComponent} from './on-screen-message.component';
import {TranslateTestingModule} from '../../../testing/mock-translate';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {getViewModel} from '../form-creators';

describe('OnScreenMessageComponent', () => {
  let component: OnScreenMessageComponent;
  let fixture: ComponentFixture<OnScreenMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnScreenMessageComponent],
      imports: [
        TranslateTestingModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnScreenMessageComponent);
    component = fixture.componentInstance;
    const test = new Test({'testField1': 'test123'});
    component.appFormName = 'Test';
    component.appFieldName = 'testField1';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('displayError() returns the valid error message based on the failure', () => {
    const test = new Test({'testField1': 'text'});
    getViewModel('Test').reset(test);
    getViewModel('Test').get('testField1').markAsDirty();
    fixture.detectChanges();
    expect(component.displayError()).toBe('number field');
  });

  it('displayError() appropriate error messages based on consecutive validation errors', () => {
    const test1 = new Test({'testField1': 'NaN a text'});
    getViewModel('Test').reset(test1);
    getViewModel('Test').get('testField1').markAsDirty();
    fixture.detectChanges();
    expect(component.displayError()).toBe('number field');

    const test2 = new Test({'testField1': ''});
    getViewModel('Test').reset(test2);
    getViewModel('Test').get('testField1').markAsDirty();
    fixture.detectChanges();
    expect(component.displayError()).toBe('required field');
  });

  it('displayError() should not return any errors when the field value is correct', () => {
    const test = new Test({'testField1': '123433'});
    getViewModel('Test').reset(test);
    fixture.detectChanges();
    expect(component.displayError()).toEqual(null)
  });
});
