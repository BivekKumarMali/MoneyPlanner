import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLibalityComponent } from './list-libality.component';

describe('ListLibalityComponent', () => {
  let component: ListLibalityComponent;
  let fixture: ComponentFixture<ListLibalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLibalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLibalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
