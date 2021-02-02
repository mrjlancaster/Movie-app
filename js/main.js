import { displaySearch } from "./movieSearch.js";
import { welcome } from "./welcome.js";
import { findById } from "./findById.js";
import { displayUpcomingMovies } from "./upcomingMovies.js";
import { displayTopRatedMovies } from "./topRatedMovies.js";
import { displayPopular } from "./popular.js";

const searchInput = document.querySelector(".search__input");
const searchButton = document.querySelector(".search");

const api_key = process.env.API_KEY;
const multiSearch_url =
  "https://api.themoviedb.org/3/search/multi?api_key=" +
  api_key +
  "&include_adult=false";
const upcoming_URL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=" + api_key;
const topRated_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key;
const popular_URL = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key;

// Get data
const getData = (url, func) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => func(data))
    .catch((error) => error);
};

//  SEARCH BAR EVENT LISTENERS
searchInput.addEventListener("keyup", (e) => {
  if (searchInput.value === "") {
    false;
  } else {
    if (e.keyCode === 13) {
      searchMovie();
    }
  }
});

searchButton.addEventListener("click", () => {
  if (searchInput.value === "") {
    false;
  } else {
    searchMovie();
  }
});

// Handle movie search
const searchMovie = () => {
  const value = searchInput.value;
  const multipleSearch = multiSearch_url + "&query=" + value;
  getData(multipleSearch, displaySearch);
};

// Handle data
const handleData = () => {
  // handle welcome section
  getData(upcoming_URL, welcome);
  // handle upcoming movies
  getData(upcoming_URL, displayUpcomingMovies);
  // handle top rated movies
  getData(topRated_URL, displayTopRatedMovies);
  // handle popular movies
  getData(popular_URL, displayPopular);
};

// Display movie info on click
const handleModal = () => {
  const modal = document.querySelector(".modal");
  const modalCard = document.querySelector(".modal__card");
  const closeModal = document.querySelector(".close__modal");

  closeModal.addEventListener("click", () => {
    modalCard.innerHTML = "";
    modal.classList.remove("isShown");
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    const movieID = target.dataset.movieId;

    if (target.tagName.toLowerCase() === "img") {
      modal.classList.add("isShown");
      findById(movieID);
    }
  });
};

handleModal();
handleData();
