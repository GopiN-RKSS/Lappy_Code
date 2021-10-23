import React from "react";
import { Link } from "react-router-dom";
import "./AllQuotes.css";

const quotes = [
  { id: 1, name: "Gopi", text: "Learning React" },
  { id: 2, name: "Sai", text: "Learning JavaScript" },
];
export const AllQuotes = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-lg-1 g-5 w-50 mx-auto">
          {quotes.map((quote, index) => (
            <div className="col" key={index}>
              <div className="border border-2 border-success p-4">
                <div>
                  <span>{quote.text}</span>
                  <button
                    type="button"
                    className="flrght btn btn-outline-success"
                  >
                    <Link to={`/quotes/${quote.id}`} className="nav-link">
                      View Data
                    </Link>
                  </button>
                </div>
                <div className="ms-5 mt-3">{quote.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
