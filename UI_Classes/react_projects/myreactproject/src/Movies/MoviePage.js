import React from "react";

import "./MoviePage.css";
export const Movies = ({ data }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-g-3 my-4 mx-4">
        {data.map((movie, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img
                src={movie.img}
                className="card-img-top img-fluid"
                alt={movie.name}
              />
              <div className="card-body">
                <p className="card-text text-center">{movie.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
