import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionArithmetiqueComponent } from './expression-arithmetique.component';

describe('ExpressionArithmetiqueComponent', () => {
  let component: ExpressionArithmetiqueComponent;
  let fixture: ComponentFixture<ExpressionArithmetiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionArithmetiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionArithmetiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
