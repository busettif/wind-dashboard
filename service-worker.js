/**
 * Service worker minimal, requis par les navigateurs (Chrome/Android en
 * particulier) pour autoriser l'installation en PWA.
 *
 * Volontairement "pass-through" : les données du dashboard doivent
 * toujours être fraîches (vent en temps quasi réel), donc pas de mise
 * en cache des appels réseau ici. On pourrait ajouter un cache pour la
 * coquille statique (HTML/CSS/JS) si on veut un chargement plus rapide
 * ou un minimum de support hors-ligne, mais ce n'est pas fait pour
 * l'instant.
 */

self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request));
});
