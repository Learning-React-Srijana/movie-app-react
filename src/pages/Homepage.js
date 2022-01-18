import { React } from "react";
import "../css/homepage.css";
import Navbar from "../components/Navbar";
import Trailers from "../components/Trailers";
import SectionHeader from "../components/SectionHeader";
import Movie from "../components/Movie";
function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="banner-container">
        <div className="banner">
          <div className="banner-main-text">
            <h2>2022</h2>
          </div>
          <div className="banner-subtext">
            <h2>That's a Wrap</h2>
            <h3>Let's dive into 2021's best and worst! →</h3>
          </div>
          <div className="search-input">
            <input
              type="search"
              placeholder="Search for a movie, tv show, person......"
            />
          </div>
        </div>
      </div>
      {/* Popular Movies COntainer */}
      <div className="column-wrapper">
        <div className="popular-movie-container">
          <SectionHeader
            SectionTitle="What's Popular"
            leftSelectorText="On TV"
            rightSelectorText="In Theaters"
          />
          <div className=" movie-wrapper">
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
          </div>
        </div>
      </div>
      {/* Trailers COntainer */}

      <div className="column-wrapper">
        <Trailers />
      </div>
      {/* Trending COntainer */}
      <div className="column-wrapper">
        <div className="trending-container">
          <div className="over-trending">
            <SectionHeader
              SectionTitle="Trending"
              leftSelectorText="Today"
              rightSelectorText="This Week"
            />
            <div className="movie-wrapper">
              <Movie />
              <Movie />
              <Movie />
              <Movie />
              <Movie />
              <Movie />
              <Movie />
            </div>
          </div>
        </div>
      </div>
      {/* Join Today Container */}
      <div className=" column-wrapper">
        <div className="joining-container">
          <div className="joining-left">
            <h2>JOIN TODAY</h2>
            <h4>
              Get access to maintain your own
              <i>custom personal lists, track what you've seen</i> and search
              and filter for <i>what to watch next— </i>regardless if it's in
              theatres, on TV or available on popular streaming services like .
            </h4>
            <button type="submit">
              <p>Sign Up</p>
            </button>
          </div>
          <div className="joining-right">
            <ul>
              <li>Enjoy TMDB ad free</li>
              <li> Maintain a personal watchlist</li>
              <li>
                Filter by your subscribed streaming services and find something
                to watch
              </li>
              <li> Log the movies and TV shows you've seen</li>
              <li> Build custom lists</li>
              <li> Contribute to and improve our database</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer-container">
        <p>@Copyright 2022 Srijana Paudel.</p>
      </div>
    </div>
  );
}

export default Homepage;
