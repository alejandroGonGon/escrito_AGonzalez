import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import Meetings from '../pages/Meetings';
// import NavRouter from './NavRouter';

const Routes = () => (
  <Switch>
      <Route path="/meetings">
      <NavBar />
      <Meetings />
    </Route>
    <Route path="/">
    <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
