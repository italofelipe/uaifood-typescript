import React, { useState, FunctionComponent, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Suggestion } from "../../components/types/SuggestionsTypes";
import { Container } from "../../styles/globalStyles";

const Home: React.FC<any> = () => {
  const [suggestions, setSuggestions] = useState<Suggestion | null>(null);
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
