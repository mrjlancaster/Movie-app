const imageBaseURL = 'https://image.tmdb.org/t/p/w342/';

export const displayTopRatedMovies = (obj) => {
    const topRated = document.querySelector('.top__rated--movies');
    const topRatedHeading = document.querySelector('.top__rated--heading');
    const movies = obj.results;
    
    // Insert heading
    topRatedHeading.innerText = 'Top Rated Movies';


    // Create movie card
    let movie = '';
    movies.forEach(item => {
        movie +=`
        <div class="top__rated--wrapper">
            <img src=${imageBaseURL + item.poster_path} data-movie-id=${item.id} class="top__rated--poster" alt="" />
            <p class="top__rated--title">${item.title}</p>
        </div>`;
    })

    // Output results
    topRated.innerHTML = movie;
}