import styled from "styled-components";

const StyledRestaurantBox = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-flow: column;
  background: #ccc;
  border: 1px solid #333;
  box-shadow: 4px 4px 15px #ccc;
  margin: 15px;
`;
const StyledRestaurantBottomBox = styled.div`
  display: flex;
`;
const StyledRestaurantImage = styled.img`
  width: 100%;
  height: 300px;
`;
const StyledRestaurantBoxTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
`;

export {
  StyledRestaurantBox,
  StyledRestaurantBottomBox,
  StyledRestaurantBoxTitle,
  StyledRestaurantImage,
};
