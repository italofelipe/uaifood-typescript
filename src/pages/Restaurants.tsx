/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
import React, { useEffect, FunctionComponent } from "react";
import { RouteComponentProps } from "react-router-dom";
import http from "../services/http";
import { Container } from "../styles/globalStyles";

interface RProps {
  location: any;
  history: any;
  match: any;
}

const Restaurants: React.FC<RouteComponentProps<RProps>> = (props) => {
  // Buscar o location vindo do React-Router-DOM
  const {
    history: {},
  } = props;

  const fetchData = async () => {
    const response = await http.get(
      `establishments?city_id=${location?.state.suggestions?.id}`,
    );
    const data = response?.data;
    console.log("Data", data);
  };
  useEffect(() => {
    console.log("props", props);
    fetchData();
  }, []);
  return (
    <Container>
      <h1>Restaurants Component</h1>
      <button type="button" onClick={fetchData}>
        Puxar dados
      </button>
    </Container>
  );
};

export default Restaurants;
