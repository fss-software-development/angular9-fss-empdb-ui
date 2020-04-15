import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSearchModalComponent } from './add-search-modal.component';

describe('AddSearchModalComponent', () => {
  let component: AddSearchModalComponent;
  let fixture: ComponentFixture<AddSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
