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
})({"img/poster_unavailable.jpg":[function(require,module,exports) {
module.exports = "/poster_unavailable.6337d145.jpg";
},{}],"js/movieSearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displaySearch = void 0;

var _poster_unavailable = _interopRequireDefault(require("../img/poster_unavailable.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchInput = document.querySelector('.search__input');
var imageBaseURL = 'https://image.tmdb.org/t/p/w500/';
var backdrop_image = 'https://image.tmdb.org/t/p/original/'; // Poster placeholder

// HANDLE SEARCH DISPLAY
var displaySearch = function displaySearch(obj) {
  var topRatedContainer = document.querySelector('.top__rated');
  var output = document.querySelector('.output');
  var heading = document.querySelector('.search__results--heading');
  var result = obj.results;
  var count = obj.total_results; // clear top rated container

  topRatedContainer.classList.add('hideAll');

  if (count === 0) {
    heading.innerText = 'No results found.';
  } else {
    heading.innerText = "".concat(count, " results found");
  }

  var movie = '';
  var tvShows = '';
  result.forEach(function (item) {
    if (item.media_type === 'movie') {
      movie += "\n            <div class=\"template__wrapper\">\n                <img src=".concat(item.poster_path === null ? _poster_unavailable.default : imageBaseURL + item.poster_path, " data-movie-id=").concat(item.id, " class=\"search__movie--poster\" alt=\"\" />\n                <h4 class=\"search__movie--title\">").concat(item.title, "</h4>\n            </div>");
    } else if (item.media_type === 'tv') {
      tvShows += "\n            <div class=\"template__wrapper\">\n                <img src=".concat(item.poster_path === null ? _poster_unavailable.default : imageBaseURL + item.poster_path, " data-movie-id=").concat(item.id, " class=\"search__movie--poster\" alt=\"\" />\n                <h4 class=\"search__movie--title\">").concat(item.name, "</h4>\n            </div>");
    }
  }); // Output results

  output.innerHTML = movie + tvShows; // Clear input field

  searchInput.value = '';
};

exports.displaySearch = displaySearch;
},{"../img/poster_unavailable.jpg":"img/poster_unavailable.jpg"}],"js/welcome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.welcome = void 0;
var imageBaseURL = 'https://image.tmdb.org/t/p/original/';

var welcome = function welcome(obj) {
  var welcome = document.querySelector('.welcome');
  var movie = obj.results[11];
  var poster = imageBaseURL + movie.backdrop_path;
  var title = movie.title;
  var overview = movie.overview;
  var movieById_URL = 'https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=' + undefined + '&language=en-US'; // Add background poster to welcome container

  welcome.style.backgroundImage = "url(".concat(poster, ")");
  console.log(obj); // get current movie info

  fetch(movieById_URL).then(function (response) {
    return response.json();
  }).then(function (movieById) {
    var genres = movieById.genres; // returns an array

    var moviePoster = "\n                <div class=\"welcome__content\">\n                    <h1 class=\"welcome__title\">".concat(title, "</h1>\n                    <div class=\"welcome__description--container\">\n                        <p class=\"welcome__description\">").concat(overview, "</p>\n                        <a href=\"#\" target=\"_blank\" class=\"welcome__button\">View more <i class=\"fas fa-long-arrow-alt-right\"></i></a>\n                    </div>\n                </div>"); // Output results

    welcome.innerHTML = moviePoster;
  }).catch(function (error) {
    return error;
  });
};

exports.welcome = welcome;
},{}],"js/findById.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findById = void 0;
var imageBaseURL = "https://image.tmdb.org/t/p/w500/";

