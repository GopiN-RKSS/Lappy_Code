import React from "react";

export const MealsForm = () => {
  return (
    <div>
      <div class="d-flex mb-3">
        <label htmlFor="Amount" class="me-2">
          <strong>Amount</strong>
        </label>
        <input
          id="amount"
          type="number"
          min="1"
          max="5"
          defaultValue="1"
          className="text-center"
        />
      </div>
      <button type="button" class="btn btn-info rounded-pill w-100 mb-2">
        +Add
      </button>
    </div>
  );
};
