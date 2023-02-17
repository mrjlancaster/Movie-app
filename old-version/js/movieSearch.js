const searchInput = document.querySelector('.search__input');
const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';
const backdrop_image = 'https://image.tmdb.org/t/p/original/'

// Poster placeholder
import posterPlaceholder from '../img/poster_unavailable.jpg';

// HANDLE SEARCH DISPLAY
export const displaySearch = (obj) => {
    const topRatedContainer = document.querySelector('.top__rated');
    const output = document.querySelector('.output');
    const heading = document.querySelector('.search__results--heading');
    const result = obj.results;
    const count = obj.total_results;

    // clear top rated container
    topRatedContainer.classList.add('hideAll');

    if (count === 0) {
        heading.innerText = 'No results found.';
    } else {
        heading.innerText = `${count} results found`;
    }
    
    let movie = '';
    let tvShows = '';

    result.forEach(item => {
        if (item.media_type === 'movie') {
            movie +=`
            <div class="template__wrapper">
                <img src=${item.poster_path === null ? posterPlaceholder : imageBaseURL + item.poster_path} data-movie-id=${item.id} class="search__movie--poster" alt="" />
                <h4 class="search__movie--title">${item.title}</h4>
            </div>`;
        } else if (item.media_type === 'tv') {
            tvShows +=`
            <div class="template__wrapper">
                <img src=${item.poster_path === null ? posterPlaceholder : imageBaseURL + item.poster_path} data-movie-id=${item.id} class="search__movie--poster" alt="" />
                <h4 class="search__movie--title">${item.name}</h4>
            </div>`;
        }
    })

    // Output results
    output.innerHTML = movie + tvShows;

    // Clear input field
    searchInput.value = '';
}