var findById = function findById(id) {
  fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + undefined + "&language=en-US").then(function (response) {
    return response.json();
  }).then(function (data) {
    var cardWrapper = document.querySelector(".modal__card");
    console.log(data);
    var genres = data.genres;
    var releaseDate = data.release_date.split("-");
    var genreList = "";
    genres.forEach(function (item) {
      genreList += "<li class=\"modal__item\">".concat(item.name, "</li>");
    });
    var card = "\n                    <div class=\"modal__poster--container\">\n                        <img src=".concat(imageBaseURL + data.poster_path, " alt=\"Poster\" class=\"modal__poster\">\n                    </div>\n                    <div class=\"modal__content\">\n                        <div class=\"modal__title--wrapper\">\n                            <p class=\"modal__rate\"><span class=\"modal__rate--sizeup\"><i class=\"fas fa-star\"></i> ").concat(data.vote_average, "</span> / 10</p>\n                            <h1 class=\"modal__title\">").concat(data.title, "</h1>\n                            <ul class=\"modal__list\">").concat(genreList, "</ul>\n                            <p class=\"modal__releaseDate\">Release date: ").concat(releaseDate[1], ", ").concat(releaseDate[2], ", ").concat(releaseDate[0], "</p>\n                            <p clas=\"modal__runtime\">Duration: ").concat(data.runtime, "min</p>\n                        </div>\n                        <div class=\"modal__synopsis--wrapper\">\n                            <h3 class=\"modal__overview--heading\">Synopsis</h3>\n                            <p class=\"modal__overview\">").concat(data.overview, "</p>\n                            <a href=\"").concat(data.homepage, "\" target=\"_blank\" class=\"modal__button\">Homepage <i class=\"fas fa-long-arrow-alt-right\"></i></a>\n                        </div>\n                    </div>");
    cardWrapper.innerHTML = card;
  }).catch(function (error) {
    return error;
  });
};

exports.findById = findById;
},{}],"js/upcomingMovies.js":[function(require,module,exports) {
// const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';
// export const displayUpcomingMovies = (obj) => {
//     const upcoming = document.querySelector('.upcoming__movies');
//     const movie = obj.results[5];
//     const poster = imageBaseURL + movie.poster_path;
//     const title = movie.title;
//     const overview = movie.overview;
//     const movieById_URL = 'https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=' + process.env.API_KEY + '&language=en-US'
//     // get current movie info
//     fetch(movieById_URL)
//         .then(response => response.json())
//         .then(movieById => {
//             const genres = movieById.genres; // returns an array
//             let moviePoster = `
//                 <div class="upcoming__card--wrapper">
//                     <div class="upcoming__description">
//                         <h1 class="upcoming__title">${title}</h1>
//                         <p class="upcoming__genre">${genres[0].name} <span class="genre__separator">|</span> ${genres[1].name}</p>
//                         <div class="upcoming__overview">
//                             <h3 class="overview__title">The <br />Story</h3>
//                             <div>
//                                 <p class="overview__description">${overview}</p>
//                                 <button type="button" class="upcoming__button">Read more <i class="fas fa-long-arrow-alt-right"></i></button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="upcoming__poster--container" style="background-image: url(${poster});"></div>
//                 </div>
//             `;
//             // Output results
//             upcoming.innerHTML = moviePoster;
//         })
//         .catch(error => error);
//     // fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.API_KEY}&language=en-US`)
//     //     .then(response => response.json())
//     //     .then(data => console.log(data))
//     // let movie = '';
//     // movies.forEach(item => {
//     //     movie +=`
//     //     <div class="upcoming__card--wrapper">
//     //         <div class="upcoming__poster--container">
//     //             <img src=${imageBaseURL + item.poster_path} class="upcoming__poster" alt="" />
//     //         </div>
//     //         <div class="upcoming__description">
//     //             <h1 class="upcoming__title">${item.title}</h1>
//     //             <div>
//     //                 <p class="upcoming__story">Story</p>
//     //                 <p class="upcoming__story--description">${item.overview}</p>
//     //             </div>
//     //         </div>
//     //     </div>`;
//     // })
// }
},{}],"js/topRatedMovies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayTopRatedMovies = void 0;
var imageBaseURL = 'https://image.tmdb.org/t/p/w342/';

var displayTopRatedMovies = function displayTopRatedMovies(obj) {
  var topRated = document.querySelector('.top__rated--movies');
  var topRatedHeading = document.querySelector('.top__rated--heading');
  var movies = obj.results; // Insert heading

  topRatedHeading.innerText = 'Top Rated Movies'; // Create movie card

  var movie = '';
  movies.forEach(function (item) {
    movie += "\n        <div class=\"top__rated--wrapper\">\n            <img src=".concat(imageBaseURL + item.poster_path, " data-movie-id=").concat(item.id, " class=\"top__rated--poster\" alt=\"\" />\n            <p class=\"top__rated--title\">").concat(item.title, "</p>\n        </div>");
  }); // Output results

  topRated.innerHTML = movie;
};

exports.displayTopRatedMovies = displayTopRatedMovies;
},{}],"js/popular.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayPopular = void 0;
var imageBaseURL = 'https://image.tmdb.org/t/p/w342/';

