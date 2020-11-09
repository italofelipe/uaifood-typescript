import React, { useState, FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import SuggestionBox from "../components/SuggestionBox/SuggestionBox";
import TextInput from "../components/TextInput/TextInput";
import { Suggestion } from "../components/types/SuggestionsTypes";
import http from "../services/http";
import {
  Container,
  StyledH1,
  StyledCTAButton,
  StyledForm,
  StyledInputContainer,
} from "../styles/globalStyles";

const Home: React.FC<any> = () => {
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
    <Container align="center" background="food">
      <SearchForm />
    </Container>
  );
};

export default Home;
