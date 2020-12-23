const searchInput = document.querySelector('.search__input');
const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

// Poster placeholder
import posterPlaceholder from '../img/poster-unavailable.jpg';



// HANDLE UPCOMING MOVIES DISPLAY
export const displayUpcomingMovies = (obj) => {
    const upcoming = document.querySelector('.upcoming__movies');
    const movie = obj.results[0];

    let moviePoster = `
        <div class="upcoming__card--wrapper">
            <div class="upcoming__poster--container">
                <img src=${imageBaseURL + movie.poster_path} class="upcoming__poster" alt="" />
            </div>
            <div class="upcoming__description">
                <h1 class="upcoming__title">${movie.title}</h1>
                <div class="upcoming__text--container">
                    <p class="upcoming__story">Story</p>
                    <p class="upcoming__story--description">${movie.overview}</p>
                </div>
            </div>
        </div>`;
    
    // let movie = '';
    // movies.forEach(item => {
    //     movie +=`
    //     <div class="upcoming__card--wrapper">
    //         <div class="upcoming__poster--container">
    //             <img src=${imageBaseURL + item.poster_path} class="upcoming__poster" alt="" />
    //         </div>
    //         <div class="upcoming__description">
    //             <h1 class="upcoming__title">${item.title}</h1>
    //             <div>
    //                 <p class="upcoming__story">Story</p>
    //                 <p class="upcoming__story--description">${item.overview}</p>
    //             </div>
    //         </div>
    //     </div>`;
    // })

    // Output results
    upcoming.innerHTML = moviePoster;
}

// Display Top Rated movies
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



// HANDLE SEARCH DISPLAY
export const displaySearch = (obj) => {
    const upcomingContainer = document.querySelector('.upcoming');
    const topRatedContainer = document.querySelector('.top__rated');
    const output = document.querySelector('.output');
    const heading = document.querySelector('.search__results--heading');
    const data = [obj];
    const movies = data[0].results;

    // clear container
    upcomingContainer.classList.add('hideAll');
    topRatedContainer.classList.add('hideAll');

    heading.innerText = 'Results';
    
    let movie = '';
    movies.forEach(item => {

        movie +=`
            <div class="template__wrapper">
                <img src=${item.poster_path === null ? posterPlaceholder : imageBaseURL + item.poster_path} class="search__movie--poster" alt="" />
                <h4 class="movie__title">${item.title}</h4>
                <button class="more__details">More details</button>
            </div>`;
    })

    // Output results
    output.innerHTML = movie;

    // Clear input field
    searchInput.value = '';
}


// // test handle one
// export const displayOne = (obj) => {
//     const output = document.querySelector('.welcome__section');
//     const data = [obj];
//     const movies = data[0].results[0];
//     const title = movies.title;
//     const poster = movies.poster_path;
//     const story = movies.overview;

//     let movie =
//             `<div class="welcome__title--container">
//             <div>
//                 <h1 class="welcome__title">${title}</h1>
//                 <p class="welcome__title--text">20 december <span>|</span> Fantasy, Drama</p>
//             </div>
//             </div>
//             <div class="welcome__poster--container">
//             <img class="welcome__poster" src=${imageBaseURL + poster} alt="">
//             </div>
//             <div class="description__container">
//             <h3 class="welcome__story--title">The Story</h3>
//             <p class="welcome__story--description">${story}</p>
//             </div>`;

//     // Output results
//     output.innerHTML = movie;
// }