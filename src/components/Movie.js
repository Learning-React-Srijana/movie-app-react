import euphoria from "../images/euphoria.jpg";
import { React } from "react";
import "../css/movie.css";
const Movie = () => {
  return (
    <div className="popular-movie">
      <img src={euphoria} alt="euphoria movie " />
      <div className="percentage-wrapper">
        <div className="percentage">
          <h5>
            84<sup>%</sup>
          </h5>
        </div>
      </div>
      <div className="movie-detail">
        <h3>Euphoria</h3>
        <p>Jun 16,2019</p>
      </div>
    </div>
  );
};
export default Movie;
