import React, { useState } from "react";
import http from "../../services/http";
import { Restaurant } from "../../types/restaurantType";

import {
  StyledRestaurantBottomBox,
  StyledRestaurantBox,
  StyledRestaurantBoxSubtitle,
  StyledRestaurantBoxTitle,
  StyledRestaurantImage,
  StyledRestaurantLowerTiles,
  StyledRestaurantLowerTile,
} from "./StyledRestaurantBox";

const RestaurantBox: React.FC<Restaurant> = (props) => {
  const [img, setImg] = useState<string>("");
  const {
    currency,
    location,
    phoneNumbers,
    cuisines,
    name,
    image,
    id,
    average_cost_for_two,
  } = props;
  const fetchRestaurantDetail = async () => {
    const restaurantDetails = await http.get(`restaurant?res_id=${id}`);

    const response = restaurantDetails?.data;
    const imageURL = response.data?.featured_image;
    setImg(
      imageURL ||
        "https://olharconceito.com.br/imgsite/noticias/comida-congelada-como-fazer-00.jpg",
    );
  };
  fetchRestaurantDetail();
  return (
    <StyledRestaurantBox>
      <StyledRestaurantImage src={img} />
      <StyledRestaurantBottomBox>
        <StyledRestaurantBoxTitle>{name}</StyledRestaurantBoxTitle>
        <StyledRestaurantBoxSubtitle>
          {location.address}
        </StyledRestaurantBoxSubtitle>
        <StyledRestaurantLowerTiles>
          <StyledRestaurantLowerTile price>
            {currency}
            {average_cost_for_two}
          </StyledRestaurantLowerTile>
          <StyledRestaurantLowerTile>{cuisines}</StyledRestaurantLowerTile>
        </StyledRestaurantLowerTiles>
      </StyledRestaurantBottomBox>
    </StyledRestaurantBox>
  );
};

export default RestaurantBox;
