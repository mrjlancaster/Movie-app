const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

export const displayUpcomingMovies = (obj) => {
    const upcoming = document.querySelector('.upcoming__movies');
    const movie = obj.results[10];
    const poster = imageBaseURL + movie.poster_path;
    const title = movie.title;
    const overview = movie.overview;


    let moviePoster = `
        <div class="upcoming__card--wrapper">
            <div class="upcoming__description">
                <h1 class="upcoming__title">${title}</h1>
                <div class="upcoming__overview">
                    <h3 class="overview__title">The <br />Story</h3>
                    <div>
                        <p class="overview__description">${overview}</p>
                        <button type="button" class="upcoming__button">Read more <i class="fas fa-long-arrow-alt-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="upcoming__poster--container" style="background-image: url(${poster});"></div>
        </div>
    `;

    
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