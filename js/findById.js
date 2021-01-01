const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

export const findById = (id) => {
    fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + process.env.API_KEY + '&language=en-US')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => error)
}