/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import http from "../services/http";
import { Container } from "../styles/globalStyles";

import Header from "../components/Header/Header";
import RestaurantBox from "../components/RestaurantBox/RestaurantBox";
import { Restaurant } from "../types/restaurantType";
import { StyledRestaurantContainer } from "../components/RestaurantBox/StyledRestaurantBox";

interface RProps {
  location: any;
  history: any;
  match: any;
}

const Restaurants: React.FC<RouteComponentProps<RProps>> = (props) => {
  // Buscar o location vindo do React-Router-DOM
  const { location } = props as RProps;
  const [data, setData] = useState<Restaurant[]>([]);
  const [IDS, setIDS] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurant = await http.get(
          `search?entity_id=${location?.state.suggestions?.id}&entity_type=city&radius=50`,
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
  }, []);

  return (
    <Container align="" background="white">
      <Header />
      <h1>Restaurants Component</h1>
      <StyledRestaurantContainer>
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
      </StyledRestaurantContainer>
    </Container>
  );
};

export default Restaurants;
