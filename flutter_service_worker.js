'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6d73ce4d324f9627cf6fa695d3caf8ad",
"index.html": "24e004bcd10275e11fd6a540c89257cc",
"/": "24e004bcd10275e11fd6a540c89257cc",
"main.dart.js": "11afe4f0c490448cde130c8a9cfca050",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c3bc03f55a747a98eb1689888e91042a",
"assets/AssetManifest.json": "a5f17fc93257056acb294ecb31c3cd26",
"assets/NOTICES": "1bca021ce397fe14e4f9bee131a675ab",
"assets/FontManifest.json": "17ccff687efde9dbc23c20717e304947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/lib/i18n/en_US.json": "874fc26a1e5eac39f01ec5f4fb895c44",
"assets/lib/i18n/fr_FR.json": "dde370de48cc9c6f4d452eff57ce57dd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/userProfile.png": "2acdaa12fcbeab4a572ad4dcd077cbd1",
"assets/assets/images/reload.png": "1f78306b176497837966f993c31ce5a6",
"assets/assets/icons/grid.svg": "98cf20dc651c0af0bc715af1b767e42e",
"assets/assets/icons/search.svg": "3fe322c1e391728e9aa316346804e3ff",
"assets/assets/icons/carnet.svg": "af0bde9ebabff521380665e345a882d6",
"assets/assets/icons/user.svg": "bb6297dd4ed9c2ea1856d8c397aa7b98",
"assets/assets/icons/circle.svg": "01aeb0eb078c3b6ab3c49f15c3982267",
"assets/assets/icons/close_eye.svg": "42f06600f2f9cca5bf762f1a9d80b49b",
"assets/assets/icons/home.svg": "f4d30e8262cef53ae3693153eb037dfd",
"assets/assets/icons/cancel.svg": "ffc47222920dac5d9ce4febe16395b72",
"assets/assets/icons/Vector.svg": "8d73f33d7a48f12b2c5c0aa648431bdd",
"assets/assets/icons/file.svg": "b36236d3a975f1bbd378290994eab90f",
"assets/assets/icons/momo.svg": "7b71c8a1b6f4799bd29055c5768c635e",
"assets/assets/icons/qr-code.svg": "8229301ebd307899ce74dcc7083242d4",
"assets/assets/icons/app-logo.svg": "c4652faff90a336de97329be60de8470",
"assets/assets/icons/download.svg": "69f3ce0e901f0fd3397bdb74b36e77e9",
"assets/assets/icons/gallery.svg": "ca4bba2df014f439c76ab95e1de54819",
"assets/assets/icons/book.svg": "4e2071e93721a3a2fecb3b90ee916ed7",
"assets/assets/icons/dashboard.svg": "ad2a6d8d545b9845b87a7c52994e7b8c",
"assets/assets/icons/coinsbag.svg": "0e5f8cef8180d493a14328e86ae6503b",
"assets/assets/icons/trip_planer.svg": "b56a0e0c0e4f5eb79fb58cbd9558123d",
"assets/assets/icons/small-slide.svg": "a6a8df4194d887ee14cfc2e22d8206a7",
"assets/assets/icons/add.svg": "913d8ac9449b4b58c634821593c3bd71",
"assets/assets/icons/staff.svg": "fbf7c510a91f301c7ed945124149fe4d",
"assets/assets/icons/setting.svg": "857453050e7f4ea085341cfa14565968",
"assets/assets/icons/add_trip.svg": "a47fe7c2532f84c9b18ed4f9fcb0d674",
"assets/assets/icons/camera.svg": "b7e133b0b6b1da30b1326bde4ed7d1cf",
"assets/assets/icons/user_role.svg": "4f115b52c555b85b30e93849a363a25e",
"assets/assets/icons/trash.svg": "b3386296d6a5a605524c49137a5f26bd",
"assets/assets/icons/edit.svg": "808e66d83a98dc5e519a64febb2a2123",
"assets/assets/icons/locate.svg": "14289601d8db3c6ce121a8655c6fd233",
"assets/assets/icons/delete.svg": "b3386296d6a5a605524c49137a5f26bd",
"assets/assets/icons/phone.svg": "5967e03fe03aebd352f2e98409960e81",
"assets/assets/icons/eye.svg": "c41d586c2c6093baac87f13e51ee42ba",
"assets/assets/icons/location.svg": "47517acef64362a74de6e0e52102d976",
"assets/assets/icons/car.svg": "58d5def10028b9e8cf8a1ebdc28a4ce1",
"assets/assets/icons/money.svg": "87e4a566e4dfa16deb3586dee1a6a405",
"assets/assets/icons/filter.svg": "fa077d8c200609feb2d6cb16a767ca37",
"assets/assets/icons/new-ticket.svg": "18903887b982b5813b7c6bd85348db6c",
"assets/assets/icons/big-slide.svg": "d3aab60cf3864edd5c242ea0c8e077f3",
"assets/assets/icons/folder.svg": "8f21d39fcb0533b7cd4fb72caa8b3b17",
"assets/assets/icons/Orange.svg": "115c4d12db42f763f5551906b5151e11",
"assets/assets/icons/MTN.svg": "5dd0b1c8122536dc2590d18b72086cd8",
"assets/assets/fonts/SignikaNegative-Bold.ttf": "8de0d9513edec990658e47f19214ba60",
"assets/assets/fonts/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"assets/assets/fonts/SignikaNegative-Semibold.ttf": "ba47f127880754527c4ebd36c49830a5",
"assets/assets/fonts/SignikaNegative-Regular.ttf": "c4e2aa44f59f3392ab37e9492e57bd42",
"assets/assets/fonts/SignikaNegative-Light.ttf": "6f177229c120090f7700bffc7ae521b1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
