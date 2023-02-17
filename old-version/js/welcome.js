const imageBaseURL = 'https://image.tmdb.org/t/p/original/';

export const welcome = (obj) => {
    const welcome = document.querySelector('.welcome');
    const movie = obj.results[11];
    const poster = imageBaseURL + movie.backdrop_path;
    const title = movie.title;
    const overview = movie.overview;
    const movieById_URL = 'https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=' + process.env.API_KEY + '&language=en-US';

    // Add background poster to welcome container
    welcome.style.backgroundImage = `url(${poster})`;

    console.log(obj);
    // get current movie info
    fetch(movieById_URL)
        .then(response => response.json())
        .then(movieById => {
            const genres = movieById.genres; // returns an array

            let moviePoster = `
                <div class="welcome__content">
                    <h1 class="welcome__title">${title}</h1>
                    <div class="welcome__description--container">
                        <p class="welcome__description">${overview}</p>
                        <a href="#" target="_blank" class="welcome__button">View more <i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>`;
            
            // Output results
            welcome.innerHTML = moviePoster;
        })
        .catch(error => error);
}