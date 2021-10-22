import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NameSpace } from "../../const";

import GuitarListItem from "../guitar-list-item/guitar-list-item";
import Spinner from "../spinner/spinner";
import SortArea from "../sort-area/sort-area";
import { Operation } from "../../store/cards/cards";

const GuitarList = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const guitars = useSelector((state) => state[NameSpace.GUITARS].guitars);
  const copyGuitars = guitars.map((a) => a);
  const loading = useSelector((state) => state[NameSpace.GUITARS].loading);
  const dispatch = useDispatch();
  if (loading) {
    return <Spinner />;
  }

  const sortByPrice = () => {
    setSelectedValue("price");
    dispatch(
      Operation.sortGuitarsByPrice(
        copyGuitars.sort((a, b) => parseInt(a.price) - parseInt(b.price))
      )
    );
  };

  const sortByPriceRev = () => {
    dispatch(
      Operation.sortGuitarsByPrice(
        copyGuitars.sort((a, b) => parseInt(b.price) - parseInt(a.price))
      )
    );
  };

  const sortByPopularity = () => {
    setSelectedValue("popularity");
    dispatch(
      Operation.sortGuitarsByPopularity(
        copyGuitars.sort((a, b) => a.popularity - b.popularity)
      )
    );
  };

  const sortByPopularityRev = () => {
    dispatch(
      Operation.sortGuitarsByPopularity(
        copyGuitars.sort((a, b) => b.popularity - a.popularity)
      )
    );
  };

  return (
    <div>
      <SortArea
        sortByPrice={sortByPrice}
        sortByPopularity={sortByPopularity}
        sortByPriceRev={sortByPriceRev}
        sortByPopularityRev={sortByPopularityRev}
        selectedValue={selectedValue}
      />
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
