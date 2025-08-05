import { movieToMovieDTO, type movieDTO } from "../dto/movieDTO";
import { API_MOVIE_URL } from "../utils/constants";
import { getToken } from "../utils/token";

export const getMovies = async (search: string): Promise<movieDTO[] | null> => {
  if (search === null || search === "") return null;

  // TODO: Agregar paginado
  try {
    const response = await fetch(`${API_MOVIE_URL}?query=${search}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });

    const data = await response.json();
    console.log(data);

    const mappedMovies = movieToMovieDTO(data.results);

    return mappedMovies;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    console.error(err);
    console.error("Hubo un error al intentar obtener las películas");
    return [];
  }
};
