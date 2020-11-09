/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { Filters } from "../../types/filterTypes";
import { Restaurant } from "../../types/restaurantType";
import filters from "../../utils/filters";
import {
  StyledAside,
  StyledAsideCheckbox,
  StyledAsideGlyph,
  StyledAsideLabel,
  StyledAsideRatingsBox,
  StyledAsideText,
} from "./StyledAside";

interface AProps {
  cost: (args: Filters) => Restaurant[] | 10000;
  rating: (args: Filters) => Restaurant[] | 5;
  cousine?: (e: number) => Restaurant[] | null;
}

const Aside: React.FC<AProps> = (props) => {
  const [rating, setRating] = useState<number | null>();
  const [cousine, setCousine] = useState<string | null>("");
  const [price, setPrice] = useState<number | null>(20);

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    payload: number,
  ) => {
    console.log("O que foi clicadooo:", e.target.name);
    console.log("O que temos no payload:", payload);

    if (e.target.name === "price") {
      setPrice(payload);
      props?.cost({ filterType: "cost", payload });
    }
    if (e.target.name === "rating") {
      setRating(payload);
      props?.rating({ filterType: "rating", payload });
    }
    /* if (e.target.name === "cousine") {
      setRating(payload);
      props.cousine(cost.price);
    }
    */
    console.log("Price:", price);
    console.log("Rating:", rating);
  };
  return (
    <StyledAside>
      <StyledAsideText>Nota:</StyledAsideText>
      {filters.evaluation.map((ev, i) => (
        <StyledAsideRatingsBox key={i}>
          <StyledAsideLabel htmlFor={`rating ${ev.rating}`} key={i}>
            {ev.rating}
          </StyledAsideLabel>
          <StyledAsideCheckbox
            id={`rating ${ev.rating}`}
            name="rating"
            type="checkbox"
            value={ev.rating}
            checked={rating === ev.rating}
            onChange={(e) => handleCheckbox(e, ev.rating)}
          />
        </StyledAsideRatingsBox>
      ))}
      <StyledAsideText>Custo para 2 pessoas:</StyledAsideText>
      {filters.cost.map((cost, i) => (
        <StyledAsideRatingsBox key={i}>
          <StyledAsideLabel htmlFor={`rating ${cost.price}`} key={i}>
            {cost.price}
          </StyledAsideLabel>
          <StyledAsideCheckbox
            id={`price ${cost.price}`}
            name="price"
            type="checkbox"
            value={cost.price}
            checked={price === cost.price}
            onChange={(e) => handleCheckbox(e, cost.price)}
          />
        </StyledAsideRatingsBox>
      ))}
      <StyledAsideText>Tipo de cozinha</StyledAsideText>
    </StyledAside>
  );
};

export default Aside;
