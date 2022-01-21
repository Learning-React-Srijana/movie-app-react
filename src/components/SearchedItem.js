import { React } from "react";
import Duke from "../images/duke.jpg";
import "../css/result-page.css";
export const SearchedItem = () => {
  return (
    <div className="searched-item-container">
      <div className="searched-item-image">
        <img src={Duke} alt="duke" />
      </div>
      <div className="right">
        <h3>The Dule of Mount Deer</h3>
        <p>July 25,2000</p>
        <h5>
          The Duke of Mount Deer 2000 is a television series adapted from Louis
          Cha's novel The Deer and the Cauldron. It was first broadcast in 2000
          in Hong Kong and followed by subsequent broadcasts in other Asian
          countries.
        </h5>
      </div>
    </div>
  );
};
