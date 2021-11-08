import { createSelector } from "reselect";

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
            typeGuitarsArr.includes(item.type.name) &&
            countStringArr.includes(item.countString.toString())
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
          return typeGuitarsArr.includes(item.type.name);
        });
      }

      if (
        !firstPrice &&
        !lastPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length !== 0
      ) {
        return innerGuitars.filter((item) => {
          return countStringArr.includes(item.countString.toString());
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
            parseInt(item.price) >= parseInt(firstPrice) &&
            parseInt(item.price) <= parseInt(lastPrice) &&
            typeGuitarsArr.includes(item.type.name) &&
            countStringArr.includes(item.countString.toString())
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
            parseInt(item.price) >= parseInt(firstPrice) &&
            parseInt(item.price) <= parseInt(lastPrice) &&
            typeGuitarsArr.includes(item.type.name)
          );
        });
      } else if (
        firstPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length === 0
      ) {
        return innerGuitars.filter((item) => {
          return (
            parseInt(item.price) >= parseInt(firstPrice) &&
            typeGuitarsArr.includes(item.type.name)
          );
        });
      } else if (
        firstPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length !== 0
      ) {
        return innerGuitars.filter((item) => {
          return (
            parseInt(item.price) >= parseInt(firstPrice) &&
            typeGuitarsArr.includes(item.type.name) &&
            countStringArr.includes(item.countString.toString())
          );
        });
      } else if (
        lastPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length === 0
      ) {
        return innerGuitars.filter((item) => {
          return (
            parseInt(item.price) <= parseInt(lastPrice) &&
            typeGuitarsArr.includes(item.type.name)
          );
        });
      } else if (
        lastPrice &&
        typeGuitarsArr.length !== 0 &&
        countStringArr.length !== 0
      ) {
        return innerGuitars.filter((item) => {
          return (
            parseInt(item.price) <= parseInt(lastPrice) &&
            typeGuitarsArr.includes(item.type.name) &&
            countStringArr.includes(item.countString.toString())
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
            parseInt(item.price) >= parseInt(firstPrice) &&
            parseInt(item.price) <= parseInt(lastPrice) &&
            countStringArr.includes(item.countString.toString())
          );
        });
      } else if (
        firstPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length !== 0
      ) {
        return innerGuitars.filter((item) => {
          return (
            parseInt(item.price) >= parseInt(firstPrice) &&
            countStringArr.includes(item.countString.toString())
          );
        });
      } else if (
        lastPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length !== 0
      ) {
        return innerGuitars.filter((item) => {
          return (
            parseInt(item.price) <= parseInt(lastPrice) &&
            countStringArr.includes(item.countString.toString())
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
            parseInt(item.price) >= parseInt(firstPrice) &&
            parseInt(item.price) <= parseInt(lastPrice)
          );
        });
      } else if (
        firstPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length === 0
      ) {
        return innerGuitars.filter((item) => {
          return parseInt(item.price) >= parseInt(firstPrice);
        });
      } else if (
        lastPrice &&
        typeGuitarsArr.length === 0 &&
        countStringArr.length === 0
      ) {
        return innerGuitars.filter((item) => {
          return parseInt(item.price) <= parseInt(lastPrice);
        });
      }
    }
  );
