/* eslint-disable no-use-before-define */
import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import { AppProps } from "./types/AppProps";

/* TODO: Pegar da API de Geolocalização do Browser a localização
* do browser, e com isso, sugerir restaurantes próximos naquela 
região
*/

const App: FunctionComponent<AppProps> = ({ name }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={Restaurants} />
        </Switch>
      </BrowserRouter>
      <Home />
      <span>{name}</span>
    </div>
  );
};

export default App;
