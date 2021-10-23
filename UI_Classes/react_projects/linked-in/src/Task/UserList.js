import React, { useState } from "react";
import "./UserList.css";

const data = [
  { day: "monday", name: "peter", id: 1 },
  { day: "tuesday", name: "jodi", id: 2 },
  { day: "wednessday", name: "alex", id: 3 },
  { day: "thurseday", name: "sai", id: 4 },
  { day: "friday", name: "kumar", id: 5 },
  { day: "saturday", name: "praveen", id: 6 },
  { day: "sonday", name: "gopi", id: 7 },
];

export const UserList = () => {
  const [state, setState] = useState(data);

  const handleChange = (id) => {
    setState(() => {
      data.forEach((res) => {
        if (res.id === id) {
          let temp = data[data.length - 1];
          data[data.length - 1] = data[id - 1];
          data[id] = temp;

        }
      });
      console.log(data);
      return data;
    });
   
  };
  return (
    <>
      {state.map((val, index) => (
        <div key={index} className="fles">
          <div>{val.day}</div>
          <div>{val.name}</div>
          <div>
            <button onClick={() => handleChange(val.id)}>Leave</button>
          </div>
        </div>
      ))}
    </>
  );
};
