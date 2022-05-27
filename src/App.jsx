import React, { useState } from "react";
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom'

import Form from "./components/Form.jsx"
import Confirmation from "./components/Confirmation.jsx"
import Home from './components/Home.jsx';

import * as yup from 'yup';
import schema from "./validation/formSchema"


const initialFormValues = {
  size: "",
  sauce: "",
  special_instuctions: "",
}
const initialFormErrors = {
  name: "",
  size: ""
}
const initialDisabled = true;


const App = () => {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState("");
  const [ disabled, setDisabled ] = useState(initialDisabled);

  const formSubmit = () => {

  }

  const inputChange = () => {

  }


  return ( 
    <div className="pizza-app">
      <nav>
        <div className="header">
          <h1 className="title-logo">Bloomtech Eats</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/pizza">Order</Link>
          </div>
        </div>
        
      </nav>
      <Switch>
        <Route path={"/pizza/:pizzaID"}>
          <Confirmation/>
        </Route>
        <Route path="/pizza">
          <Form 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
