import { displaySearch } from './movieSearch.js';
// import { findById } from './findById.js';
import { displayUpcomingMovies } from './upcomingMovies.js';
import { displayTopRatedMovies } from './topRatedMovies.js';
import { findById } from './findById.js';

const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search');

const api_key = process.env.API_KEY;

    // fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.API_KEY}&language=en-US`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    
const multiSearch_url = 'https://api.themoviedb.org/3/search/multi?api_key=' + api_key + '&include_adult=false';
const upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + api_key;
const topRated_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + api_key;

// Get data
const getData = (url, func) => {
    fetch(url)
        .then(response => response.json())
        .then(data => func(data))
        .catch(error => {
            if (error) {
                console.log(error);
            }
        })
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

// // Handle find one
// const findOne = (id) => {

// }

// Display movie info on click
const handleModal = () => {
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close__modal i');

    closeModal.addEventListener('click', () => {
        if (modal) {
            modal.classList.remove('isShown');
        }
    })

    document.addEventListener('click', (e) => {
        const target = e.target;
        const movieID = target.dataset.movieId;
        
        if (target.tagName.toLowerCase() === 'img') {
            modal.classList.add('isShown');
            findById(movieID);
        }
    })
}

handleModal();
handleUpcomingMovies();
handleTopRatedMovies();