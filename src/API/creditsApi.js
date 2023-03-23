import axios from "axios";

import { baseURL, API_KEY } from "constants/constants";

export default async function CreditsApi(id) {
  try {
    const response = await axios.get(`
        ${baseURL}/movie/${id}/credits?api_key=${API_KEY}
        `);

    return response;
  } catch (error) {
    console.error(error);
  }
}
