const imageBaseURL = "https://image.tmdb.org/t/p/w342/";

export const displayLatest = (obj) => {
  const latest = document.querySelector(".latest__movies");
  const latestHeading = document.querySelector(".latest__heading");
  const movies = obj.results;

  // Insert heading
  latestHeading.innerText = "Playing on theatre NOW!";

  // Create movie card
  let movie = "";
  movies.forEach((item) => {
    movie += `
        <div class="latest__wrapper">
            <img src=${imageBaseURL + item.poster_path} data-movie-id=${
      item.id
    } class="latest__poster" alt="" />
            <p class="latest__title">${item.title}</p>
        </div>`;
  });

  // Output results
  latest.innerHTML = movie;
};
