/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  StyledSuggestionBox,
  StyledSuggestionText,
  StyledSuggestionSubtext,
} from "./StyledSuggestionBox";
import { ISuggestion } from "./suggestionTypes";

const SuggestionBox: React.FC<any> = (props: ISuggestion) => {
  useEffect(() => {
    console.log("Suggestion: ", props);
    console.log("Suggestion: NAME", props.suggestions);
  });
  return (
    <StyledSuggestionBox>
      <Link
        to={{
          pathname: "/restaurants",
          state: props,
        }}
      >
        <StyledSuggestionText>{props.suggestions.name}</StyledSuggestionText>
        <StyledSuggestionSubtext>
          {props.suggestions.id}
        </StyledSuggestionSubtext>
      </Link>
    </StyledSuggestionBox>
  );
};

export default SuggestionBox;
