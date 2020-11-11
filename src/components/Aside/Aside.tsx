import React, { useState, useEffect } from "react";
import { Cousine, CousineTypes } from "../../types/cousineTypes";
import filters from "../../utils/filters";
import { AProps } from "./asideTypes";
import {
  StyledAside,
  StyledAsideCheckbox,
  StyledAsideLabel,
  StyledAsideRatingsBox,
  StyledAsideText,
} from "./StyledAside";

const Aside: React.FC<AProps> = (props) => {
  const { cousines: cousinesTypeProps } = props;
  const [rating, setRating] = useState<number | null>();
  const [price, setPrice] = useState<number | null>(20);
  const [cousinesType, setCousinesType] = useState<Cousine | null>(null);
  useEffect(() => {}, []);
  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    payload: any,
  ) => {
    e.preventDefault();
    if (e.target.name === "price") {
      setPrice(payload);
      props?.cost({ filterType: "cost", payload });
    }
    if (e.target.name === "rating") {
      setRating(payload);
      props?.rating({ filterType: "rating", payload });
    }
    if (e.target.name === "cousine") {
      setCousinesType(payload?.cuisine_id);
      props.cousine({ filterType: "cousine", payload: payload?.cuisine_id });
    }
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
            type="radio"
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
            type="radio"
            value={cost.price}
            checked={price === cost.price}
            onChange={(e) => handleCheckbox(e, cost.price)}
          />
        </StyledAsideRatingsBox>
      ))}
      <StyledAsideText>Tipo de cozinha</StyledAsideText>
      {cousinesTypeProps &&
        cousinesTypeProps.map((cou, i) => (
          <StyledAsideRatingsBox key={i}>
            <StyledAsideLabel htmlFor={`rating ${cou.cuisine_name}`} key={i}>
              {cou.cuisine_name}
            </StyledAsideLabel>
            <StyledAsideCheckbox
              id={`cousine ${cou.cuisine_id}`}
              name="cousine"
              type="radio"
              value={cou.cuisine_name}
              checked={cousinesType?.cuisine_id === cou.cuisine_id}
              onChange={(e) => handleCheckbox(e, cou)}
            />
          </StyledAsideRatingsBox>
        ))}
    </StyledAside>
  );
};

export default Aside;
