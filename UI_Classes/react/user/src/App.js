import logo from "./logo.svg";
import "./App.css";
//import { LoginPage } from "./UserAthentication";
import { CovidList } from "./CovidList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <CovidList />
    </div>
  );
}

export default App;
