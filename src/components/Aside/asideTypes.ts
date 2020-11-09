import { Filters } from "../../types/filterTypes";
import { Restaurant } from "../../types/restaurantType";

export interface AProps {
  cost: (args: Filters) => Restaurant[] | 10000;
  rating: (args: Filters) => Restaurant[] | 5;
  cousine?: (e: number) => Restaurant[] | null;
}
