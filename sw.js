// ── Service Worker for Daily Stotra Path PWA ──
const CACHE_NAME = 'stotra-app-v1'; // जब पनि HTML/CSS मा ठूलो परिवर्तन गर्नुहुन्छ, यो 'v2', 'v3' मा बदल्नुहोस्

// पहिले नै क्यास गर्न चाहिने मुख्य फाइलहरू
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  // यदि icon-512.png छ भने त्यो पनि थप्नुहोस्: '/icon-512.png'
];

// १. INSTALL: एप लोड हुँदा मुख्य फाइलहरू क्यास गर्ने
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching core assets');
      return cache.addAll(PRECACHE_ASSETS);
    }).catch((err) => {
      console.warn('[Service Worker] Pre-caching failed:', err);
    })
  );
  // पुरानो Service Worker लाई तुरुन्तै सक्रिय गर्न बाध्य पार्ने
  self.skipWaiting();
});

// २. ACTIVATE: पुराना क्यासहरू हटाएर स्टोरेज सफा गर्ने र तुरुन्तै नियन्त्रण लिने
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // तुरुन्तै सबै खुल्ला ट्याबहरूमा यो नयाँ Service Worker लागू गर्ने
  clients.claim();
});

// ३. FETCH: नेटवर्क अनुरोधहरू व्यवस्थापन गर्ने (Offline Support)
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // हामी आफ्नै डोमेन र Google Fonts बाहेक अरू तेस्रो पक्षका स्क्रिप्टहरू क्यास गर्दैनौं
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const isGoogleFont = requestUrl.hostname.includes('googleapis.com') || requestUrl.hostname.includes('gstatic.com');

  if (!isSameOrigin && !isGoogleFont) {
    return; 
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // यदि क्यासमा छ भने, तुरुन्तै देखाउने (Cache-First strategy for speed)
      if (cachedResponse) {
        return cachedResponse;
      }

      // क्यासमा छैन भने, नेटवर्कबाट ल्याउने र भविष्यको लागि क्यास गर्ने
      return fetch(event.request).then((networkResponse) => {
        // मान्य प्रतिक्रिया हो कि होइन जाँच गर्ने
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // क्यास गर्नका लागि प्रतिक्रिया क्लोन गर्ने
        const responseToCache = networkResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          // Devanagari fonts र स्थानीय फाइलहरू मात्र क्यास गर्ने
          if (isSameOrigin || isGoogleFont) {
            cache.put(event.request, responseToCache);
          }
        });

        return networkResponse;
      }).catch(() => {
        // यदि अफलाइन छ र फाइल क्यासमा पनि छैन भने:
        // HTML को लागि fallback (यहाँ आवश्यक पर्दैन किनकि index.html पहिले नै pre-cached छ)
        // इमेजको लागि HTML मा भएको onerror="bannerFallback(...)" ले नै काम गर्छ।
      });
    })
  );
});
