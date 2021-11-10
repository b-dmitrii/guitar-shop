import {createSelector} from "reselect";

export const filters = () =>
  createSelector(
      (state) => state.guitars,
      (state) => state.firstPrice,
      (state) => state.lastPrice,
      (state) => state.innerGuitars,
      (state) => state.typeGuitarsArr,
      (state) => state.countStringArr,

      (
          guitars,
          firstPrice,
          lastPrice,
          innerGuitars,
          typeGuitarsArr,
          countStringArr
      ) => {

        const filterByPrice = (item) => {
          return parseInt(item.price, 10) >= parseInt(firstPrice, 10) &&
          parseInt(item.price, 10) <= parseInt(lastPrice, 10);
        };

        const filterByFirstPrice = (item) => {
          return parseInt(item.price, 10) >= parseInt(firstPrice, 10);
        };

        const filterByLastPrice = (item) => {
          return parseInt(item.price, 10) <= parseInt(lastPrice, 10);
        };

        const filterByString = (item) => {
          return countStringArr.includes(item.countString.toString());
        };

        const filterByType = (item) => {
          return typeGuitarsArr.includes(item.type.name);
        };

        if (
          !firstPrice &&
        !lastPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length === 0
        ) {
          return innerGuitars;
        }

        if (
          !firstPrice &&
        !lastPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length !== 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByType(item) &&
              filterByString(item)
            );
          });
        }

        if (
          !firstPrice &&
        !lastPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length === 0
        ) {
          return innerGuitars.filter((item) => {
            return filterByType(item);
          });
        }

        if (
          !firstPrice &&
        !lastPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length !== 0
        ) {
          return innerGuitars.filter((item) => {
            return filterByString(item);
          });
        }

        if (
          firstPrice &&
        lastPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length !== 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByPrice(item) &&
              filterByType(item) &&
            filterByString(item)
            );
          });
        }

        if (
          firstPrice &&
        lastPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length === 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByPrice(item) &&
              filterByType(item)
            );
          });
        } else if (
          firstPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length === 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByFirstPrice(item) &&
              filterByType(item)
            );
          });
        } else if (
          firstPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length !== 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByFirstPrice(item) &&
              filterByType(item) &&
            filterByString(item)
            );
          });
        } else if (
          lastPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length === 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByLastPrice(item) &&
              filterByType(item)
            );
          });
        } else if (
          lastPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length !== 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByLastPrice(item) &&
              filterByType(item) &&
            filterByString(item)
            );
          });
        }

        if (
          firstPrice &&
        lastPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length !== 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByPrice(item) &&
              filterByString(item)
            );
          });
        } else if (
          firstPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length !== 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByFirstPrice(item) &&
              filterByString(item)
            );
          });
        } else if (
          lastPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length !== 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByLastPrice(item) &&
              filterByString(item)
            );
          });
        }

        if (
          firstPrice &&
        lastPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length === 0
        ) {
          return innerGuitars.filter((item) => {
            return (
              filterByPrice(item)
            );
          });
        } else if (
          firstPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length === 0
        ) {
          return innerGuitars.filter((item) => {
            return filterByFirstPrice(item);
          });
        } else if (
          lastPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length === 0
        ) {
          return innerGuitars.filter((item) => {
            return filterByLastPrice(item);
          });
        }
        return innerGuitars;
      }
  );
