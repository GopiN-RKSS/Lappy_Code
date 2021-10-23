import React from "react";
import { MealsForm } from "./MealsForm";
import "./AvailableMeals.css";

const meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "22.99",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german speciality",
    price: "24.50",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "20.75",
  },
  {
    id: "m4",
    name: "Biryani",
    description: "Hyderabad Special",
    price: "30",
  },
  {
    id: "m5",
    name: "Mandi",
    description: "Cheese and no Masala",
    price: "35",
  },
];

export const AvailableMeals = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="border border-2 border-success p-4 mt-5 mx-auto rounded-3 w-75">
              {meals.map((val) => (
                <div key={val.id}>
                  <div className="d-flex">
                    <div>
                      <h5>{val.name}</h5>
                      <div>{val.description}</div>
                      <div className="text-danger">${val.price}</div>
                    </div>
                    <div className="mx-auto me-0">
                      <MealsForm />
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
