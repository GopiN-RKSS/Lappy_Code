import React, { useState } from "react";

function TodoListFunComp() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const inputText = (e) => {
    setInput(e.target.value);
  };

  const formElement = document.querySelector("form");

  const itemsList = (e) => {
    e.preventDefault();
    setItems((oldItems) => {
      return input ? [...oldItems, input] : oldItems;
    });
    setInput("");
    formElement.reset();
  };

  const deleteName = (id) => {
    console.log(id);
    setItems((items) => {
      console.log(items);
      const res = items.filter((name) => {
        return name !== items[id];
      });
      return res;
    });
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12 fs-5 text-center">
          <h1>Todo List</h1>
          <form>
            <label>
              <input
                type="text"
                name="name"
                id="firstname"
                onChange={inputText}
              />
            </label>
            <input
              className="ms-2"
              type="submit"
              value="Submit"
              id="btn-submit"
              onClick={itemsList}
            />
          </form>
        </div>
        <div className="col-md-12 text-center mt-3 w-25 mx-auto my-auto">
          {items.map((val, index) => (
            <table className="table table-bordered border-primary" key={index}>
              <tbody>
                <tr>
                  <td>
                    {val}
                    <button
                      type="button"
                      className="ms-2 btn btn-outline-secondary"
                      onClick={() => deleteName(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoListFunComp;
