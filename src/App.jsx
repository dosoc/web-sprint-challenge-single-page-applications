import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom'

import Form from "./components/Form.jsx"
import Confirmation from "./components/Confirmation.jsx"
import Home from './components/Home.jsx';

import * as yup from 'yup';
import schema from "./validation/formSchema"


const initialFormValues = {
  name: "",
  size: "",
  pineapple: false,
  jalapeno: false,
  pepperoni: false,
  bacon: false,
  special: "",

}
const initialFormErrors = {
  name: "",
  size: ""
}
const initialDisabled = true;
const initialOrders = [];


const App = () => {
  const [ orders, setOrders ] = useState(initialOrders)
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled);

  const submitOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
    .then(res=> {
      console.log(res)
    }).catch(err=> console.error(err))
    .finally(()=> setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ["pineapple", "jalapenos", "pepperoni", "bacon"].filter(top=> !!formValues[top]),
      special: formValues.special.trim()
    };
    submitOrder(newOrder);
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value});
  }

  useEffect(()=> {
    schema.isValid(formValues).then(valid=> setDisabled(!valid))
  }, [formValues])


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
            update={inputChange}
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
