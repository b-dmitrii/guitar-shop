import React from "react";
import { useSelector } from "react-redux";

import GuitarListItem from "../guitar-list-item/guitar-list-item";
import Spinner from "../spinner/spinner";
import SortArea from "../sort-area/sort-area";

const GuitarList = () => {
  const guitars = useSelector(state => state.guitars.guitars)
  const loading = useSelector(state => state.guitars.loading);

  if (loading) {
    return <Spinner />
  }
  return (
    <div>
    <SortArea />
    <ul className="guitar-list">
      {guitars.map((guitar) => {
        return (
          <li key={guitar.id}>
            <GuitarListItem guitar={guitar} />
          </li>
        );
      })}
    </ul>
    </div>
  );
};

export default GuitarList;
