import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-stacked-insights-layout',
  styleUrl: './stacked-insights-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="">
    <ng-content select="[filters]"></ng-content>
  </div>

  <div class="">
    <ng-content select="[chart]"></ng-content>
  </div>

  <div class="">
    <div class="">
      <ng-content select="[stats]"></ng-content>
    </div>
    <div class="">
      <ng-content select="[insight]"></ng-content>
    </div>
  </div>
  `,
})
export class StackedInsightsLayout {

}
