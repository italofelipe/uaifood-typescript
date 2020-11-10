import styled from "styled-components";
import { StyledRestaurantLowerTileTypes } from "./restaurantTypes";

const StyledRestaurantBox = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-flow: column;
  border: 1px solid #333;
  box-shadow: 4px 4px 15px #ccc;
  margin: 15px;
`;
const StyledRestaurantBottomBox = styled.div`
  display: flex;
  flex-flow: column;
  margin: 5px;
`;
const StyledRestaurantImage = styled.img`
  width: 100%;
  height: 140px;
`;
const StyledRestaurantBoxTitle = styled.h3`
  font-weight: 700;
  font-size: 20pt;
  margin: 0;
`;
const StyledRestaurantBoxSubtitle = styled.h5`
  font-weight: 300;
  font-size: 18pt;
  color: #a5a5a5;
  margin: 0;
`;

const StyledRestaurantLowerTiles = styled.div`
  display: flex;
  width: 100%;
`;
const StyledRestaurantLowerTile = styled.span`
  background: ${(props: StyledRestaurantLowerTileTypes) =>
    props.price ? "#39b54a" : "#CCC"};
  color: ${(props: StyledRestaurantLowerTileTypes) =>
    props.price ? "#FFF" : "#333"};
  height: ${(props: StyledRestaurantLowerTileTypes) =>
    props.price ? "20px" : "auto"};
  padding: 5px;
  margin-left: ${(props: StyledRestaurantLowerTileTypes) =>
    props.price ? "0" : "5px"}; ;
`;

export {
  StyledRestaurantBox,
  StyledRestaurantBottomBox,
  StyledRestaurantBoxSubtitle,
  StyledRestaurantLowerTile,
  StyledRestaurantLowerTiles,
  StyledRestaurantBoxTitle,
  StyledRestaurantImage,
};
