import React, { useEffect, useState } from "./gverdebi/node_modules/react";
import { BrowserRouter as Router, Route, Switch } from "./gverdebi/node_modules/react-router-dom";
import shoes from "./gverdebi/shoes";
import Header from "./components/header";
import MainPage from "./gverdebi/Main";
import shoe from "./gverdebi/shoe";
import Admin from "./gverdebi/Admin";
import AdminEdit from "./gverdebi/AdminEdit";
import AdminAddNewshoe from "./gverdebi/AdminAddNewshoe";
import shoes from "./gverdebi/shoes";
import shoe from "./gverdebi/shoe";
import AdminAddNewshoe from "./gverdebi/AdminAddNewshoe";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/store/shoes" component={shoes} />
        <Route path="/store/shoe/:id" component={shoe} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/shoes/:id/edit" component={AdminEdit} />
        <Route path="/admin/shoes/new" component={AdminAddNewshoe} />
      </Switch>
    </Router>
  );
}

export default App;
