import axios from "axios";

import { baseURL, API_KEY } from "constants/constants";

export default async function MovieDetailsApi(id) {
  try {
    const response = await axios.get(
      `${baseURL}/movie/${id}?api_key=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
