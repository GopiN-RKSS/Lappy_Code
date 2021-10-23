import React from "react";
import { useParams, Route } from "react-router-dom";
import { HighlightQuote } from "./HighlightQuote";

export const QuoteDetails = () => {
  let quotes = [
    { id: 1, name: "Gopi", text: "Learning React" },
    { id: 2, name: "Sai", text: "Learning JavaScript" },
  ];
  const params = useParams();

  let quote = quotes.filter((quote) => quote.id === params.quoteId);

  if (!quote) {
    <h1>No quote found</h1>;
  }

  return (
    <div>
      <HighlightQuote quote={quote} />
      {/* <Route path={`/quotes/${params.quoteId}`}></Route> */}
    </div>
  );
};
