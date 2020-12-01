import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibalityComponent } from './add-libality.component';

describe('AddLibalityComponent', () => {
  let component: AddLibalityComponent;
  let fixture: ComponentFixture<AddLibalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLibalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLibalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
