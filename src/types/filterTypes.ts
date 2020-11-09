/* eslint-disable no-shadow */
export enum FiltersEnum {
  rating = "rating",
  cost = "cost",
  cousine = "cousine",
}
export interface Filters {
  filterType: "rating" | "cost" | "cousine";
  payload: string | number;
}
