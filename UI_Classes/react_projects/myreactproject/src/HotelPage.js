import React from "react";

export const HotelCustomers = ({ users, services }) => {
  console.log(users, services);

  let button;

  let res = users.map((user, index) => {
    if (user.person === "VIP") {
      button = services.facilitiesVip.map((val, index) => {
        return val;
      });
      return `${user.name}** ${button}`;
    } else {
      button = services.facilities.map((val, index) => {
        return val;
      });
      return `${user.name} ${button}`;
    }
  });

  return (
    <>
      <div className="container-fluid mt-4">
        <h6>CheckIn : 18-Jun-2021</h6>
      </div>
      <div className="row row-cols-1 row-cols-lg-1 my-4 mx-4">
        {/* {users.map((user, index) => ( */}
        {res.map((val, index) => (
          <div
            className="col border border-2 mb-3 border-dark p-3 text-danger"
            key={index}
          >
            <h3>{val}</h3>

            {/* {user.person === "VIP" ? (
              <h3>{user.name}**</h3>
            ) : (
              <h3>{user.name}</h3>
            )} */}

            {/* {user.person === "VIP"
            ? services.facilitiesVip.map((val, index) => (
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm me-2 mb-2"
                  key={index}
                >
                  {val}
                </button>
              ))
            : services.facilities.map((val, index) => (
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm me-2 mb-2"
                  key={index}
                >
                  {val}
                </button>
              ))} */}
          </div>
        ))}
        {/* ))} */}
      </div>
    </>
  );
};
