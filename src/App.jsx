import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Base from "./pages/Base";
import Sale from "./pages/Sale";
import Search from "./pages/Search";
import Pizza from "./pages/Pizza";
import Sushi from "./pages/Sushi";
import Snacks from "./pages/Snacks";
import Desserts from "./pages/Desserts";
import Drinks from "./pages/Drinks";
import Sauce from "./pages/Sauce";
import Combo from "./pages/Combo";
import ShowMore from "./pages/ShowMore";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Base />
        <Sale />
        <Search />
        <Pizza />
        <Sushi />
        <Snacks />
        <Desserts />
        <Drinks />
        <Sauce />
        <Combo />
        <ShowMore />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
