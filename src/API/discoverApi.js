import axios from "axios";

import { baseURL, API_KEY } from "constants/constants";

export default async function DiscoverApi(page, genre, year, orderBy) {
  try {
    const response = await axios.get(
      `${baseURL}/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=${genre}&primary_release_year=${year}&sort_by=${orderBy}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
