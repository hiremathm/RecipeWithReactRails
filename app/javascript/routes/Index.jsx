import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import ShowRecipe from "../components/ShowRecipe"
import NewRecipe from "../components/NewRecipe"

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/recipes/:id" exact component={ShowRecipe} />
      <Route path="/new_recipe" exact component={NewRecipe} />
    </Switch>
  </Router>
);