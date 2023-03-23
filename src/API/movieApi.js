import axios from "axios";

import { baseURL, API_KEY } from "constants/constants";

export default async function MovieApi(page) {
  try {
    const response = await axios.get(
      `${baseURL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );

    return response;
  } catch (err) {
    console.error(err);
  }
}
