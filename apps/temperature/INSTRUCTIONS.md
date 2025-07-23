# 🌡️ Feature: Temperature

Questa feature mostra l'andamento delle anomalie di temperatura globale nel tempo.

## 🎯 Obiettivo

Visualizzare i dati della temperatura (station e land) in forma di grafico, statistiche e insight per l'utente.

## 📋 Dati

- Endpoint: `/temperature-api`
- Risposta:

```json
[
  { "time": "1880.04", "station": "-0.28", "land": "-0.19" },
  { "time": "1880.13", "station": "-0.47", "land": "-0.25" }
]
```

- `time` → anno + mese (convertire in anno)
- `station` → anomalia temperatura alla stazione
- `land` → anomalia temperatura sulla terraferma

## 📊 Cosa sviluppare

### Componenti

✅ `TemperatureChart`
✅ `TemperatureStatsCard`
✅ `TemperatureInsightBox`
✅ `TemperatureFilter`

### Routing

- `/` → landing della feature con grafico + insight

### Modello dati

```ts
export interface TemperatureData {
  year: number;
  station: number;
  land: number;
}
```

### Servizi

Usare `TemperatureApiService` (in `libs/core/lib/services`) per accedere ai dati.

## 🔗 Dipendenze

✅ `libs/ui` → componenti UI condivisi  
✅ `libs/core` → servizi e modelli  
✅ `libs/utils` → pipes/helpers

---

# ✔ Checklist di verifica

- [ ] Tutti i componenti sono presenti e funzionanti
- [ ] I dati vengono correttamente recuperati e visualizzati
- [ ] Statistiche e insight sono corretti
- [ ] Responsiveness testata
- [ ] Copertura minima di test/unitari
