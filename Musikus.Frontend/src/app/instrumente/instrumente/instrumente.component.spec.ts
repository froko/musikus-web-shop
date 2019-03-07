import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumenteComponent } from './instrumente.component';

describe('InstrumenteComponent', () => {
  let component: InstrumenteComponent;
  let fixture: ComponentFixture<InstrumenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumenteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
