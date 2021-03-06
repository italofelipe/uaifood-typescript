import styled from "styled-components";

import bgIMG from "../assets/bg.jpg";

interface CProps {
  background: string;
  align: string;
  row?: boolean;
}
const Container = styled.main`
  display: flex;
  flex-flow: ${(props: CProps) => (props.row ? "row" : "column")};
  width: 100vw;
  height: 100vh;
  background-image: ${(props: CProps) =>
    props.background === "food" ? `url(${bgIMG}) ` : "#DDD"};
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: ${(props: CProps) =>
    props.align === "center" ? "center" : "unset"};
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
  color: ${(props) => props.color || "#FFF"};
`;
const StyledH3 = styled.h3`
  font-size: 22px;
  color: #484848;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => props.color || "#FFF"};
`;
const StyledForm = styled.form`
  width: 60%;
  display: flex;
  flex-flow: row;
  align-self: center;
  justify-self: center;
  align-items: center;
`;
const StyledInputContainer = styled.div`
  flex-flow: column;
  width: 100%;
`;

const StyledCTAButton = styled.button`
  width: 120px;
  height: 45px;
  background: #39b54a;
  font-weight: bold;
  color: #fff;
  border: none;
`;
export {
  Container,
  StyledP,
  StyledH1,
  StyledH3,
  StyledInputContainer,
  subText,
  StyledForm,
  StyledCTAButton,
};
