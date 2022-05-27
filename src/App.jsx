import React, { useState } from "react";
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom'

import Form from "./components/Form.jsx"
import Confirmation from "./components/Confirmation.jsx"
import Home from './components/Home.jsx'


const initialFormValues = {
  size: "",
  sauce: "",
  pineapple: false,
  jalapeno: false,
  pepperoni: false,
  special_instuctions: "",
}


const App = () => {
  const [ formValues, setFormValues ] = useState(initialFormValues)


  return ( 
    <div className="pizza-app">
      <nav>
        <h1 className="header">Bloomtech Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
      <Switch>
        <Route path={"/pizza/:pizzaID"}>
          <Confirmation/>
        </Route>
        <Route path="/pizza">
          <Form/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
