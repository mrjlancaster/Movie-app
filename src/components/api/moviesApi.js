import { apiInstance } from "./axios";

export const getLatestMovies = async () => {
  try {
    const res = await apiInstance.get("/movie/latest?");
    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
