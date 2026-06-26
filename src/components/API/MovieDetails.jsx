import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovieDetails = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=655e581b&i=${imdbID}&plot=full`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <img
          src={movie.Poster}
          alt={movie.Title}
          style={{ width: "300px" }}
        />

        <h1>{movie.Title}</h1>
        <h4>{movie.Year}</h4>
        <h5>{movie.imdbID}</h5>

        <p><b>Year:</b> {movie.Year}</p>
  <p><b>Rated:</b> {movie.Rated}</p>
  <p><b>Released:</b> {movie.Released}</p>
  <p><b>Runtime:</b> {movie.Runtime}</p>
  <p><b>Genre:</b> {movie.Genre}</p>
  <p><b>Director:</b> {movie.Director}</p>
  <p><b>Writer:</b> {movie.Writer}</p>
  <p><b>Actors:</b> {movie.Actors}</p>
  <p><b>Language:</b> {movie.Language}</p>
  <p><b>Country:</b> {movie.Country}</p>
  <p><b>Awards:</b> {movie.Awards}</p>
  <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
  <p><b>IMDB Votes:</b> {movie.imdbVotes}</p>
  <p><b>Metascore:</b> {movie.Metascore}</p>
  <p><b>Box Office:</b> {movie.BoxOffice}</p>
  <p><b>Production:</b> {movie.Production}</p>
  <p><b>Plot:</b> {movie.Plot}</p>
      </div>
    </div>
  );
};