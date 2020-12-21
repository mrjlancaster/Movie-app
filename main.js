const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search');
const api_url = 'https://api.themoviedb.org/3/search/movie?api_key=' + movie_API;


searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const value = searchInput.value;
    const newURL = api_url + '&query=' + value;

    fetch(newURL)
        .then(results => results.json())
        .then(data => console.log(data))
})