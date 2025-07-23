import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TemperatureApiService } from '@core/api';
import { TemperatureFilters } from './temperature-filters/temperature-filters';
import { TemperatureChart } from './temperature-chart/temperature-chart';
import { TemperatureStatsCard } from './temperature-stats-card/temperature-stats-card';
import { TemperatureInsightBox } from './temperature-insight-box/temperature-insight-box';
import { StackedInsightsLayout } from '@ui/layouts';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    StackedInsightsLayout,
    TemperatureFilters,
    TemperatureChart,
    TemperatureStatsCard,
    TemperatureInsightBox
  ],
  providers: [TemperatureApiService],
  template: `
    @let temperatures = temperatureApiService.temperatures();
    @let isLoading = temperatureApiService.isLoading();
    @let error = temperatureApiService.error();

    <ui-stacked-insights-layout>
      <app-temperature-filters filters [data]="temperatures"></app-temperature-filters>
      <app-temperature-chart chart [data]="temperatures"></app-temperature-chart>
      <app-temperature-stats-card stats [data]="temperatures"></app-temperature-stats-card>
      <app-temperature-insight-box insight [data]="temperatures"></app-temperature-insight-box>
    </ui-stacked-insights-layout>
  `,
})
export class App {
  protected readonly temperatureApiService: TemperatureApiService = inject(TemperatureApiService);

  constructor() {
    afterNextRender(() => {
      this.temperatureApiService.load();
    });
  }
}
