import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyGetStartedComponentComponent } from './strategy-get-started-component.component';

describe('StrategyGetStartedComponentComponent', () => {
  let component: StrategyGetStartedComponentComponent;
  let fixture: ComponentFixture<StrategyGetStartedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyGetStartedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyGetStartedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
