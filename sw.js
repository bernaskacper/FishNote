const CACHE_NAME = 'fishnote-v2';

// Pobierz bazową ścieżkę
const getBasePath = () => {
  const path = self.location.pathname;
  return path.substring(0, path.lastIndexOf('/'));
};

const basePath = getBasePath();

// Cache'owane pliki
const urlsToCache = [
  `${basePath}/`,
  `${basePath}/index.html`,
  `${basePath}/manifest.json`,
  `${basePath}/icon-192.png`,
  `${basePath}/icon-512.png`
];

// Instalacja Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Spróbuj cache'ować każdy plik osobno, ignorując błędy
        return Promise.all(
          urlsToCache.map(url => {
            return cache.add(url).catch(err => {
              console.warn(`Failed to cache ${url}:`, err);
            });
          })
        );
      })
  );
  // Wymuś aktywację nowego SW
  self.skipWaiting();
});

// Aktywacja Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Przejmij kontrolę nad wszystkimi klientami
  self.clients.claim();
});

// Obsługa żądań
self.addEventListener('fetch', event => {
  // Ignoruj żądania nie-GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        // Klonuj żądanie
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Sprawdź czy odpowiedź jest poprawna
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Klonuj odpowiedź
          const responseToCache = response.clone();
          
          // Cache'uj nowe zasoby
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(() => {
        // Jeśli jesteśmy offline, zwróć stronę główną dla nawigacji
        if (event.request.mode === 'navigate') {
          return caches.match(`${basePath}/index.html`);
        }
      })
  );
});