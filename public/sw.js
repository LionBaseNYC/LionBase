/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7d6222db3d7dccfa4c30.js"
  },
  {
    "url": "app-33eff8fefac2d4b99407.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-0d0a529deb4700809c6b.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "439e0b9abb904c7513d110d0fb874db6"
  },
  {
    "url": "1.1409b888b1a06682b7d6.css"
  },
  {
    "url": "1-dfa0214ecabc9716b8d6.js"
  },
  {
    "url": "component---src-pages-404-js-738f44dea4c2a10b0ef6.js"
  },
  {
    "url": "0-d35c2e2db9e163229110.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|\/static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');
"use strict";

/* global importScripts, workbox, idbKeyval */
importScripts("idb-keyval-iife.min.js");
var WHITELIST_KEY = "custom-navigation-whitelist";
var navigationRoute = new workbox.routing.NavigationRoute(function (_ref) {
  var event = _ref.event;

  var _ref2 = new URL(event.request.url),
      pathname = _ref2.pathname;

  return idbKeyval.get(WHITELIST_KEY).then(function (customWhitelist) {
    if (customWhitelist === void 0) {
      customWhitelist = [];
    }

    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      var offlineShell = "/offline-plugin-app-shell-fallback/index.html";
      var cacheName = workbox.core.cacheNames.precache;
      return caches.match(offlineShell, {
        cacheName: cacheName
      });
    }

    return fetch(event.request);
  });
});
workbox.routing.registerRoute(navigationRoute);
var updatingWhitelist = null;

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(function () {
      return rawWhitelistPathnames(pathnames);
    });
  }

  updatingWhitelist = idbKeyval.get(WHITELIST_KEY).then(function (customWhitelist) {
    if (customWhitelist === void 0) {
      customWhitelist = [];
    }

    pathnames.forEach(function (pathname) {
      if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname);
    });
    return idbKeyval.set(WHITELIST_KEY, customWhitelist);
  }).then(function () {
    updatingWhitelist = null;
  });
  return updatingWhitelist;
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(function () {
      return rawResetWhitelist();
    });
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(function () {
    updatingWhitelist = null;
  });
  return updatingWhitelist;
}

var messageApi = {
  whitelistPathnames: function whitelistPathnames(event) {
    var pathnames = event.data.pathnames;
    pathnames = pathnames.map(function (_ref3) {
      var pathname = _ref3.pathname,
          includesPrefix = _ref3.includesPrefix;

      if (!includesPrefix) {
        return "" + pathname;
      } else {
        return pathname;
      }
    });
    event.waitUntil(rawWhitelistPathnames(pathnames));
  },
  resetWhitelist: function resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist());
  }
};
self.addEventListener("message", function (event) {
  var gatsbyApi = event.data.gatsbyApi;
  if (gatsbyApi) messageApi[gatsbyApi](event);
});