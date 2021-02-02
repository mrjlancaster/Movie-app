const imageBaseURL = 'https://image.tmdb.org/t/p/w342/';

export const displayPopular = (obj) => {
    const popular = document.querySelector('.popular__movies');
    const popularHeading = document.querySelector('.popular__heading');
    const movies = obj.results;
    
    // Insert heading
    popularHeading.innerText = 'Popular Movies';


    // Create movie card
    let movie = '';
    movies.forEach(item => {
        movie +=`
        <div class="popular__wrapper">
            <img src=${imageBaseURL + item.poster_path} data-movie-id=${item.id} class="popular__poster" alt="" />
            <p class="popular__title">${item.title}</p>
        </div>`;
    })

    // Output results
    popular.innerHTML = movie;
}