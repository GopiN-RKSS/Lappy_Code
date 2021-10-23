// import React, { Component } from "react";

// export class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { input: "" };
//     //this.items = { itemsList: [] };
//     this.inputText = this.inputText.bind(this);
//     //this.itemsList = this.itemsList.bind(this);
//   }

//   inputText(e) {
//     this.setState({ input: e.target.value });
//   }

//   // itemsList(e) {
//   //   e.preventDefault();
//   //   this.formElement = document.querySelector("form");
//   //   this.setItems((oldItems) => {
//   //     return [...oldItems, this.state.input];
//   //   });
//   //   this.formElement.reset();
//   // }

//   render() {
//     return (
//       <>
//         <form>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               id="firstname"
//               onChange={this.inputText}
//             />
//           </label>
//           <input
//             type="submit"
//             value="Submit"
//             id="btn-submit"
//             onClick={this.itemsList}
//           />
//         </form>
//         {/* {itemsList.map((val, index) => (
//           <li key={index}>{val}</li>
//         ))} */}
//       </>
//     );
//   }
// }

// export default TodoList;
