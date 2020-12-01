import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLibalityComponent } from './edit-libality.component';

describe('EditLibalityComponent', () => {
  let component: EditLibalityComponent;
  let fixture: ComponentFixture<EditLibalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLibalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLibalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
