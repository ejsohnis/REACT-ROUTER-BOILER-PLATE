import React from 'react';
import './App.css';
import Home from "./Components/Home";
import DogSummary from './Components/DogSummary';
import DogCreation from './Components/DogCreation';
import AnimalNavbar from './Components/AnimalNavbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dogs from './Components/Dogs';

export default function App() {
  return (
    <Router>
      <div>

        {/* This is a project about Dogs. Using Mock API, and a React router path, allows the user to have a choice to navigate between pages: Home, Dogs, DogCreation and DogSummary. In addition, this project contains React bootstrap, at least 10 components and it allowed for all CRUD operations.
         */}
        {/* AnimalNavbar contain navigation html, and navigate between components */}
        <AnimalNavbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/dogs">
            <Dogs />
          </Route>

          <Route path="/dogsummary/:id">
            <DogSummary />
          </Route>

          <Route path="/dogcreation">
            <DogCreation />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );

}
