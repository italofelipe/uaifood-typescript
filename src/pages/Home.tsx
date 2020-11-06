/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React, { useState, FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import SuggestionBox from "../components/SuggestionBox/SuggestionBox";
import TextInput from "../components/TextInput/TextInput";
import { Suggestion } from "../components/TextInput/types/SuggestionsTypes";
import http from "../services/http";
import { Container, StyledH1 } from "../styles/globalStyles";

const Home: FunctionComponent = () => {
  const [suggestions, setSuggestions] = useState<Suggestion | null>(null);

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(async () => {
      try {
        const normallized = e.target.value.trim().toLowerCase();
        const response = await http.get(`cities?q=${normallized}`);
        // console.log("Response", response.data.location_suggestions[0]);
        setSuggestions(response.data.location_suggestions[0]);
      } catch (error) {
        console.error("DEU PAU", error);
        setSuggestions(null);
      }
    }, 1500);
  };
  useEffect(() => {
    console.log("Sugestoes:", suggestions);
  }, [suggestions]);
  return (
    <Container>
      <StyledH1>Home Page</StyledH1>

      <TextInput
        placeholder="Digite uma cidade"
        change={(e) => handleInput(e)}
      />
      {suggestions && (
        <SuggestionBox>
          <Link
            to={{
              pathname: "/restaurants",
              state: { suggestions },
            }}
          >
            {suggestions.name}
          </Link>
        </SuggestionBox>
      )}
    </Container>
  );
};

export default Home;
