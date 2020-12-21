const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search');

const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY;
const upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY;
const topRated_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY;
const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';



// &language=en-US&page=1

// Get data
const getData = (url, func) => {
    fetch(url)
        .then(response => response.json())
        .then(data => func(data))
}

// Display search
const displaySearch = (obj) => {
    const output = document.querySelector('.output');
    const data = [obj];
    const movies = data[0].results;
    
    let movie = '';
    movies.forEach(item => {
        movie +=`
            <div class="template__wrapper">
                <img src=${imageBaseURL + item.poster_path} class="movie__poster" alt="" />
                <h4 class="movie__title">${item.title}</h4>
                <button class="more__details">More details</button>
            </div>`;
    })

    // Output results
    output.innerHTML = movie;

    // Clear input field
    searchInput.value = '';
}

// Display upcoming movies
const displayUpcomingMovies = (obj) => {
    const upcoming = document.querySelector('.upcoming__movies');
    const movies = obj.results;
    
    let movie = '';
    movies.forEach(item => {
        movie +=`
        <div class="upcoming__card--wrapper">
            <img src=${imageBaseURL + item.poster_path} class="upcoming__poster" alt="" />
        </div>`;
    })

    // Output results
    upcoming.innerHTML = movie;
}

// Display Top Rated movies
const displayTopRatedMovies = (obj) => {
    const topRated = document.querySelector('.top__rated--movies');
    const movies = obj.results;
    
    let movie = '';
    movies.forEach(item => {
        movie +=`
        <div class="top__rated--wrapper">
            <img src=${imageBaseURL + item.poster_path} class="upcoming__poster" alt="" />
        </div>`;
    })

    // Output results
    topRated.innerHTML = movie;
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

const handleTopRatedMovies = () => {
    getData(topRated_URL, displayTopRatedMovies);
}


handleUpcomingMovies();
handleTopRatedMovies();
searchMovie();