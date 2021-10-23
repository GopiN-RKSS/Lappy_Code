import React, { useEffect, useState } from "react";

export const CovidList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((res) => res.json())

      .then((jsondata) => setData(jsondata.statewise));
  }, []);
  return (
    <>
      <div>
        <h2 className="text-info">India Covid Status</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>state</th>
              <th>confirmed</th>
              <th>recovered</th>
              <th>deaths</th>
              <th>active</th>
              <th>lastupdatedtime</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val) => {
              return (
                <tr>
                  <td>{val.state}</td>
                  <td>{val.confirmed}</td>
                  <td>{val.recovered}</td>
                  <td>{val.deaths}</td>
                  <td>{val.active}</td>
                  <td>{val.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
