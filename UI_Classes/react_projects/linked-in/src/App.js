import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { UserList } from "./Task/UserList";

//import { Header } from "./Header";
//import { Sidebar } from "./Sidebar";

function App() {
  return (
    <>
      {/* <Header />
      <Sidebar /> */}

      <UserList />
    </>
  );
}

export default App;
