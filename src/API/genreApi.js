import axios from "axios";

import { baseURL, API_KEY } from "constants/constants";

export default async function GenreApi() {
  try {
    const response = await axios.get(
      `${baseURL}/genre/movie/list?api_key=${API_KEY}`
    );
    const {
      data: { genres },
    } = response;

    return genres;
  } catch (err) {
    console.error(err);
  }
}
