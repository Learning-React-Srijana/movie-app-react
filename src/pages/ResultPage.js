import Navbar from "../components/Navbar";
import { ResultPageLeft } from "../components/ResultPageLeft";
import { SearchedItem } from "../components/SearchedItem";

export const ResultPage = () => {
  return (
    <div className="result-page-container" style={{ width: "100%" }}>
      <Navbar />
      <div className="search-input">
        <input
          type="search"
          placeholder="search item"
          style={{
            border: "2px solid #eaeaea",
            marginTop: "65px",
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",

          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <div className="result-page-left" style={{ width: "40%" }}>
          <ResultPageLeft />
        </div>
        <div className="result-page-right">
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
        </div>
      </div>
    </div>
  );
};
