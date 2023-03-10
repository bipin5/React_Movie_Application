import axios from "axios";
import { baseURL, API_KEY } from "constants/constants";

export default async function movieApi() {
  try {
    const response = await axios.get(
      `${baseURL}/movie/popular?api_key=${API_KEY}`
    );
    const {
      data: { results },
    } = response;

    return results;
  } catch (err) {
    console.error(err);
  }
}
