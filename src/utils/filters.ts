/* eslint-disable no-shadow */
const filters: Filters = {
  evaluation: [
    { rating: 1, query: "" },
    { rating: 2, query: "" },
    { rating: 3, query: "" },
    { rating: 4, query: "" },
    { rating: 5, query: "" },
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
  query: string;
};
type Cousine = {
  type: string;
  cousineId: number;
};
type Cost = {
  price: number;
};
enum CousinesTypesEnum {
  "Chinese",
  "Brazilian",
}
export default filters;
