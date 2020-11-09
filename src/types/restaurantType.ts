/* eslint-disable camelcase */
export interface Restaurant {
  average_cost_for_two: number;
  id: string;
  name: string;
  currency: string;
  location: Location;
  cuisines: string;
  phoneNumbers: string;
  image: string;
  restaurant?: any;
}

interface Location {
  address: string;
  city: string;
  cityId: number;
  countryId: number;
  latitude: string;
  locality: string;
  localityVerbose: string;
  longitude: string;
  zipcode: string;
}
