import { useState, useEffect } from "react";

import {
  PAGES_TO_DISPLAY,
  PAGE_COUNT,
  PAGINAION_START,
} from "constants/constants";


export default function Pagination({ pageChangeHandler }) {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState();

  const pagesToDisplay = PAGES_TO_DISPLAY,
    pageCount = PAGE_COUNT,
    pageStart = PAGINAION_START;

  const buildPages = (pageIndex) => {
    setPage(pageIndex);

    let newPages = [],
      start = pageStart,
      end = pagesToDisplay;

    if (pageIndex > (pagesToDisplay - 1) / 2) {
      start = pageIndex - (pagesToDisplay - 1) / 2;
      end = start + pagesToDisplay;
    }

    if (pageIndex > pageCount - (pagesToDisplay + 1) / 2) {
      start = pageCount - pagesToDisplay;
      end = pageCount;
    }

    for (let i = start; i < end; i++) {
      newPages.push(i);
    }

    setPages(newPages);
  };

  useEffect(() => {
    buildPages(0);
  }, []);

  const onClickHandler = (pageNumber) => {
    pageChangeHandler(pageNumber + 1);
  };

  return (
    <div className="m-2">
      <div className="pagination d-flex justify-content-center">
        <button
          className={`page-item page-link m-1 ${
            page === 0 ? "btn btn-secondary" : "btn btn-light"
          }`}
          disabled={page === 0}
          onClick={() => {
            buildPages(page - 1);
            onClickHandler(page - 1);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber, index) => (
          <button
            className={`page-item page-link m-1 ${
              pageNumber === page ? "active" : "btn btn-light"
            }`}
            onClick={() => {
              onClickHandler(pageNumber);
            }}
            key={index}
          >
            {pageNumber + 1}
          </button>
        ))}

        <button
          className={`page-item page-link m-1 ${
            page === pageCount - 1 ? "btn btn-secondary" : "btn btn-light"
          }`}
          disabled={page === pageCount - 1}
          onClick={() => {
            buildPages(page + 1);
            onClickHandler(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
