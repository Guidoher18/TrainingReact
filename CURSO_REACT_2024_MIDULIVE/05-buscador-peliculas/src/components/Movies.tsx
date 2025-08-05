import type { movieDTO } from "../dto/movieDTO";
import { Article } from "./Article";
import "./styles/Movies.css";

export const Movies = ({ movies }: { movies: movieDTO[] }) => {
  const hasMovies = movies.length > 0;

  return hasMovies ? (
    movies.map((m) => {
      return <Article key={m.id} movie={m as movieDTO} />;
    })
  ) : (
    <h3>No hay resultados para mostrar</h3>
  );
};
