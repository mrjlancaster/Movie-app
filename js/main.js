import { displayUpcomingMovies, displayTopRatedMovies, displaySearch } from './utils.js';

const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search');

// let slideCounter = 0;
// const upcomingCardContainerWidth = container[0].clientWidth;

const api_key = process.env.API_KEY;
const multiSearch_url = 'https://api.themoviedb.org/3/search/multi?api_key=' + api_key + '&include_adult=false';
const upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + api_key;
const topRated_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + api_key;

// Get data
const getData = (url, func) => {
    fetch(url)
        .then(response => response.json())
        .then(data => func(data))
        .catch(error => console.log(error))
}

//  SEARCH BAR EVENT LISTENERS
searchInput.addEventListener('keyup', (e) => {
    if (searchInput.value === '') {
        false;
    } else {
        if (e.keyCode === 13) {
            searchMovie();
        }
    }
})

searchButton.addEventListener('click', () => {
    if (searchInput.value === '') {
        false;
    } else {
        searchMovie();
    }
});


// Handle movie search
const searchMovie = () => {
    const value = searchInput.value;
    const multipleSearch = multiSearch_url + '&query=' + value;
    getData(multipleSearch, displaySearch);
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




