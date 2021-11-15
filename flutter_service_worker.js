'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/home_two.jpg": "c266245eb14a2376bb210204a6e77df6",
"assets/assets/images/transformer_installation.jpg": "fbd5817d82f4e311fd18b49c77b3a34a",
"assets/assets/images/on_site_service.jpg": "e24b8a4e40b0817784327b3100f4a21f",
"assets/assets/images/sign.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/facebook.jpeg": "9fc383c1e88825b402eca2cc034ca09b",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/logo_transparent.png": "a77a780cf4e9b0f3a5795c8c726831da",
"assets/assets/images/three.png": "5add94e9d89595b6b6eaa1e01dc981bd",
"assets/assets/images/uss.png": "49df55eeead8af9ff0f9479fe2211576",
"assets/assets/images/home_one.jpg": "869c934f4034aaff50e533ceb5660efb",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/sandblasting.jpg": "f1f903c717e2bef9eecd71ded65a0539",
"assets/assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/images/industrial_oven.jpg": "35d4b882a7247f02ca7ffcf094acab1c",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/four.png": "9ece817063304ba55c3dc0b0521517cf",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/two.jpg": "767d1a2f02f55a8ebf44ef2950d136f3",
"assets/assets/images/six.png": "2165fdb7898eeb27f060957c7a07187a",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/one.png": "8cff70b8d1a0eab9943a15cc6e1f51b4",
"assets/assets/images/ariba.jpg": "98b1cd8a038dc61085b4851fb56332d2",
"assets/assets/images/home_three.jpg": "2b73a0c8cc20ca69ab5ae1a52690bc5b",
"assets/assets/images/logo.png": "97ba176af8f723509c8851918f7500e3",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/assets/images/five.png": "8db7a241c41e549e10136c728a8d8ef4",
"assets/assets/images/transformer.jpg": "bfc16b05dfb09744f559219eb2f53447",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/twitter.jpeg": "fbebd5d18e37055648daeebfb1b523dd",
"assets/assets/images/rmu.jpg": "d0dd8c3665c570729daa1a96eaa50f28",
"assets/assets/images/powder_cowding.jpg": "d247611dc4b6f0e3f2b6e63ded63dbb4",
"assets/AssetManifest.json": "33550b4052fe9c999f93fad99e4124ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "42d595a75c8efffa9f95d10e848d1525",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9d3d57f21e96b6052aaf48bd974ffe62",
"main.dart.js": "0aee7666802546ef8dc49c12c87e493b",
".git/objects/18/ab14587be5d62a3089d94f07ac1ed566c613c2": "d2c9fe4a6a542b17df5b3987a384a091",
".git/objects/8b/eb5756a1d83772739deb7d3bc4ad875485872f": "ae07ad962ba324c58a734b8c686c4dec",
".git/objects/75/05c09d875947d13ed690c81d5e0e1aeba6d885": "342f5e1802c8757392c57a0e19bc0151",
".git/objects/d4/70468e6b200ff4bae25435576038254aa78f8e": "5831b7febff7520f4aca27b7e4122c49",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/d8/8eed314af4b090da010bd4e9eb90bcc8483574": "0938d68c47d7ff9c7adb50787994279a",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/60/b8bb9582d339b036ac8c02adcfa7f44b493970": "5b6780892c529010f12f79856882fbec",
".git/objects/3d/553be89191cd3d3f6db81eba3e67f74855f641": "34f98acc47afe5a2666f0d7b7afdead3",
".git/objects/ec/e12f73d82ef01e37822fa6341e56ca8d74cd63": "4c62ec78dd79815d2e368449d6181d8d",
".git/objects/af/6a332ebf81f5ebd2edf2abfe13fc6fdaff92a6": "9a0016f4a3d03fa67135b88190ef71cd",
".git/objects/4b/cb8ebb78abc9ddaf13f2a5bf5093c8c1e8c9f1": "491367f92b9249146f89ef31a6bf59d5",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/c1/adb0b7cd0218f4539f1828c99ce6488a490a04": "8f34df911288896cc008f0c53cf03767",
".git/objects/da/1294143bf9a39db8d717955b908fde0c700e7b": "8ee7b323475d83dc00aeed52fb7d9c03",
".git/objects/f5/f56b3ba898e7fad04e7a690e270eb98933cd46": "b717b89a2f8eaf6b49fbfbecc9a8ffdc",
".git/objects/3c/400ee64d4f676c4c4a3ac746b1a5d7f0b51265": "4123deff6ec3533c22f1f0dbe98477f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/2c/6fe81d3ba323b4acc7b1ad3f42ed9cee751934": "033e62e148772332cffdd794f364241a",
".git/objects/e0/77139b6b7e530a2da871594033e95a4fa561a8": "1c2b7007289669fe8f5160b929cc5c16",
".git/objects/bf/0fce0a6726c39ae41573786aa90d5ca3845ee7": "50a931f73010b88a572a8a2c1063770c",
".git/objects/47/777ee606d1cdcd24f4e15c440bbc7c94e8558e": "7842b6e1433272cb580f31d53de0ee90",
".git/objects/71/23c804b2ee77f13d86564c20305d2f86c40dd2": "6227bd04a803885e04aa7345c008740c",
".git/objects/96/cf1e979f14e456696c516ebce85b7b7e91cef9": "3831a44c086964d2885286e845c04332",
".git/objects/53/d2858071a741e05d71124342d60ecc71e83fdc": "4945d5625c16c86d953cef2d5b819052",
".git/objects/53/464d9ef8420e32cbac1d554fd987080ed3852b": "57ab27bfb485a7511923afe22c775b83",
".git/objects/4a/6d6ee9984b77c7450406d809f0c0bdd02685f1": "b16b4beb4f1d20ab925152f6294dec49",
".git/objects/fb/0f64204454dc657facd13da7dd91cd196758b3": "ce2adc3e0335ec65b8375edd5f9dc058",
".git/objects/50/c0a6edc041452d8ea2692f348f77deb65593ea": "7ba91646ad78408957bdf0307a05a1f8",
".git/objects/1c/70c13c4b575d355a86657ec3f424c258e6167f": "8019f616b2a1177db820e9bc5a5669d6",
".git/objects/5c/a15bc2c0bc83ba6ffe7c1d93d4d4a0d4a27219": "48e850ef5953bb02d5878c31d27f1363",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f9/b1c06cb73a3aad563ba60c79b05f06554cbbd9": "57a9d3a2ebf19e1639f07d4c24418620",
".git/objects/c6/f87d0e2a8d79ad8ea18233afc821e4c5563659": "6f21b302047134d3d9c60657c189b835",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/4e/177df025f8b92be51e2e13a576f809bd4eb126": "470000aabb5c3ff1ce81eda243bef3c7",
".git/objects/b2/d451d2877b76412010694951080cb0e2088dd7": "05a37d78d3dd55ca5893bdba90dee654",
".git/objects/cc/d4f25a701b3aa8f73c13fbe13e379e8d72198c": "c94b7996997b3feaf5f96e7a43689416",
".git/objects/a2/26286c5b33b38efd9627cd17a463b985054863": "28ca6c4bf73849f66724003bdbf50fcd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/ff/e2976e3c666ba9165c23dba3bf74d9c9ca5168": "3a0ac16540f2c6ffd23b243c4c0a5893",
".git/objects/6a/38bdc9d27d5bb7071ece2cc393e6d821fa8d2f": "3987d227677a2b9141e10d262e114f8a",
".git/objects/ef/18debac9f012108fe79ba79151c5e7c00689a4": "55d6bd9265aa69e7449036bdd7232a8e",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/bd/70fa07e6fa4a7c0673f7d5ac6fbd9552ff0ddb": "fa97e87478b3e0a31664d1967f448672",
".git/objects/e8/9aafa8fde4c6267558c06b5f6112db9ddda29c": "e481bd41787244595930c21210269e6f",
".git/objects/e5/19b9a7bcbabd9fb78e57308a6a753e7da13739": "5119270489acb9341689700d924593bb",
".git/objects/9b/3d1fc2e64b883003f2c1d02dd0919f09f9fd87": "2b64f6926e68f4eaeac1e182ba66b66e",
".git/objects/5d/f5200bfc281281425282ffc151c1583fbf3c74": "bc9e8c3ff6c2914291402d4c7cec71a3",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/bb/22f47879aea1c8ae6aac4b1601c53554cc3b7f": "50cf5589876ceac2553acd84a6347aaa",
".git/objects/b0/608b3883af6b2cd196b3b4376112d4a6be5e1d": "4df63de200273ab1513202daf7949b88",
".git/objects/81/09e727c45dfb984ce3113888637e165de6add9": "1d8513c3c9aac3dd960d74c5e4d3acf2",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/13/2c15727564426080b944aab416df422494e80c": "4fbe0d2180c6a0057465498b021e4ad6",
".git/objects/ce/5d325986b82746325787ef51dd645490057b04": "ab7a2dc49e2417e8e85f2ac7c4f8ad13",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/0b/1540409b329f0ce4e36d202cf2187be11f17ca": "26261b6b59843d573d3ea2c6d84d2667",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/93/c9b9e4b6637e9f9195eb5c5f848a00226075d6": "4af066d1b7e5fe762c1a6dd86bf86bfc",
".git/objects/7a/92cd60f7e7072b2b263a09d5cc5bfcd7f58e10": "e9c94f4041b5e8256b454190d17c896e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/ed/2216112af410f0e18c26e4851d402d3492fb5a": "f551cc21b10268e5b845e917d5c1d617",
".git/objects/52/4614b203f08fc3387e6f67d1bc8f0198acd6fd": "f639883ed465d33d9147094792c5fc96",
".git/objects/83/a09d0748da39c2c5df6d8ff08b6c55412db04d": "9ed394e1b90d0676a754fc47292fe14f",
".git/objects/bc/6e9ccb02e97ed2ca2ef6cd1c7ad9fb52a8bc9d": "bff03e351b78b6fb906925777690199b",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/25/f07128b87b360a1f2c5a012e6d184c5aa7d35e": "0558bd34516d890d628e47941bc29abe",
".git/objects/25/5dc33db6983ed5af03a6173accb8f57c3eced4": "62c97d2821726a069817d65fa127bbb4",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/config": "8320830179ed383c3dbbb03f85a5e327",
".git/index": "e1c4039a6ac1fbd24b8d84a79ea01f5a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "c807609e3d10120b0e8443ae1adb6183",
".git/logs/refs/heads/master": "c807609e3d10120b0e8443ae1adb6183",
".git/logs/refs/remotes/origin/master": "5662b27c79199a05b1a20d0f2aba93c4",
".git/COMMIT_EDITMSG": "8974959ea00d8790ff9d7f9f3c7b9212",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/refs/heads/master": "fddea2f00fbb44141639827c77529872",
".git/refs/remotes/origin/master": "fddea2f00fbb44141639827c77529872",
"version.json": "3daa223e44daa89a1858e16114a8f6d3",
"index.html": "2246efcf80473f0aebaf17353dd44ed6",
"/": "2246efcf80473f0aebaf17353dd44ed6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
