import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import http from "../../services/http";

import Header from "../../components/Header/Header";
import RestaurantBox from "../../components/RestaurantBox/RestaurantBox";
import { Restaurant } from "../../types/restaurantType";
import { Container, StyledH3 } from "../../styles/globalStyles";
import {
  StyledRestaurantsContainer,
  StyledRestaurantsPageContainer,
} from "./StyledRestaurants";
import Aside from "../../components/Aside/Aside";
import { Filters } from "../../types/filterTypes";
import { RProps } from "./restaurantsTypes";

const Restaurants: React.FC<RouteComponentProps<RProps>> = (props) => {
  const { location } = props as RProps;
  const [data, setData] = useState<Restaurant[]>([]);
  const [IDS, setIDS] = useState<string[]>([]);
  const [costFiltered, setCostFiltered] = useState<Restaurant[]>([]);
  const [rating, setRatingFiltered] = useState<Restaurant[]>([]);
  const [customError, setCustomError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationID = location.state.id;

        const restaurant = await http.get(
          `search?entity_id=${locationID}&entity_type=city&radius=50&count=4`,
        );
        const restaurants = restaurant?.data.restaurants;
        console.log("restaurants", restaurants);

        setData(restaurants);
        const restaurantsIDS = restaurants.map(
          (res: { restaurant: { id: string } }, i: number) => res.restaurant.id,
        );
        setIDS(restaurantsIDS);

        // Buscar as cozinhas pelo id da cidade Ex: bsb - cod 66
        const placeCousines = await http.get(`cuisines?city_id=${locationID}`);
        const cousinesResponse = placeCousines.data;
        console.log("Cousines Response:", cousinesResponse);
      } catch (error) {
        console.error("DEU PAU nos restaurantes");
        setCustomError("Houve um erro ao buscar os restaurantes");
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log("Filtro de custos:", costFiltered);
    console.log("Filtro de rating:", rating);
  }, [costFiltered, rating]);
  const applyFilters = (filter: Filters) => {
    switch (filter.filterType) {
      case "cost": {
        console.log("Filtro:", filter);
        console.log("Precos:", data[0].restaurant.average_cost_for_two);
        const filteredCost = data.filter(
          (res: Restaurant) =>
            res.restaurant.average_cost_for_two >= filter.payload,
        );
        console.log("Dados filtrados", filteredCost);
        setCostFiltered(filteredCost);
        return filteredCost;
      }

      case "rating": {
        const filteredRating = data.filter(
          (res: Restaurant) =>
            res.restaurant.user_rating.aggregate_rating >= filter.payload,
        );
        console.log("Filtro por nota", filteredRating);
        setRatingFiltered(filteredRating);
        return filteredRating;
      }

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
            {location.state.name}
          </StyledH3>

          <StyledRestaurantsContainer>
            {data.map((es, index) => (
              <RestaurantBox
                id={IDS[index]}
                key={es.restaurant.id}
                location={es.restaurant.location}
                cuisines={es.restaurant.cuisines}
                currency={es.restaurant.currency}
                name={es.restaurant.name}
                phoneNumbers={es.restaurant.phoneNumbers}
                image={`"${es.restaurant.photos_url}"`}
              />
            ))}
          </StyledRestaurantsContainer>
        </StyledRestaurantsPageContainer>
      </Container>
    </>
  );
};

export default Restaurants;
