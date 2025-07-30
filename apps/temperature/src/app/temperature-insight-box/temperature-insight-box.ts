/**
 * Componente per fornire insight basati sui dati delle anomalie di temperatura.
 */
import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { Temperature } from '@core/models';

@Component({
  selector: 'app-temperature-insight-box',
  templateUrl: './temperature-insight-box.html',
  styleUrls: ['./temperature-insight-box.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureInsightBox {
  readonly data = input.required<Temperature[]>();

  readonly insights = computed(() => {
    const data = this.data();
    if (!data || data.length === 0) {
      return null;
    }
    // Esempio di calcolo degli insight basati sui dati delle temperature
    const maxTemp = Math.max(...data.map(item => item.station));
    const minTemp = Math.min(...data.map(item => item.station));
    return { maxTemp, minTemp };
  });
}
