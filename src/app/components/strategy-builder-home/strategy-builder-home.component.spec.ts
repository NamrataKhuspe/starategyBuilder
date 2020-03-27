import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyBuilderHomeComponent } from './strategy-builder-home.component';

describe('StrategyBuilderHomeComponent', () => {
  let component: StrategyBuilderHomeComponent;
  let fixture: ComponentFixture<StrategyBuilderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyBuilderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyBuilderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
