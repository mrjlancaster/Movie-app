const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

export const displayTopRatedMovies = (obj) => {
    const topRated = document.querySelector('.top__rated--movies');
    const movies = obj.results;
    
    let movie = '';
    movies.forEach(item => {
        movie +=`
        <div class="top__rated--wrapper">
            <img src=${imageBaseURL + item.poster_path} class="top__rated--poster" alt="" />
        </div>`;
    })

    // Output results
    topRated.innerHTML = movie;
}