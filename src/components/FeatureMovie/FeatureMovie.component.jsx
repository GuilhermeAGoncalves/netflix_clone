import React from "react";
import "./FeatureMovie.style.scss";

function FeatureMovie({ data }) {
  console.log(data);

  const {
    original_name,
    vote_average,
    number_of_seasons,
    overview,
    first_air_date,
    genres,
    id,
  } = data;

  let date = new Date(first_air_date);

  let genresSimple = [];
  for (let i in genres) {
    genresSimple.push(genres[i].name);
  }
  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
    >
      <div className="vertical">
        <div className="horizontal">
          <div className="name">{original_name}</div>

          <div className="info">
            <div className="points">{vote_average} Pontos</div>
            <div className="year">{date.getFullYear()}</div>
            <div className="seassons">
              {number_of_seasons} Temporada{number_of_seasons !== 1 && "s"}
            </div>
          </div>

          <div className="description">{overview}</div>

          <div className="buttons">
            <a href={`watch/${id}`} className="watch">
              {" "}
              ▶ Assistir
            </a>
            <a href={`list/add/${id}`} className="list">
              {" "}
              + Minha Lista
            </a>
          </div>
          <div className="genres">
            <span>Gêneros:</span> {genresSimple.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureMovie;
