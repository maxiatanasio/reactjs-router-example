import React from "react";
import { Link } from "react-router-dom";
import SuperLink from "./SuperLink.jsx";

const NavBar = () => (
  <nav>
    <ul>
      <SuperLink to="/" exact>
        Home
      </SuperLink>
      <SuperLink to="/about">About</SuperLink>
      <SuperLink to="/contact">Contact</SuperLink>
    </ul>
  </nav>
);

export default NavBar;
