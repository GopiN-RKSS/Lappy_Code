import React, { useState } from "react";
import { Header } from "./Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MenuComponent } from "./MenuComponent";
import { menu } from "./data";

function App() {
  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

  const [state, setState] = useState(menu);

  const filterItems = (category) => {
    if (category === "all") {
      setState(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setState(newItems);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col display-5">
            <span className="underline1">Our Menu</span>
          </div>
        </div>
      </div>
      <Header categories={allCategories} filterItems={filterItems} />
      <MenuComponent menuItems={state} />
    </>
  );
}

export default App;
