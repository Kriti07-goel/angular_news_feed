import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdDropdownComponent } from './ngbd-dropdown.component';

describe('NgbdDropdownComponent', () => {
  let component: NgbdDropdownComponent;
  let fixture: ComponentFixture<NgbdDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
