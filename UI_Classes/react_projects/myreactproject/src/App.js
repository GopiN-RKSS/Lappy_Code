// import HotelHeader from "./HotelHeader";
// import { HotelCustomers } from "./HotelPage";
import React from "react";
//import Header from "./Header";
//import { Footer } from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
//import { Home } from "./Home";
//import { About } from "./About";
//import { Services } from "./Services";
//import { Contact } from "./Contact";
import { Nav } from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Axios } from "./Axios";
import { Counter } from "./counter/Counter";
//import CounterClassComp from "./counter/CounterClassComp";
import { TodoItems } from "./TodoList/TodoItems";
import { CounterFun } from "./ReduxToolKit/Counter";

//import { SignUpForm } from "./forms/SignUpForm";
//import { InputForm } from "./forms/InputForm";
//import { LiftingStateUp } from "./LiftingStateUp";
//import { HotelCustomers } from "./HotelPage";
//import { users, services } from "./usersData";
//import { Table } from "./Table";

function App() {
  // const menu = [
  //   {
  //     item: "Home",
  //   },
  //   {
  //     item: "About",
  //   },
  //   {
  //     item: "Services",
  //   },
  //   {
  //     item: "Contact",
  //   },
  // ];
  // const [state, setState] = useState({ counter: 0 });

  // const increment = () => {
  //   setState(() => {
  //     return {
  //       counter: state.counter + 1,
  //     };
  //   });
  // };
  // const decrement = () => {
  //   setState(() => {
  //     return {
  //       counter: state.counter - 1,
  //     };
  //   });
  // };
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          {/* <Home /> */}
          <TodoItems />
        </Route>
        <Route path="/about">
          {/* <CounterClassComp /> */}
          <CounterFun />
        </Route>
        <Route path="/services">
          {/* <Services /> */}
          <Counter />
        </Route>
        <Route path="/contact">
          {/* <Contact /> */}
          <Axios />
        </Route>
      </Switch>

      {/* <Header menu={menu} /> */}
      {/* <
      InputForm /> */}
      {/* <Footer /> */}
      {/* <Table /> */}
      {/* <Api /> */}
      {/* <TodoListFunComp /> */}
      {/* <LiftingStateUp
        counter={state.counter}
        increment={increment}
        decrement={decrement}
      />
      <LiftingStateUp
        counter={state.counter}
        increment={increment}
        decrement={decrement}
      /> */}
      {/* <SignUpForm /> */}
    </Router>
  );
}

export default App;
