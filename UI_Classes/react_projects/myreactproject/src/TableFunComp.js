import React, { useState } from "react";

const userData = [
  {
    id: 1,
    firstname: "gopi",
    lastname: "chand",
    age: 26,
  },
  {
    id: 2,
    firstname: "kohli",
    lastname: "virat",
    age: 32,
  },
  {
    id: 3,
    firstname: "Dhoni",
    lastname: "MS",
    age: 39,
  },
];

export const TableData = () => {
  const [data, setData] = useState(userData);

  const editRow = (id) => {
    setData((data) => {
      const rowlist = data.map((row) => {
        if (row.id === id) {
          row.firstname = row.firstname.toUpperCase();
          row.lastname = row.lastname.toUpperCase();
          return row;
        }
        return row;
      });

      return rowlist;
    });
  };
  const handlerDeleteRow = (id) => {
    setData((data) => {
      const rowData = data.filter((row) => row.id !== id);
      return rowData;
    });
  };
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, id) => (
            <tr key={id}>
              <td>{val.id}</td>
              <td>{val.firstname}</td>
              <td>{val.lastname}</td>
              <td>{val.age}</td>
              <td>
                <button
                  onClick={() => editRow(val.id)}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Edit
                </button>
                <button
                  onClick={() => handlerDeleteRow(val.id)}
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
