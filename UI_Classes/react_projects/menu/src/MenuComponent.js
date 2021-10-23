import React from "react";
import "./MenuComponent.css";

export const MenuComponent = ({ menuItems }) => {
  return (
    <>
      <div className="container mt-4">
        <div className="row g-5 row-cols-1 row-cols-lg-2">
          {menuItems.map((val, index) => (
            <div className="col flex" key={index}>
              <div className="">
                <img src={val.img} alt={val.title} />
              </div>
              <div className="">
                <div className="underline">
                  {val.title}
                  <span className="right text-danger">${val.price}</span>
                </div>
                <div className="ms-3">{val.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
