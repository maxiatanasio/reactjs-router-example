import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "./Pages/Index.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

const Router = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
      <Route path="/:id" render={props => <p>Something</p>} />
    </Switch>
  </div>
);

export default Router;
