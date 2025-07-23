import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TemperatureData } from '@core/models';

@Component({
  selector: 'app-temperature-filters',
  imports: [],
  template: `<p>temperature-filters works!</p>`,
  styleUrl: './temperature-filters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureFilters {
  readonly data = input.required<TemperatureData[]>();
}
