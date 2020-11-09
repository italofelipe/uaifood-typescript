import React, { useState, FunctionComponent, useEffect } from "react";
import SuggestionBox from "../SuggestionBox/SuggestionBox";
import TextInput from "../TextInput/TextInput";
import { Suggestion } from "../types/SuggestionsTypes";
import http from "../../services/http";
import {
  StyledCTAButton,
  StyledForm,
  StyledInputContainer,
} from "../../styles/globalStyles";

const SearchForm: React.FC<any> = () => {
  const [suggestions, setSuggestions] = useState<Suggestion | null>(null);

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(async () => {
      try {
        const normallized = e.target.value.trim().toLowerCase();
        const response = await http.get(`cities?q=${normallized}`);
        console.log("Response:", response);
        setSuggestions(response.data.location_suggestions[0]);
      } catch (error) {
        console.error("DEU PAU", error);
        setSuggestions(null);
      }
    }, 800);
  };
  useEffect(() => {
    console.log("Sugestoes:", suggestions);
  }, [suggestions]);
  return (
    <StyledForm>
      <StyledInputContainer>
        <TextInput
          placeholder="Digite uma cidade"
          change={(e) => handleInput(e)}
        />
        {suggestions && <SuggestionBox suggestions={suggestions} />}
      </StyledInputContainer>

      <StyledCTAButton>Buscar</StyledCTAButton>
    </StyledForm>
  );
};

export default SearchForm;
