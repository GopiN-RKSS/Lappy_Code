import React, { useState } from "react";
import reviews from "./data";
import "./Reviews.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Reviews() {
  const [people, setPeople] = useState(0);
  const { name, job, image, text } = reviews[people];

  const checkLength = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setPeople((people) => {
      let newPerson = people - 1;
      return checkLength(newPerson);
    });
  };

  const nextPerson = () => {
    setPeople((people) => {
      let newPerson = people + 1;
      return checkLength(newPerson);
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center mb-3">
          <img src={image} className="img-thumbnail" alt={name} />
          <h1>{name}</h1>
          <h3>{job}</h3>
          <div>
            <p>{text}</p>
          </div>
        </div>
        <div className="text-center">
          <FaChevronLeft onClick={prevPerson} />
          <FaChevronRight onClick={nextPerson} />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
