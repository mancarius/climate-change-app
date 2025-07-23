import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedInsightsLayout } from './stacked-insights-layout';

describe('StackedInsightsLayout', () => {
  let component: StackedInsightsLayout;
  let fixture: ComponentFixture<StackedInsightsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedInsightsLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedInsightsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
