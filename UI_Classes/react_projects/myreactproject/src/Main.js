import Header from "./Header";
import { Footer } from "./Footer";
import { Movies } from "./Movies/MoviePage";
import { data } from "./Movies/MoviesData";

let Main = () => {
  const menuItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Contact" },
  ];

  return (
    <>
      <Header menu={menuItems} />
      <Movies data={data} />
      <Footer />
    </>
  );
};
export default Main;
