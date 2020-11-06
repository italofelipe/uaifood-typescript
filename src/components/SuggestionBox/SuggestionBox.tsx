/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
import React, { FunctionComponent } from "react";
import { StyledSuggestionBox } from "./StyledSuggestionBox";

const SuggestionBox: FunctionComponent = (props) => {
  return <StyledSuggestionBox>{props.children}</StyledSuggestionBox>;
};

export default SuggestionBox;
