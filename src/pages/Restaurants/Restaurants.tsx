/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-case-declarations */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import http from "../../services/http";
import { Container, StyledH3 } from "../../styles/globalStyles";

import Header from "../../components/Header/Header";
import RestaurantBox from "../../components/RestaurantBox/RestaurantBox";
import { Restaurant } from "../../types/restaurantType";
import {
  StyledRestaurantsContainer,
  StyledRestaurantsPageContainer,
} from "./StyledRestaurants";
import Aside from "../../components/Aside/Aside";
import { Filters } from "../../types/filterTypes";
import { RProps } from "./restaurantsTypes";

const Restaurants: React.FC<RouteComponentProps<RProps>> = (props) => {
  // Buscar o location vindo do React-Router-DOM
  const { location } = props as RProps;
  const [data, setData] = useState<Restaurant[]>([]);
  const [IDS, setIDS] = useState<string[]>([]);
  const [costFiltered, setCostFiltered] = useState<Restaurant[]>([]);
  const [rating, setRatingFiltered] = useState<Restaurant[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurant = await http.get(
          `search?entity_id=${location?.state.suggestions?.id}&entity_type=city&radius=50&count=2`,
        );
        const restaurants = restaurant?.data.restaurants;
        console.log("restaurants", restaurants);

        setData(restaurants);
        const restaurantsIDS = restaurants.map(
          (res: { restaurant: { id: string } }, i: number) => res.restaurant.id,
        );
        setIDS(restaurantsIDS);
        console.log("IDS", restaurantsIDS);
        console.log("dataaa", data);
      } catch (error) {
        console.error("DEU PAU nos restaurantes");
      }
    };
    fetchData();

    console.log("DATA", data);
    console.log("PROPS DOS RESTAURANTS", props);
  }, []);
  useEffect(() => {
    console.log("Filtro de custos:", costFiltered);
    console.log("Filtro de rating:", rating);
  }, [costFiltered, rating]);
  const applyFilters = (filter: Filters) => {
    // Aplicar regras para mandar requests a endpoints passando query strings de acordo com o payload
    switch (filter.filterType) {
      case "cost":
        console.log("Filtro:", filter);
        console.log("Precos:", data[0].restaurant.average_cost_for_two);
        const filteredCost = data.filter(
          (res: Restaurant, i) =>
            res.restaurant.average_cost_for_two >= filter.payload,
        );
        console.log("Dados filtrados", filteredCost);
        setCostFiltered(filteredCost);
        return filteredCost;
      case "rating":
        const filteredRating = data.filter(
          (res: Restaurant, i) =>
            res.restaurant.user_rating.aggregate_rating >= filter.payload,
        );
        console.log("Filtro por nota", filteredRating);
        setRatingFiltered(filteredRating);
        return filteredRating;

      default:
        return data;
    }
  };
  return (
    <>
      <Header />
      <Container row align="" background="white">
        <Aside
          rating={({ filterType, payload }) =>
            applyFilters({ filterType, payload })
          }
          cost={({ filterType, payload }) =>
            applyFilters({ filterType, payload })
          }
        />

        <StyledRestaurantsPageContainer>
          <StyledH3 color="#333">
            Restaurantes em
            {location.state.suggestions.name}
          </StyledH3>

          <StyledRestaurantsContainer>
            {data.map((es, index) => (
              <RestaurantBox
                id={IDS[index]}
                average_cost_for_two={es.average_cost_for_two}
                key={es.restaurant.id}
                location={es.restaurant.location}
                cuisines={es.restaurant.cuisines}
                currency={es.restaurant.currency}
                name={es.restaurant.name}
                phoneNumbers={es.restaurant.phoneNumbers}
                image={`"${es.restaurant.photos_url}"`}
              />
            ))}
            <button
              type="button"
              onClick={() => applyFilters({ filterType: "cost", payload: 100 })}
            >
              Filtrar por preco
            </button>
          </StyledRestaurantsContainer>
        </StyledRestaurantsPageContainer>
      </Container>
    </>
  );
};

export default Restaurants;
