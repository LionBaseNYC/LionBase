import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/index";
import Apply from "./pages/apply";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Apply}/>
      {/*<Route path='/schedule' component={Schedule}/>*/}
    </Switch>
  </main>
);


export default Main;