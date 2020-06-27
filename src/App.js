import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import tortebi from "./pages/shoes";
import Header from "./components/header";
import MainPage from "./pages/Main";
import torti from "./pages/shoe";
import Admin from "./pages/Admin";
import AdminEdit from "./pages/AdminEdit";
import AdminAddNewtort from "./pages/AdminAddNewshoe";
import shoes from "./pages/shoes";
import shoe from "./pages/shoe";
import AdminAddNewshoes from "./pages/AdminAddNewshoe";
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
        <Route path="/admin/shoes/new" component={AdminAddNewshoes} />
      </Switch>
    </Router>
  );
}

export default App;
