import React from "react";

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
export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: userData };
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }
  edit(id) {
    this.setState((data) => {
      const rowData = data.userData.filter((row) => {
        if (row.id === id) {
          row.firstname = row.firstname.toUpperCase();
          row.lastname = row.lastname.toUpperCase();
          return row;
        }

        return row;
      });
      return { userData: rowData };
    });
  }
  delete(id) {
    this.setState((data) => {
      const rowData = data.userData.filter((val) => {
        return val.id !== id;
      });
      return { userData: rowData };
    });
  }
  render() {
    const { userData } = this.state;
    return (
      <div className="mx-3 mt-4">
        <table className="table table-bordered border-dark text-center">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((val, index) => (
              <tr key={index}>
                <td>{val.id}</td>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>
                <td>{val.age}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.edit(val.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => this.delete(val.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
