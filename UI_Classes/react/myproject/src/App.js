import Reviews from "./Reviews";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Header from "./components/Layout/Header";
import MainHeader from "./components/Layout/MainHeader";
import { Meals } from "./components/Meals/Meals";
//import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <MainHeader />
      <Meals />
    </>
  );
}

export default App;
