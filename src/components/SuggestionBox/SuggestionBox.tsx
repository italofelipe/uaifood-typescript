import React, { useEffect } from "react";
import {
  StyledSuggestionBox,
  StyledSuggestionText,
  StyledSuggestionSubtext,
  StyledLink,
} from "./StyledSuggestionBox";
import { ISuggestion } from "./suggestionTypes";

const SuggestionBox: React.FC<any> = ({ suggestions }: ISuggestion) => {
  useEffect(() => {
    console.log("Suggestion: ", suggestions);
    console.log("Suggestion: NAME", suggestions);
  });
  return (
    <StyledSuggestionBox>
      <StyledLink
        to={{
          pathname: "/restaurants",
          state: suggestions,
        }}
      >
        <StyledSuggestionText>{suggestions.name}</StyledSuggestionText>
        <StyledSuggestionSubtext>
          {suggestions.country_name}
        </StyledSuggestionSubtext>
      </StyledLink>
    </StyledSuggestionBox>
  );
};

export default SuggestionBox;
