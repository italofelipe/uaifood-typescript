import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row;
  box-shadow: 3px 3px 5px #ccc;
  width: 100%;
`;
const StyledLogoBox = styled.div`
  align-self: flex-start;
  width: 30%;
  height: auto;
  padding: 0px 15px;
  margin: 10px 0px;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;
export { StyledHeader, StyledLogoBox, Logo };
