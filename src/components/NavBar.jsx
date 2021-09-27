import React from 'react';
import {
  Link
} from "react-router-dom";
const NavBar = () => (
  <header>
    <h1>Menu</h1>
    <Link to="/">Home</Link>
    <Link to="/meetings">Meetings</Link>
  </header>
);

export default NavBar;
