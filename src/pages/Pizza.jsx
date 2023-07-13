import "../sass/pages/_pizza.scss";

const Pizza = () => {
  const pizzaItems = [
    {
      image: "/src/assets/products/pizza_1.svg",
      title: "Чикен Сладкий Чили",
      subtitle: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
      price: "от 399 ₽",
    },
    {
      image: "/src/assets/products/pizza_2.svg",
      title: "Чикен Сладкий Чили",
      subtitle: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
      price: "от 549 ₽",
    },
    {
      image: "/src/assets/products/pizza_3.svg",
      title: "Чикен Сладкий Чили",
      subtitle: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
      price: "от 249 ₽",
    },
    {
      image: "/src/assets/products/pizza_4.svg",
      title: "Чикен Сладкий Чили",
      subtitle: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
      price: "от 630 ₽",
    },
    {
      image: "/src/assets/products/pizza_1.svg",
      title: "Чикен Сладкий Чили",
      subtitle: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
      price: "от 630 ₽",
    },
    {
      image: "/src/assets/products/pizza_2.svg",
      title: "Чикен Сладкий Чили",
      subtitle: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
      price: "от 399 ₽",
    },
    {
      image: "/src/assets/products/pizza_3.svg",
      title: "Чикен Сладкий Чили",
      subtitle: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
      price: "от 549 ₽",
    },
    {
      image: "/src/assets/products/pizza_4.svg",
      title: "Чикен Сладкий Чили",
      subtitle: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
      price: "от 249 ₽",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="pizza">
          <div className="pizza-title">
            <h1>Пицца</h1>
          </div>
          <div className="pizza-row">
            {pizzaItems.map((el, index) => {
              return (
                <div className="pizza-items" key={index}>
                  <figure>
                    <img src={el.image} alt="IMAGE" />
                    <figcaption>
                      <h2>{el.title}</h2>
                    </figcaption>
                    <p>{el.subtitle}</p>
                    <div className="price-btn">
                      <button>Выбрать</button>
                      <p>{el.price}</p>
                    </div>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pizza;
