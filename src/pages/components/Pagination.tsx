import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Pagination.module.css";

const Pagination = ({
  numberPages,
  activePage,
}: {
  numberPages: number;
  activePage: number[];
}) => {
  const active = activePage[0];
  const [paginationArr, setPaginationArr]: any[] = useState([]);

  useEffect(() => {
    if (numberPages === 0) {
      return;
    }

    if (numberPages < 8) {
      const arr = [];
      for (let i = 1; i <= numberPages; i++) {
        arr.push(i);
      }
      setPaginationArr(arr);
      return;
    }

    if (active < 6) {
      const arr = [1, 2, 3, 4, 5, "...", numberPages];
      setPaginationArr(arr);
      return;
    }

    if (numberPages - active < 5) {
      const arr = [
        1,
        "...",
        numberPages - 4,
        numberPages - 3,
        numberPages - 2,
        numberPages - 1,
        numberPages,
      ];
      setPaginationArr(arr);
      return;
    }

    if (numberPages - active > 4) {
      const arr = [1, "<<", active - 1, active, active + 1, ">>", numberPages];
      setPaginationArr(arr);
      return;
    }
  }, [numberPages, active]);

  const navigate = useNavigate();

  function handlerClick(e: any) {
    if (!isNaN(+e.target.innerText)) {
      activePage[0] = +e.target.innerText;
    } else if (active < 6) {
      activePage[0] = 6;
    } else if (numberPages - active < 5) {
      activePage[0] = numberPages - 5;
    } else if (e.target.innerText === "<<") {
      activePage[0] = active - 2;
    } else if (e.target.innerText === ">>") {
      activePage[0] = active + 2;
    }
    navigate(`/${activePage[0]}`);
  }

  return (
    <div className={styles.paginationWrapper}>
      <Link
        to={active > 1 ? `/${active - 1}` : "/1"}
        className={`prev ${styles.paginationItem}`}
        onClick={() => {
          if (active > 1) {
            activePage[0] = active - 1;
          }
        }}
      >
        Prev
      </Link>

      {paginationArr.map((item: number, index: number) => {
        const activeClass = active === item ? "active" : "";
        return (
          <button
            key={index}
            className={styles.paginationItem + " " + styles[activeClass]}
            onClick={handlerClick}
          >
            {item}
          </button>
        );
      })}

      <Link
        to={active < numberPages ? `/${activePage[0] + 1}` : `/${numberPages}`}
        className={`next ${styles.paginationItem}`}
        onClick={() => {
          if (active < numberPages) {
            activePage[0] = active + 1;
          }
        }}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
