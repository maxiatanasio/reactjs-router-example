import React from "react";
import { Route, Switch } from "react-router-dom";

import EmployeesList from "../EmployeesList.jsx";
import EmployeeDetails from "../EmployeeDetails.jsx";

const About = () => (
  <div>
    <Switch>
      <Route path="/about" exact component={EmployeesList} />
      <Route path="/about/:id" component={EmployeeDetails} />
    </Switch>
  </div>
);

export default About;
