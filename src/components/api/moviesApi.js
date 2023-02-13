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