var displayPopular = function displayPopular(obj) {
  var popular = document.querySelector('.popular__movies');
  var popularHeading = document.querySelector('.popular__heading');
  var movies = obj.results; // Insert heading

  popularHeading.innerText = 'Popular Movies'; // Create movie card

  var movie = '';
  movies.forEach(function (item) {
    movie += "\n        <div class=\"popular__wrapper\">\n            <img src=".concat(imageBaseURL + item.poster_path, " data-movie-id=").concat(item.id, " class=\"popular__poster\" alt=\"\" />\n            <p class=\"popular__title\">").concat(item.title, "</p>\n        </div>");
  }); // Output results

  popular.innerHTML = movie;
};

exports.displayPopular = displayPopular;
},{}],"js/latest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayLatest = void 0;
var imageBaseURL = 'https://image.tmdb.org/t/p/w342/';

var displayLatest = function displayLatest(obj) {
  var latest = document.querySelector('.latest__movies');
  var latestHeading = document.querySelector('.latest__heading');
  var movies = obj.results; // Insert heading

  latestHeading.innerText = 'Playing on theatre NOW!'; // Create movie card

  var movie = '';
  movies.forEach(function (item) {
    movie += "\n        <div class=\"latest__wrapper\">\n            <img src=".concat(imageBaseURL + item.poster_path, " data-movie-id=").concat(item.id, " class=\"latest__poster\" alt=\"\" />\n            <p class=\"latest__title\">").concat(item.title, "</p>\n        </div>");
  }); // Output results

  latest.innerHTML = movie;
};

exports.displayLatest = displayLatest;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _movieSearch = require("./movieSearch.js");

var _welcome = require("./welcome.js");

var _findById = require("./findById.js");

var _upcomingMovies = require("./upcomingMovies.js");

var _topRatedMovies = require("./topRatedMovies.js");

var _popular = require("./popular.js");

var _latest = require("./latest.js");

var searchInput = document.querySelector(".search__input");
var searchButton = document.querySelector(".search");
var api_key = undefined;
var multiSearch_url = "https://api.themoviedb.org/3/search/multi?api_key=" + api_key + "&include_adult=false";
var upcoming_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + api_key;
var topRated_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key;
var popular_URL = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key;
var latest_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(api_key, "&language=en-US&page=1"); // Get data

var getData = function getData(url, func) {
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    return func(data);
  }).catch(function (error) {
    return error;
  });
}; //  SEARCH BAR EVENT LISTENERS


searchInput.addEventListener("keyup", function (e) {
  if (searchInput.value === "") {
    false;
  } else {
    if (e.keyCode === 13) {
      searchMovie();
    }
  }
});
searchButton.addEventListener("click", function () {
  if (searchInput.value === "") {
    false;
  } else {
    searchMovie();
  }
}); // Handle movie search

var searchMovie = function searchMovie() {
  var value = searchInput.value;
  var multipleSearch = multiSearch_url + "&query=" + value;
  getData(multipleSearch, _movieSearch.displaySearch);
}; // Handle data


var handleData = function handleData() {
  // handle welcome section
  getData(upcoming_URL, _welcome.welcome); // handle upcoming movies

  getData(upcoming_URL, _upcomingMovies.displayUpcomingMovies); // handle top rated movies

  getData(topRated_URL, _topRatedMovies.displayTopRatedMovies); // handle popular movies

  getData(popular_URL, _popular.displayPopular); // handle latest movies

  getData(latest_URL, _latest.displayLatest);
}; // Display movie info on click


var handleModal = function handleModal() {
  var modal = document.querySelector(".modal");
  var modalCard = document.querySelector(".modal__card");
  var closeModal = document.querySelector(".close__modal");
  closeModal.addEventListener("click", function () {
    modalCard.innerHTML = "";
    modal.classList.remove("isShown");
  });
  document.addEventListener("click", function (e) {
    var target = e.target;
    var movieID = target.dataset.movieId;

    if (target.tagName.toLowerCase() === "img") {
      modal.classList.add("isShown");
      (0, _findById.findById)(movieID);
    }
  });
};

handleModal();
handleData();
},{"./movieSearch.js":"js/movieSearch.js","./welcome.js":"js/welcome.js","./findById.js":"js/findById.js","./upcomingMovies.js":"js/upcomingMovies.js","./topRatedMovies.js":"js/topRatedMovies.js","./popular.js":"js/popular.js","./latest.js":"js/latest.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54299" + '/');

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