import { React } from "react";
import "../css/section-header.css";
const SectionHeader = ({
  SectionTitle,
  leftSelectorText,
  rightSelectorText,
}) => {
  return (
    <div className="section-header">
      <div className="header">
        <h2>{SectionTitle}</h2>
      </div>
      <div className="category-selector">
        <div className="left-selector ">
          <a href="/">
            <h3>{leftSelectorText}</h3>
          </a>
        </div>
        <div className="right-selector">
          <a href="/">
            <h3>{rightSelectorText}</h3>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SectionHeader;
