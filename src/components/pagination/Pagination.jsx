import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ activePage, pages, setActivePage }) => {
  // Methods
  const getPages = () => {
    const elements = [];
    for (let i = 1; i <= pages; i++) {
      elements.push(
        <div
          className={`${activePage === i ? "active" : ""}`}
          onClick={() => setActivePage(i)}
          key={i}
        >
          {i < 10 ? `0${i}` : i}
        </div>
      );
    }
    return elements;
  };

  return (
    <div className="pagination">
      <div
        className={`pagination-arrow ${activePage === 1 ? "inactive" : ""}`}
        onClick={() => activePage !== 1 && setActivePage((page) => page - 1)}
      >
        {"<"}
      </div>
      {getPages()}
      <div
        className={`pagination-arrow ${activePage === pages ? "inactive" : ""}`}
        onClick={() =>
          activePage !== pages && setActivePage((page) => page + 1)
        }
      >
        {">"}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  pages: PropTypes.number,
};

export default Pagination;
