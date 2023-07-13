import NavMenu from "../TypeScript/NavMenu";
import "../sass/pages/_base.scss";

const Base = () => {
  const navMenu = [
    {
      img: <NavMenu id="fire" />,
      figcaption: "Акции",
    },
    {
      img: <NavMenu id="pizza" />,
      figcaption: "Пицца",
    },
    {
      img: <NavMenu id="sushi" />,
      figcaption: "Суши",
    },
    {
      img: <NavMenu id="drink" />,
      figcaption: "Напитки",
    },
    {
      img: <NavMenu id="snacks" />,
      figcaption: "Закуски",
    },
    {
      img: <NavMenu id="combo" />,
      figcaption: "Комбо",
    },
    {
      img: <NavMenu id="desserts" />,
      figcaption: "Десерты",
    },
    {
      img: <NavMenu id="sauce" />,
      figcaption: "Соусы",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="navbar">
          <nav>
            {navMenu.map((el, index) => {
              return (
                <figure key={index}>
                  {el.img}
                  <figcaption>{el.figcaption}</figcaption>
                </figure>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Base;
