const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search');

const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY;

const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

// Get data
const getData = (url, func) => {
    fetch(url)
        .then(response => response.json())
        .then(data => func(data))
}

// Display data
const displayMovies = (obj) => {
    const output = document.querySelector('.output');
    const data = [obj];
    const movies = data[0].results;
    
    let movie = '';
    movies.forEach(item => {
        movie +=`
            <div class="template__wrapper">
                <img src=${imageBaseURL + item.poster_path} class="movie__poster" alt="" />
                <h3 class="movie__title">${item.title}</h3>
                <button class="more__details">More details</button>
            </div>`;
    })

    // Output results
    output.innerHTML = movie;

    // Clear input field
    searchInput.value = '';
}

// Handle movie search
const searchMovie = () => {
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const value = searchInput.value;
        const newURL = search_url + '&query=' + value;
        getData(newURL, displayMovies);
    })
}

searchMovie();