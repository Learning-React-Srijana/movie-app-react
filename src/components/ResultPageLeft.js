import { React } from "react";
import "../css/result-page.css";

const ResultRow = ({ keyword, value }) => {
  return (
    <div className="result-row" style={{ display: "flex" }}>
      <p className="keyword">{keyword}</p>
      <p className="value">{value}</p>
    </div>
  );
};
export const ResultPageLeft = () => {
  return (
    <div className="result-row">
      <div className="header">Search Results</div>
      <div className="results">
        <ResultRow keyword="Movies" value="500" />
        <ResultRow keyword="TV Shows" value="500" />
        <ResultRow keyword="People" value="500" />
        <ResultRow keyword="Keywords" value="5000" />
        <ResultRow keyword="Companies" value="500" />
        <ResultRow keyword="Collections" value="500" />
        <ResultRow keyword="Networks" value="500" />
      </div>
    </div>
  );
};
