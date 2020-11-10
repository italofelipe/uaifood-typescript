import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Restaurants from "./pages/Restaurants/Restaurants";

/* TODO: Pegar da API de Geolocalização do Browser a localização
* do browser, e com isso, sugerir restaurantes próximos naquela 
região
*/

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={Restaurants} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
