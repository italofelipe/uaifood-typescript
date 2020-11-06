import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
`;
const StyledP = styled.p`
  font-size: 14px;
  color: #484848;
  font-family: "Open Sans", sans-serif;
`;
const subText = styled.p`
  font-size: 12px;
  color: #484848;
  font-family: "Open Sans", sans-serif;
`;

const StyledH1 = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #484848;
  font-family: "Open Sans", sans-serif;
`;

export { Container, StyledP, StyledH1, subText };
