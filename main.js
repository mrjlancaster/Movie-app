const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search');
const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY;

const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

// Handle movie search
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const value = searchInput.value;
    const newURL = search_url + '&query=' + value;
    const output = document.querySelector('.output');

    let movie = '';

    fetch(newURL)
        .then(results => results.json())
        .then(data => {
            const results = [data];
            const movies = results[0].results;

            movies.forEach(item => {
                movie += `
                <div class="template__wrapper">
                    <img src=${imageBaseURL + item.poster_path} class="movie__poster" alt="" />
                    <h3 class="movie__title">${item.title}</h3>
                    <button class="more__details">More details</button>
                </div>`;
                output.innerHTML = movie;
            })
        });

        // clear input field
        searchInput.value = '';
})
