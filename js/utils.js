const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';


// HANDLE UPCOMING MOVIES DISPLAY
export const displayUpcomingMovies = (obj) => {
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
export const displayTopRatedMovies = (obj) => {
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



// HANDLE SEARCH DISPLAY
export const displaySearch = (obj) => {
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