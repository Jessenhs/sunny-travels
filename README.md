# 🌞 Sunny Travels - Vakantie Website

Een moderne React-applicatie voor het ontdekken en boeken van droomvakanties. Dit project is ontwikkeld als eindopdracht voor de module NodeJS & React.

## 📋 Functionaliteiten

### ✅ Hoofdpagina (Overzicht)
- **Vakantie cards**: Elke vakantie wordt getoond met titel, korte beschrijving, prijs en afbeelding
- **Zoekfunctionaliteit**: Realtime zoeken op bestemming, land of titel
- **Responsief design**: Optimaal weergegeven op desktop, tablet en mobiel
- **Aantrekkelijke hero sectie** met vakantie-thema

### ✅ Detailpagina
- **Uitgebreide informatie** over de geselecteerde vakantie
- **Hoogtepunten**: Lijst met belangrijkste attracties en activiteiten
- **Prijsinformatie**: Duidelijke weergave van prijs, duur en inclusief-items
- **Boek nu knop**: Directe doorverwijzing naar boekingsformulier

### ✅ Zoek- en filterfunctionaliteit
- **Zoekbalk**: Zoeken op bestemming, land of vakantiename
- **Live resultaten**: Onmiddellijke filtering tijdens het typen
- **Geen resultaten**: Gebruiksvriendelijke melding bij geen matches

### ✅ Boekingsformulier
- **Formuliervalidatie**: Controle op verplichte velden en geldige gegevens
- **Interactieve feedback**: Realtime foutmeldingen en success states
- **Boekingsoverzicht**: Samenvatting van vakantie en totaalprijs
- **Responsive design**: Optimaal op alle apparaten

### ✅ Bevestigingspagina
- **Boekingsbevestiging**: Succes melding met alle details
- **Reserveringsnummer**: Uniek nummer voor de boeking
- **Volgende stappen**: Duidelijke uitleg van het vervolgproces
- **Print functionaliteit**: Mogelijkheid om bevestiging af te drukken

## 🛠 Technische Specificaties

- **Framework**: React 19.1.0 met Vite
- **Routing**: React Router DOM voor navigatie
- **Styling**: Custom CSS met moderne design patterns
- **State Management**: React useState hooks
- **Data Storage**: JavaScript objects/arrays (lokale data)
- **Responsive**: Mobile-first CSS Grid en Flexbox

## 🚀 Installatie en Opstarten

### Vereisten
- Node.js (versie 16 of hoger)
- npm (komt automatisch met Node.js)

### Stap 1: Repository klonen
```bash
git clone <repository-url>
cd sunny-travels
```

### Stap 2: Dependencies installeren
```bash
npm install
```

### Stap 3: Applicatie starten
```bash
npm run dev
```

De applicatie is nu beschikbaar op: `http://localhost:5173`

## 📁 Projectstructuur

```
sunny-travels/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Website header met navigatie
│   │   ├── Header.css
│   │   ├── VacationList.jsx        # Hoofdpagina met vakantie overzicht
│   │   ├── VacationList.css
│   │   ├── VacationCard.jsx        # Individuele vakantie card
│   │   ├── VacationCard.css
│   │   ├── SearchBar.jsx           # Zoekfunctionaliteit
│   │   ├── SearchBar.css
│   │   ├── VacationDetail.jsx      # Detailpagina per vakantie
│   │   ├── VacationDetail.css
│   │   ├── BookingForm.jsx         # Boekingsformulier
│   │   ├── BookingForm.css
│   │   ├── BookingConfirmation.jsx # Bevestigingspagina
│   │   └── BookingConfirmation.css
│   ├── data/
│   │   └── vacations.js            # Vakantie data
│   ├── App.jsx                     # Hoofd App component met routing
│   ├── App.css                     # Globale styling
│   ├── index.css                   # Reset en basis styling
│   └── main.jsx                    # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design & Styling

- **Kleurenschema**: Vakantie-thema met warme oranje tinten (#ff6b35) en paarse accenten
- **Typography**: Moderne, leesbare lettertypes
- **Responsive**: Mobile-first approach met CSS Grid en Flexbox
- **Animations**: Subtiele hover effecten en transitions
- **Accessibility**: Semantische HTML en keyboard navigation

## 📊 Vakantie Data

De applicatie bevat 8 verschillende vakanties:
1. **Zonvakantie Barcelona** - Spanje (€499)
2. **Grieks Eilandhoppen** - Griekenland (€699)
3. **Romantisch Parijs** - Frankrijk (€399)
4. **Amalfi Kust Avontuur** - Italië (€799)
5. **Tropical Bali Retreat** - Indonesië (€899)
6. **Marokkaans Marrakech** - Marokko (€549)
7. **Noorse Fjorden Cruise** - Noorwegen (€1299)
8. **Costa Rica Wildlife** - Costa Rica (€1199)

Elke vakantie bevat:
- Unieke ID voor routing
- Titel en korte/uitgebreide beschrijving
- Prijs per persoon
- Locatie en land
- Afbeelding (via Unsplash)
- Hoogtepunten lijst
- Duur en inclusief items

## 🚦 Development Scripts

```bash
# Development server starten
npm run dev

# Productie build maken
npm run build

# Productie build voorvertonen
npm run preview

# Code linting
npm run lint
```

## 🌟 Features & Highlights

### Gebruikerservaring
- **Intuïtieve navigatie**: Duidelijke routing tussen pagina's
- **Visueel aantrekkelijk**: Mooie afbeeldingen en moderne UI
- **Snelle performance**: Optimalized met Vite bundler
- **Foutafhandeling**: Graceful handling van edge cases

### Technische Implementatie
- **Component-based architectuur**: Herbruikbare React componenten
- **State management**: Lokale state met useState
- **Routing**: Client-side routing met React Router
- **Form validation**: Comprehensive validatie met error handling
- **Data persistence**: SessionStorage voor booking data

### Code Kwaliteit
- **Clean code**: Duidelijke naming conventions
- **Modulaire structuur**: Gescheiden concerns
- **Responsive design**: Mobile-first CSS
- **Performance**: Optimized images en lazy loading

## 👨‍💻 Assessment Criteria

Dit project voldoet aan alle gestelde eisen:

1. ✅ **NodeJS applicatie installeren en uitvoeren**
2. ✅ **Werken met modules en NPM packages**
3. ✅ **React-applicaties aanmaken met NodeJS/Vite**
4. ✅ **React-componenten maken en renderen**
5. ✅ **CSS inzetten voor component styling**
6. ✅ **Data weergeven, manipuleren en filteren**
7. ✅ **Voorwaardelijke rendering toepassen**

## 📝 Toekomstige Uitbreidingen

Mogelijke verbeteringen voor toekomstige versies:
- Backend API integratie
- Database storage voor bookings
- Gebruikers authenticatie
- Payment gateway integratie
- Meerdere talen ondersteuning
- Advanced filtering opties
- Klant reviews en ratings
- Email confirmaties

## 📞 Contact

Voor vragen over dit project of de implementatie, neem contact op via de cursus kanalen.

---

**Sunny Travels** - *Waar elke reis begint met een droom* ✈️🌴
