import axios from "axios";

import { baseURL, API_KEY } from "constants/constants";

export default async function SearchApi(query) {
  try {
    const response = await axios.get(
      `${baseURL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
