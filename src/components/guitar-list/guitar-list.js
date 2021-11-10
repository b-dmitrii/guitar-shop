import React, {useState} from "react";
import {useDispatch} from "react-redux";

import GuitarListItem from "../guitar-list-item/guitar-list-item";
import SortArea from "../sort-area/sort-area";
import {Operation} from "../../store/cards/cards";
import AlternateModal from "../alternate-modal/alernate-modal";
import PropTypes from "prop-types";

const GuitarList = ({innerGuitars, currentInnerGuitars}) => {
  const [selectedValue, setSelectedValue] = useState(``);

  const dispatch = useDispatch();

  const sortByPrice = () => {
    setSelectedValue(`price`);
    dispatch(
        Operation.sortGuitarsByPrice(
            innerGuitars.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10))
        )
    );
  };

  const sortByPriceRev = () => {
    dispatch(
        Operation.sortGuitarsByPrice(
            innerGuitars.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10))
        )
    );
  };

  const sortByPopularity = () => {
    setSelectedValue(`popularity`);
    dispatch(
        Operation.sortGuitarsByPopularity(
            innerGuitars.sort((a, b) => a.popularity - b.popularity)
        )
    );
  };

  const sortByPopularityRev = () => {
    dispatch(
        Operation.sortGuitarsByPopularity(
            innerGuitars.sort((a, b) => b.popularity - a.popularity)
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
        {currentInnerGuitars.map((guitar) => {
          return (
            <li key={guitar.id}>
              <GuitarListItem guitar={guitar} itemId={guitar.id} />
            </li>
          );
        })}
      </ul>
      <AlternateModal />
    </div>
  );
};

GuitarList.propTypes = {
  innerGuitars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    raiting: PropTypes.number,
    type: PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      image: PropTypes.string,
    }),
    popularity: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    countString: PropTypes.number,
    setNumber: PropTypes.string,
  })),
  currentInnerGuitars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    raiting: PropTypes.number,
    type: PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      image: PropTypes.string,
    }),
    popularity: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    countString: PropTypes.number,
    setNumber: PropTypes.string,
  })),
  currentPage: PropTypes.number,
};

export default GuitarList;
