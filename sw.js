/* Guia Estudantil Prático — PWA service worker */
'use strict';
const VERSION = 'gep-pwa-2026-11-05-v14-perfil-salvos-caderno-arrastavel';
const APP_CACHE = `${VERSION}-app`;
const RUNTIME_CACHE = `${VERSION}-runtime`;
const PRECACHE = [
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './assets/pix-qr-memorizeai.png'
];
const CDN_HOSTS = new Set(['cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com']);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_CACHE);
    await cache.addAll(PRECACHE);
    // A instalação inicial assume controle naturalmente; atualizações aguardam aprovação do usuário.
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('gep-pwa-') && ![APP_CACHE, RUNTIME_CACHE].includes(key)).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

async function networkFirst(request, fallbackKey) {
  const cache = await caches.open(RUNTIME_CACHE);
  try {
    const response = await fetch(request);
    if (response && (response.ok || response.type === 'opaque')) {
      cache.put(request, response.clone()).catch(() => {});
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request) || (fallbackKey ? await caches.match(fallbackKey) : null);
    if (cached) return cached;
    throw error;
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) {
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone()).catch(() => {});
  }
  return response;
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return; // Auth, banco e gravações nunca são interceptados pelo cache.
  const url = new URL(request.url);

  if (request.mode === 'navigate' && url.origin === self.location.origin) {
    event.respondWith(networkFirst(request, './index.html').catch(async () => {
      return await caches.match('./index.html') || new Response('O Guia ainda não foi armazenado neste dispositivo. Abra o site uma vez com internet.', {status: 503, headers: {'Content-Type':'text/plain; charset=utf-8'}});
    }));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request).catch(() => caches.match('./index.html')));
    return;
  }

  // Apenas recursos estáticos explicitamente confiáveis são guardados para funcionamento offline.
  if (CDN_HOSTS.has(url.hostname) && ['script', 'style', 'font'].includes(request.destination)) {
    event.respondWith(networkFirst(request));
  }
});
