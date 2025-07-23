# 🔍 Temperature Feature - Filtri

Questa specifica definisce i filtri da implementare per la feature Temperature.
I filtri devono essere sempre visibili sia su mobile che su desktop.

## 🎯 Obiettivo

Permettere all’utente di esplorare i dati della temperatura in modo più mirato, filtrando per intervallo temporale, tipo di misura, soglia e raggruppamento.

## 📋 Filtri da implementare

### 1️⃣ Intervallo temporale

- Descrizione: Seleziona l'intervallo di mesi da visualizzare.
- Tipo: Month picker
- Valori: `minMonth` → `maxMonth` (es. 1880.01 → 2025.12)
- Componente PrimeNG suggerito: `p-datepicker`

### 2️⃣ Tipo di misura

- Descrizione: Seleziona le serie da mostrare
- Tipo: Checkbox multipla
- Opzioni:
  - Station
  - Land
- Componente PrimeNG: `p-checkbox`

### 3️⃣ Raggruppamento temporale

- Descrizione: Raggruppa i dati per anno, decade o media mobile
- Tipo: Dropdown
- Opzioni:
  - Anno
  - Decade
  - Media mobile (opzionale)
- Componente PrimeNG: `p-dropdown`

### 4️⃣ Evidenzia estremi

- Descrizione: Evidenzia anni in cui l’anomalia supera una soglia
- Tipo: Checkbox + slider soglia
- Opzioni:
  - Abilitato/disabilitato
  - Soglia (es. 1°C, 2°C, ecc.)
- Componenti: `p-checkbox`, `p-slider`

## 📋 UX

- I filtri devono essere sempre visibili, sopra il contenuto su mobile e nella sidebar su desktop.
- Su mobile devono essere a scomparsa (visualizzati tramite )
- Tutti i filtri devono essere reattivi e aggiornare i dati in tempo reale.

---

# ✔ Checklist di verifica

- [ ] Tutti i filtri sono visibili su mobile e desktop
- [ ] I valori iniziali sono corretti (vedi JSON allegato)
- [ ] I dati aggiornano correttamente al cambio dei filtri
- [ ] Responsiveness testata
- [ ] Validazione dei valori funzionante
