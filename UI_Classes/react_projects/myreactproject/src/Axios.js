import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Api.css";

export const Axios = () => {
  const [ApiData, setApiData] = useState([]);
  const [query, setQuery] = useState("magazines");
  const [select, setSelect] = useState("books");
  const [url, setUrl] = useState(
    // "https://hn.algolia.com/api/v1/search?query=redux"
    "https://www.googleapis.com/books/v1/volumes?q=magazines&printType=books&key=AIzaSyCgWnLD7riCTk4lJ4wPXSWHe8uTnFtfTv8"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        let res = await axios(url);
        setApiData(res.data.items);
        console.log(res.data.items);
      } catch {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange1 = (e) => {
    if (e.target.value === "All") {
      setUrl(url);
    }
    setSelect(e.target.value);
    console.log(select);
  };
  return (
    <>
      <div className="text-center">
        <form
          onSubmit={(event) => {
            // setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
            setUrl(
              `https://www.googleapis.com/books/v1/volumes?q==${query}&printType=${select}&key=AIzaSyCgWnLD7riCTk4lJ4wPXSWHe8uTnFtfTv8`
            );
            event.preventDefault();
          }}
        >
          {/* <input
            type="text"
            value={query}
            onChange={handleChange}
            className="me-3"
          />

          <select
            name="printtype"
            id="type"
            value={select}
            onChange={handleChange1}
          >
            <option value="books">books</option>
            <option value="magazines">magazines</option>
            <option value="">All</option>
          </select>

          <button type="button" className="btn btn-primary mh-25 ms-3">
            Search
          </button> */}

          <div className="d-inline-flex">
            <input
              type="text"
              className="form-control w-50 me-3 text-center"
              value={query}
              onChange={handleChange}
            />
            <select
              className="form-select w-25"
              onChange={handleChange1}
              name="printtype"
              value={select}
            >
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
              <option value="All">All</option>
            </select>
            <button type="submit" className="btn btn-primary ms-3">
              Search
            </button>
          </div>
        </form>
      </div>
      {isError && <div>Something Went Wrong...</div>}
      {isLoading ? (
        <div className="text-center text-danger">Loading ...</div>
      ) : (
        <div className="container-fluid">
          <div className="row row-cols-lg-3 row-cols-g-2 mt-4">
            {ApiData.map((val, index) => {
              return (
                <div key={index}>
                  <div className="col border border-2 border-info mt-3 p-2 hgt">
                    {/* <h5>
                      <span className="text-dark me-3">Title:</span>
                      {val.volumeInfo.title}
                    </h5>
                    <h5>
                      <span className="text-dark me-3">Publisher:</span>
                      {val.volumeInfo.publisher}
                    </h5>
                    <h5>
                      <span className="text-dark me-3">PrintType:</span>
                      {val.volumeInfo.printType}
                    </h5> */}
                    <table className="table text-primary table-striped">
                      <tbody>
                        <tr>
                          <td>Title:</td>
                          <td>{val.volumeInfo.title}</td>
                        </tr>
                        <tr>
                          <td>Publisher:</td>
                          <td>{val.volumeInfo.publisher}</td>
                        </tr>

                        <tr>
                          <td>PrintType:</td>
                          <td>{val.volumeInfo.printType}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
