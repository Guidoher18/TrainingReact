import type { movie } from "../models/movie";

export interface movieDTO {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export const movieToMovieDTO = (results: movie[]): movieDTO[] => {
  return results.map((m) => {
    return {
      id: m.id,
      title: m.title,
      overview: m.overview,
      poster_path: m.poster_path,
    };
  });
};
