import { displayUpcomingMovies, displayTopRatedMovies, displaySearch } from './utils.js';

const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search');
// const previousButton = document.querySelector('.upcoming__previous--button');
// const nextButton = document.querySelector('.upcoming__next--button');

// let slideCounter = 0;
// const upcomingCardContainerWidth = container[0].clientWidth;

const API_KEY = process.env.API_KEY;
const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY;
const upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY;
const topRated_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY;

// Get data
const getData = (url, func) => {
    fetch(url)
        .then(response => response.json())
        .then(data => func(data))
}

// Handle movie search
const searchMovie = () => {
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const value = searchInput.value;
        const newURL = search_url + '&query=' + value;
        getData(newURL, displaySearch);
    })
}

// Handle upcoming movies
const handleUpcomingMovies = () => {
    getData(upcoming_URL, displayUpcomingMovies);
}

// Handle top rated movies
const handleTopRatedMovies = () => {
    getData(topRated_URL, displayTopRatedMovies);
}


handleUpcomingMovies();
handleTopRatedMovies();
searchMovie();

