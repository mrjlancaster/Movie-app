// const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

// export const displayUpcomingMovies = (obj) => {
//     const upcoming = document.querySelector('.upcoming__movies');
//     const movie = obj.results[5];
//     const poster = imageBaseURL + movie.poster_path;
//     const title = movie.title;
//     const overview = movie.overview;
//     const movieById_URL = 'https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=' + process.env.API_KEY + '&language=en-US'

//     // get current movie info
//     fetch(movieById_URL)
//         .then(response => response.json())
//         .then(movieById => {
//             const genres = movieById.genres; // returns an array

//             let moviePoster = `
//                 <div class="upcoming__card--wrapper">
//                     <div class="upcoming__description">
//                         <h1 class="upcoming__title">${title}</h1>
//                         <p class="upcoming__genre">${genres[0].name} <span class="genre__separator">|</span> ${genres[1].name}</p>
//                         <div class="upcoming__overview">
//                             <h3 class="overview__title">The <br />Story</h3>
//                             <div>
//                                 <p class="overview__description">${overview}</p>
//                                 <button type="button" class="upcoming__button">Read more <i class="fas fa-long-arrow-alt-right"></i></button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="upcoming__poster--container" style="background-image: url(${poster});"></div>
//                 </div>
//             `;
            
//             // Output results
//             upcoming.innerHTML = moviePoster;
//         })
//         .catch(error => error);
        
//     // fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.API_KEY}&language=en-US`)
//     //     .then(response => response.json())
//     //     .then(data => console.log(data))

    

    
//     // let movie = '';
//     // movies.forEach(item => {
//     //     movie +=`
//     //     <div class="upcoming__card--wrapper">
//     //         <div class="upcoming__poster--container">
//     //             <img src=${imageBaseURL + item.poster_path} class="upcoming__poster" alt="" />
//     //         </div>
//     //         <div class="upcoming__description">
//     //             <h1 class="upcoming__title">${item.title}</h1>
//     //             <div>
//     //                 <p class="upcoming__story">Story</p>
//     //                 <p class="upcoming__story--description">${item.overview}</p>
//     //             </div>
//     //         </div>
//     //     </div>`;
//     // })
// }