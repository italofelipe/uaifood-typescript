import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSuggestionBox = styled.div`
  width: auto;
  height: auto;
  padding: 15px;
  background: #fff;
  border: 1px solid #333;
  &:hover {
    background: #999;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const StyledSuggestionText = styled.option`
  font-size: 24pt;
  color: #484848;
`;
const StyledSuggestionSubtext = styled.span`
  font-size: 14pt;
  color: #767676;
`;

export {
  StyledLink,
  StyledSuggestionBox,
  StyledSuggestionText,
  StyledSuggestionSubtext,
};
