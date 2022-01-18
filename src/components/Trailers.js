import { React } from "react";
import "../css/trailers.css";
const Header = () => {
  return (
    <div className="trailers-header">
      <div className="header-title">
        <h2>Latest Trailers</h2>
      </div>
      <div className="selector">
        <div className="left ">
          <a href="/">
            <h3>On TV</h3>
          </a>
        </div>
        <div className="right">
          <a href="/">
            <h3>In Theaters</h3>
          </a>
        </div>
      </div>
    </div>
  );
};
const Videos = () => {
  return (
    <div className="video-container">
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/oG5bzFU1u94"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3>Euphoria</h3>
      <h4>Episode Promo</h4>
    </div>
  );
};
const Trailers = () => {
  return (
    <div className="trailers-container">
      <img
        src="https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg"
        alt="movie-banner"
      />
      <Header />
      <div className="trailer-wrapper">
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
      </div>
    </div>
  );
};
export default Trailers;
