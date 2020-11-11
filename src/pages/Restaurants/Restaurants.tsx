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
import { Cousine, CousineTypes } from "../../types/cousineTypes";

const Restaurants: React.FC<RouteComponentProps<RProps>> = (props) => {
  const { location } = props as RProps;
  const [data, setData] = useState<Restaurant[]>([]);
  const [IDS, setIDS] = useState<string[]>([]);
  // Filtros
  const [costFiltered, setCostFiltered] = useState<Restaurant[]>([]);
  const [ratingFiltered, setRatingFiltered] = useState<Restaurant[]>([]);
  const [cousinesTypes, setCousinesTypes] = useState<Cousine[]>([]);
  const [allFiltered, setAllFiltered] = useState<Restaurant[]>([]);
  // Tratamento de erros
  const [customError, setCustomError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationID = location.state.id;

        const restaurant = await http.get(
          `search?entity_id=${locationID}&entity_type=city&radius=50&count=20`,
        );
        const restaurants = restaurant?.data.restaurants;

        setData(restaurants);
        const restaurantsIDS = restaurants.map(
          (res: { restaurant: { id: string } }, i: number) => res.restaurant.id,
        );
        setIDS(restaurantsIDS);

        // Buscar as cozinhas pelo id da cidade Ex: bsb - cod 66
        const placeCousines = await http.get(`cuisines?city_id=${locationID}`);
        const cousinesResponse: Cousine[] = placeCousines.data;
        setCousinesTypes(cousinesResponse);
      } catch (error) {
        console.error("DEU PAU nos restaurantes");
        setCustomError("Houve um erro ao buscar os restaurantes");
      }
    };
    fetchData();
  }, []);
  useEffect(() => {}, [costFiltered, ratingFiltered, allFiltered]);

  const applyFilters = (filter: Filters): any => {
    switch (filter.filterType) {
      case "cost": {
        const filteredCost = data.filter(
          (res: Restaurant) =>
            res.restaurant.average_cost_for_two <= filter.payload,
        );
        setCostFiltered(filteredCost);

        if (ratingFiltered) {
          const joinedFilters = [...costFiltered, ...ratingFiltered];
          const sanitizedData = joinedFilters.filter(
            (item, index) => joinedFilters.indexOf(item) === index,
          );
          setAllFiltered([...sanitizedData]);
        } else {
          setAllFiltered([...filteredCost]);
        }
        return filteredCost;
      }

      case "rating": {
        const filteredRating = data.filter(
          (res: Restaurant) =>
            res.restaurant.user_rating.aggregate_rating >= filter.payload,
        );
        setRatingFiltered(costFiltered);
        if (costFiltered) {
          const joinedFilters = [...costFiltered, ...filteredRating];
          const sanitizedData = joinedFilters.filter(
            (item, index) => joinedFilters.indexOf(item) === index,
          );
          setAllFiltered([...sanitizedData]);
        } else {
          setAllFiltered([...filteredRating]);
        }

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
          cousine={({ filterType, payload }) =>
            applyFilters({ filterType, payload })
          }
          cousines={cousinesTypes}
        />

        <StyledRestaurantsPageContainer>
          <StyledH3 color="#333">
            Restaurantes em
            {location.state.name}
          </StyledH3>

          {allFiltered.length === 0 ? (
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
                  average_cost_for_two={es.restaurant.average_cost_for_two}
                />
              ))}
            </StyledRestaurantsContainer>
          ) : null}

          {allFiltered.length > 0 ? (
            <StyledRestaurantsContainer>
              {allFiltered.map((es, index) => (
                <RestaurantBox
                  id={IDS[index]}
                  key={es.restaurant.id}
                  location={es.restaurant.location}
                  cuisines={es.restaurant.cuisines}
                  currency={es.restaurant.currency}
                  name={es.restaurant.name}
                  phoneNumbers={es.restaurant.phoneNumbers}
                  image={`"${es.restaurant.photos_url}"`}
                  average_cost_for_two={es.restaurant.average_cost_for_two}
                />
              ))}
            </StyledRestaurantsContainer>
          ) : (
            <h1>Nenhum filtro</h1>
          )}
        </StyledRestaurantsPageContainer>
      </Container>
    </>
  );
};

export default Restaurants;
