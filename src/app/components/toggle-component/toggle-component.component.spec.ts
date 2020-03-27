import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponentComponent } from './toggle-component.component';

describe('ToggleComponentComponent', () => {
  let component: ToggleComponentComponent;
  let fixture: ComponentFixture<ToggleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
