/**
 * Componente per visualizzare statistiche sui dati delle anomalie di temperatura.
 */
import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { TemperatureData } from '@core/models';

@Component({
  selector: 'app-temperature-stats-card',
  templateUrl: './temperature-stats-card.html',
  styleUrls: ['./temperature-stats-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureStatsCard {
  readonly data = input.required<TemperatureData[]>();

  readonly stats = computed(() => {
    const data = this.data();
    if (!data || data.length === 0) {
      return null;
    }
    const stationAvg = data.reduce((sum, item) => sum + item.station, 0) / data.length;
    const landAvg = data.reduce((sum, item) => sum + item.land, 0) / data.length;
    return { stationAvg, landAvg };
  });
}
