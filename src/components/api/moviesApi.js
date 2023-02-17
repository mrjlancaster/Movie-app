import { apiInstance } from "./axios";

export const getLatestMovies = async () => {
  try {
    const res = await apiInstance.get(
      "/movie/now_playing?&language=en-US&page=1"
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedMovies = async () => {
  try {
    const res = await apiInstance.get("/movie/top_rated?");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieById = async (id) => {
  try {
    const res = await apiInstance.get(`/movie/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getPopularMovies = async () => {
  try {
    const res = await apiInstance.get("/movie/popular?&language=en-US&page=1");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const search = async (value) => {
  try {
    const res = await apiInstance.get(`/search/multi?query=${value}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
