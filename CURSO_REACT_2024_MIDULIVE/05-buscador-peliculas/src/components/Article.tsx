// img src=> https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

import { useState } from "react";
import type { movieDTO } from "../dto/movieDTO";
import { IMAGE_BASE_URL } from "../utils/constants";
import STOCK_IMG from "../assets/2147698960.jpg";
import "./styles/Article.css";

export const Article = ({ movie }: { movie: movieDTO }) => {
  const url = `${IMAGE_BASE_URL}/${movie.poster_path}`;
  const [src, setSrc] = useState(url);
  const [withDefaultImg, setWithDefaultImg] = useState(false);

  return (
    <article className="article col-md-2">
      <img
        className={!withDefaultImg ? "article__img" : "article__img default"}
        src={src}
        alt={movie.title}
        loading="lazy"
        onError={() => {
          setSrc(STOCK_IMG);
          setWithDefaultImg(true);
          return null;
        }}
      />
      <h3 className="article__title mt-2">
        <i>{movie.title}</i>
      </h3>
      <p className="article__overview">{movie.overview}</p>
    </article>
  );
};
