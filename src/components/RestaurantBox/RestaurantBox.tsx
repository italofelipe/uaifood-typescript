/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, ReactNode, useState } from "react";
import http from "../../services/http";
import { Restaurant } from "../../types/restaurantType";

import {
  StyledRestaurantBottomBox,
  StyledRestaurantBox,
  StyledRestaurantBoxTitle,
  StyledRestaurantImage,
} from "./StyledRestaurantBox";

const RestaurantBox: React.FC<Restaurant> = (props) => {
  // Buscar o location vindo do React-Router-DOM
  const [img, setImg] = useState<string>("");
  const { currency, location, phoneNumbers, cuisines, name, image, id } = props;
  const fetchRestaurantDetail = async () => {
    const restaurantDetails = await http.get(`restaurant?res_id=${id}`);

    const response = restaurantDetails?.data;
    const imageURL = response.data?.featured_image;
    setImg(imageURL || "");
  };

  fetchRestaurantDetail();
  useEffect(() => {}, []);
  return (
    <StyledRestaurantBox>
      <StyledRestaurantImage src={img} />
      <StyledRestaurantBottomBox>
        <StyledRestaurantBoxTitle>{name}</StyledRestaurantBoxTitle>
      </StyledRestaurantBottomBox>
    </StyledRestaurantBox>
  );
};

export default RestaurantBox;
