import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibalityComponent } from './libality.component';

describe('LibalityComponent', () => {
  let component: LibalityComponent;
  let fixture: ComponentFixture<LibalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
