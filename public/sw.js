// VTOP Portal Service Worker - Offline Caching Engine
const CACHE_NAME = "vtop-portal-cache-v1";

const CORE_APP_SHELL = [
  "/",
  "/login",
  "/dashboard",
  "/dashboard/timetable",
  "/dashboard/grades",
  "/dashboard/attendance",
  "/dashboard/marks",
  "/dashboard/profile",
  "/dashboard/leave-request",
  "/dashboard/academic-calendar",
  "/manifest.json",
  "/favicon.ico",
  "/vit-bhopal-bg.png"
];

// Install Event - Pre-cache core application shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Pre-caching core application shell...");
        return cache.addAll(CORE_APP_SHELL).catch((err) => {
          console.warn("[Service Worker] Some assets failed to pre-cache during install:", err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up stale cache versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== CACHE_NAME) {
              console.log("[Service Worker] Clearing stale cache:", cache);
              return caches.delete(cache);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-While-Revalidate & Cache-First Strategies
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // 1. Static Assets & Next.js Bundles: Cache-First / Stale-While-Revalidate
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".woff2")
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // Revalidate in background
          fetch(request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse));
              }
            })
            .catch(() => {
              // Ignore network error during background revalidate
            });
          return cachedResponse;
        }

        return fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
            }
            return networkResponse;
          })
          .catch(() => {
            // Return empty response or fallback if asset fetch fails
            return new Response("", { status: 408, headers: { "Content-Type": "text/plain" } });
          });
      })
    );
    return;
  }

  // 2. Navigation / Page Requests: Network-First with Cache Fallback
  if (request.mode === "navigate" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
          }
          return networkResponse;
        })
        .catch(async () => {
          // Serve cached page if network fails (Offline Mode)
          const cachedPage = await caches.match(request);
          if (cachedPage) {
            return cachedPage;
          }
          // Fallback to cached dashboard or root
          const fallbackDashboard = await caches.match("/dashboard");
          if (fallbackDashboard) {
            return fallbackDashboard;
          }
          return caches.match("/");
        })
    );
    return;
  }

  // 3. Default Fetch Handler
  event.respondWith(
    caches.match(request).then((cached) => {
      return (
        cached ||
        fetch(request).then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
      );
    })
  );
});
