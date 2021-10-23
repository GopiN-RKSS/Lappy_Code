import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import { UserList } from "./ContextApi/UserList";
// import { Nav } from "./ContextApi/Nav";
import { ContextProvider } from "./ContextApi/ContextProvider";
import { data } from "./Task/data";
import { Task } from "./Task/Task";
import { Search } from "./Task/Search";
import { Nav } from "./Task/Nav";
import { Provider } from "./Context/Provider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import { Sidebar } from "./Sidebar";

function App() {
  //const data = ["Home", "Team", "Projects", "Calender", "Documents"];
  return (
    <>
      {/* <ContextProvider>
        <UserList />
        <Nav />
      </ContextProvider>
     */}

      <ContextProvider>
        <Nav />
        <div className="container border border-2 border-secondary mt-3 p-4">
          <Search />
          <Task />
        </div>
      </ContextProvider>
      {/* <Provider /> */}
    </>
  );
}

export default App;
