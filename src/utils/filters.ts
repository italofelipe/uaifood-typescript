/* eslint-disable no-shadow */
const filters: Filters = {
  evaluation: [
    { rating: 1 },
    { rating: 2 },
    { rating: 3 },
    { rating: 4 },
    { rating: 5 },
  ],
  cousine: [
    { type: "Chinese", cousineId: 25 },
    { type: "Brazilian", cousineId: 159 },
  ],
  cost: [{ price: 50 }, { price: 130 }, { price: 200 }],
};

interface Filters {
  evaluation: Evaluation[];
  cousine: Cousine[];
  cost: Cost[];
}

type Evaluation = {
  rating: number;
};
type Cousine = {
  type: string;
  cousineId: number;
};
type Cost = {
  price: number;
};

export default filters;
