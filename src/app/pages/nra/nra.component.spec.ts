import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NraComponent } from './nra.component';

describe('NraComponent', () => {
  let component: NraComponent;
  let fixture: ComponentFixture<NraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
