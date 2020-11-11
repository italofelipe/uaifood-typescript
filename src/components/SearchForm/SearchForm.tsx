import React, { useState, useEffect } from "react";
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
        setSuggestions(response.data.location_suggestions[0]);
      } catch (error) {
        console.error("Erro ao processar request.", error);
        setSuggestions(null);
      }
    }, 800);
  };
  useEffect(() => {}, [suggestions]);
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
