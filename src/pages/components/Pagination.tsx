import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import styles from "./Pagination.module.css";

const Pagination = ({ numberPages }: { numberPages: number }) => {

  const activePost = useRef<number>(1)
  const active = activePost.current
  const [paginationArr, setPaginationArr]: any[] = useState([]);
  const { page } = useParams()

  useEffect(() => {
    if (numberPages === 0) {
      return;
    }

    if (numberPages < 8) {
      let arr = [];
      for (let i = 1; i <= numberPages; i++) {
        arr.push(i);
      }
      setPaginationArr(arr);
      return;
    }

    if (active < 6) {
      let arr = [1, 2, 3, 4, 5, "...", numberPages];
      setPaginationArr(arr);
      return;
    }

    if (numberPages - active < 5) {
      let arr = [
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
      let arr = [
        1,
        "<<",
        active - 1,
        active,
        active + 1,
        ">>",
        numberPages,
      ];
      setPaginationArr(arr);
      return;
    }
  }, [numberPages, active]);

  const navigate = useNavigate()

  function handlerClick(e: any) {

    if (!isNaN(+e.target.innerText)) {
      activePost.current = +e.target.innerText;
    } else if (active < 6) {
      activePost.current = 6
    } else if (numberPages - active < 5) {
      activePost.current = numberPages - 5
    } else if (e.target.innerText === "<<") {
      activePost.current = active - 2
    } else if (e.target.innerText === ">>") {
      activePost.current = active + 2
    }
    navigate(`/${activePost.current}`)
  }

  return (
    <div className={styles.paginationWrapper}>
      <Link
        to={active > 1 ? `/${active - 1}` : `/1`}
        className={`prev ${styles.paginationItem}`}
        onClick={() => {
          if (active > 1) { activePost.current = active - 1 };
        }}
      >
        Prev
      </Link>

      {paginationArr.map((item: number, index: number) => {
        const activeClass = active === item ? "active" : "";
        return (
          <button
            key={index}
            className={styles.paginationItem + ' ' + styles[activeClass]}
            onClick={handlerClick}
          >
            {item}
          </button>
        );
      })}

      <Link
        to={active < numberPages ? `/${activePost.current + 1}` : `/${numberPages}`}
        className={`next ${styles.paginationItem}`}
        onClick={() => {
          if (active < numberPages) { activePost.current = active + 1 };
        }}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
