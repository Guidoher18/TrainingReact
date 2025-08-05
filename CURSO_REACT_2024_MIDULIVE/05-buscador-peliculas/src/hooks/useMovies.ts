import { useEffect, useState } from "react";
import type { movieDTO } from "../dto/movieDTO";
import { getMovies } from "../services/movieService";

export const useMovies = () => {
  const [movies, setMovies] = useState<movieDTO[]>([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState(false);

  // From Mock
  // useEffect(() => {
  //    setMovies(movieToMovieDTO((responseMovies as movieResponse).results));
  // }, []);

  const orderMovies = (
    order: boolean,
    movies: movieDTO[] | null
  ): movieDTO[] | null => {
    if (movies?.length === 0 || !order) return movies;

    const moviesCopy = [...(movies as movieDTO[])];
    moviesCopy.sort((a, b) => a.title.localeCompare(b.title));

    return moviesCopy;
  };

  useEffect(() => {
    (async () => {
      const movies = await getMovies(search);
      setMovies(orderMovies(order, movies) || []);
    })();
  }, [search, order]);

  return { movies, setSearch, setOrder };
};
