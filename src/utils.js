export const formatNumberToString = (price) => {
  if (price < 10000) {
    return [price.toString().slice(0, 1), price.toString().slice(1)].join(` `);
  }

  if (price > 10000 && price < 100000) {
    return [price.toString().slice(0, 2), price.toString().slice(2)].join(` `);
  }

  if (price > 100000 && price < 1000000) {
    return [price.toString().slice(0, 3), price.toString().slice(3)].join(` `);
  }
  return price;
};
