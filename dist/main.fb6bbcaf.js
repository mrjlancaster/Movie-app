// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/poster-unavailable.jpg":[function(require,module,exports) {
module.exports = "/poster-unavailable.cf09f361.jpg";
},{}],"js/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displaySearch = exports.displayTopRatedMovies = exports.displayUpcomingMovies = void 0;

var _posterUnavailable = _interopRequireDefault(require("../img/poster-unavailable.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchInput = document.querySelector('.search__input');
var imageBaseURL = 'https://image.tmdb.org/t/p/w500/'; // Poster placeholder

// HANDLE UPCOMING MOVIES DISPLAY
var displayUpcomingMovies = function displayUpcomingMovies(obj) {
  var upcoming = document.querySelector('.upcoming__movies');
  var movie = obj.results[0];
  var moviePoster = "\n        <div class=\"upcoming__card--wrapper\">\n            <div class=\"upcoming__poster--container\">\n                <img src=".concat(imageBaseURL + movie.poster_path, " class=\"upcoming__poster\" alt=\"\" />\n            </div>\n            <div class=\"upcoming__description\">\n                <h1 class=\"upcoming__title\">").concat(movie.title, "</h1>\n                <div class=\"upcoming__text--container\">\n                    <p class=\"upcoming__story\">Story</p>\n                    <p class=\"upcoming__story--description\">").concat(movie.overview, "</p>\n                </div>\n            </div>\n        </div>"); // let movie = '';
  // movies.forEach(item => {
  //     movie +=`
  //     <div class="upcoming__card--wrapper">
  //         <div class="upcoming__poster--container">
  //             <img src=${imageBaseURL + item.poster_path} class="upcoming__poster" alt="" />
  //         </div>
  //         <div class="upcoming__description">
  //             <h1 class="upcoming__title">${item.title}</h1>
  //             <div>
  //                 <p class="upcoming__story">Story</p>
  //                 <p class="upcoming__story--description">${item.overview}</p>
  //             </div>
  //         </div>
  //     </div>`;
  // })
  // Output results

  upcoming.innerHTML = moviePoster;
}; // Display Top Rated movies


exports.displayUpcomingMovies = displayUpcomingMovies;

var displayTopRatedMovies = function displayTopRatedMovies(obj) {
  var topRated = document.querySelector('.top__rated--movies');
  var movies = obj.results;
  var movie = '';
  movies.forEach(function (item) {
    movie += "\n        <div class=\"top__rated--wrapper\">\n            <img src=".concat(imageBaseURL + item.poster_path, " class=\"top__rated--poster\" alt=\"\" />\n        </div>");
  }); // Output results

  topRated.innerHTML = movie;
}; // HANDLE SEARCH DISPLAY


exports.displayTopRatedMovies = displayTopRatedMovies;

var displaySearch = function displaySearch(obj) {
  var upcomingContainer = document.querySelector('.upcoming');
  var topRatedContainer = document.querySelector('.top__rated');
  var output = document.querySelector('.output');
  var heading = document.querySelector('.search__results--heading');
  var data = [obj];
  var movies = data[0].results; // clear container

  upcomingContainer.classList.add('hideAll');
  topRatedContainer.classList.add('hideAll');
  heading.innerText = 'Results';
  var movie = '';
  movies.forEach(function (item) {
    movie += "\n            <div class=\"template__wrapper\">\n                <img src=".concat(item.poster_path === null ? _posterUnavailable.default : imageBaseURL + item.poster_path, " class=\"search__movie--poster\" alt=\"\" />\n                <h4 class=\"movie__title\">").concat(item.title, "</h4>\n                <button class=\"more__details\">More details</button>\n            </div>");
  }); // Output results

  output.innerHTML = movie; // Clear input field

  searchInput.value = '';
}; // // test handle one
// export const displayOne = (obj) => {
//     const output = document.querySelector('.welcome__section');
//     const data = [obj];
//     const movies = data[0].results[0];
//     const title = movies.title;
//     const poster = movies.poster_path;
//     const story = movies.overview;
//     let movie =
//             `<div class="welcome__title--container">
//             <div>
//                 <h1 class="welcome__title">${title}</h1>
//                 <p class="welcome__title--text">20 december <span>|</span> Fantasy, Drama</p>
//             </div>
//             </div>
//             <div class="welcome__poster--container">
//             <img class="welcome__poster" src=${imageBaseURL + poster} alt="">
//             </div>
//             <div class="description__container">
//             <h3 class="welcome__story--title">The Story</h3>
//             <p class="welcome__story--description">${story}</p>
//             </div>`;
//     // Output results
//     output.innerHTML = movie;
// }


exports.displaySearch = displaySearch;
},{"../img/poster-unavailable.jpg":"img/poster-unavailable.jpg"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _utils = require("./utils.js");

var searchInput = document.querySelector('.search__input');
var searchButton = document.querySelector('.search'); // const previousButton = document.querySelector('.upcoming__previous--button');
// const nextButton = document.querySelector('.upcoming__next--button');
// let slideCounter = 0;
// const upcomingCardContainerWidth = container[0].clientWidth;

var api_key = "e52593a87eedaa85c0101c33dea06770";
var search_url = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key;
var upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + api_key;
var topRated_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + api_key; // Get data

var getData = function getData(url, func) {
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    return func(data);
  });
}; // Handle movie search


var searchMovie = function searchMovie() {
  searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    var value = searchInput.value;
    var newURL = search_url + '&query=' + value;
    getData(newURL, _utils.displaySearch);
  });
}; // Handle upcoming movies


var handleUpcomingMovies = function handleUpcomingMovies() {
  getData(upcoming_URL, _utils.displayUpcomingMovies);
}; // Handle top rated movies


var handleTopRatedMovies = function handleTopRatedMovies() {
  getData(topRated_URL, _utils.displayTopRatedMovies);
};

handleUpcomingMovies();
handleTopRatedMovies();
searchMovie();
},{"./utils.js":"js/utils.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55590" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map