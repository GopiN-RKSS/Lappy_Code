import React, { Component } from "react";
import "./Api.css";
import axios from "axios";

export class Api extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      this.setState({ movies: [].concat(res.data.data.memes) });
      console.log(this.state.movies);
    });
  }

  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
      <div className="container-fluid g-3">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-g-3 ">
          {movies.map((val, index) => (
            <div className="col" key={index}>
              <div className="mb-4 mt-5 border border-2 border-dark p-4 text-center">
                <img src={val.url} alt={val.name} />
                <h3>{val.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
