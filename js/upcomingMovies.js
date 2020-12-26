const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

export const displayUpcomingMovies = (obj) => {
    const upcoming = document.querySelector('.upcoming__movies');
    const movie = obj.results[2];

    let moviePoster = `
        <div class="upcoming__card--wrapper">
            <div class="upcoming__poster--container">
                <img src=${imageBaseURL + movie.poster_path} class="upcoming__poster" alt="" />
            </div>
            <div class="upcoming__description">
                <h1 class="upcoming__title">${movie.title}</h1>
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