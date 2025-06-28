# FishNote - Aplikacja PWA dla Wędkarzy

## 📱 O aplikacji

FishNote to minimalistyczna aplikacja Progressive Web App (PWA) stworzona dla wędkarzy do dokumentowania swoich połowów. Aplikacja pozwala na zapisywanie zdjęć złowionych ryb wraz z szczegółowymi informacjami.

## 🎣 Funkcje

- **Dodawanie ryb** - zapisuj zdjęcia bezpośrednio z aparatu lub galerii
- **Szczegółowe dane** - gatunek, miejsce połowu, wymiary i waga
- **Album** - przeglądaj wszystkie złowione ryby z datą i godziną
- **Offline** - działa bez połączenia z internetem
- **PWA** - możliwość instalacji na ekranie głównym telefonu

## 🎨 Design

Aplikacja wykorzystuje minimalistyczną paletę kolorów:
- Pudrowa zieleń (#7FB069)
- Pudrowy brąz (#A68B5B)
- Delikatny niebieski (#6B9EAF)
- Jasne tło (#F5F2ED)

## 📁 Struktura plików

```
fishnote/
├── index.html          # Główny plik aplikacji
├── manifest.json       # Manifest PWA
├── service-worker.js   # Service Worker dla funkcji offline
├── icon-192.png       # Ikona aplikacji 192x192
├── icon-512.png       # Ikona aplikacji 512x512
└── README.md          # Dokumentacja
```

## 🚀 Instalacja

1. Sklonuj repozytorium lub pobierz pliki
2. Umieść wszystkie pliki na serwerze WWW (wymagany HTTPS dla PWA)
3. Otwórz aplikację w przeglądarce mobilnej
4. Dodaj do ekranu głównego (opcja w menu przeglądarki)

## 💾 Dane

Aplikacja przechowuje dane lokalnie w przeglądarce (localStorage). Dane nie są synchronizowane między urządzeniami.

## 🛠️ Technologie

- HTML5
- CSS3 (z Custom Properties)
- Vanilla JavaScript
- PWA (Service Worker, Web App Manifest)
- LocalStorage API

## 📱 Kompatybilność

- iOS Safari 11.3+
- Chrome 67+
- Firefox 57+
- Samsung Internet 6.2+

## 🔧 Rozwój

Aby dodać nowe funkcje:
1. Edytuj `index.html` dla zmian w interfejsie
2. Zaktualizuj `service-worker.js` przy dodawaniu nowych plików
3. Zwiększ wersję cache w service worker

## 📄 Licencja

Projekt dostępny na licencji MIT.