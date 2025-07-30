/**
 * Componente per visualizzare i dati delle anomalie di temperatura in un grafico.
 */
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Temperature } from '@core/models';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.html',
  styleUrls: ['./temperature-chart.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureChart {
  /**
   * Dati delle temperature da visualizzare nel grafico.
   */
  readonly data = input.required<Temperature[]>();
}
