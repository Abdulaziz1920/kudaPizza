import "../sass/pages/_sauce.scss";

const Sauce = () => {
  const sauceItems = [
    {
      image: "/src/assets/products/sauces_3.svg",
      title: "Филадельфия кранч",
      price: "от 475 ₽",
    },
    {
      image: "/src/assets/products/sauces_2.svg",
      title: "Филадельфия крем-брюле",
      price: "от 395 ₽",
    },
    {
      image: "/src/assets/products/sauces_4.svg",
      title: "Супер Филадельфия",
      price: "от 425 ₽",
    },
    {
      image: "/src/assets/products/sauces_1.svg",
      title: "Тигр мама",
      price: "от 525 ₽",
    },
    {
      image: "/src/assets/products/sauces_2.svg",
      title: "Тигр мама",
      price: "от 525 ₽",
    },
    {
      image: "/src/assets/products/sauces_4.svg",
      title: "Супер Филадельфия",
      price: "от 425 ₽",
    },
    {
      image: "/src/assets/products/sauces_1.svg",
      title: "Филадельфия кранч",
      price: "от 475 ₽",
    },
    {
      image: "/src/assets/products/sauces_3.svg",
      title: "Филадельфия крем-брюле",
      price: "от 249 ₽",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="sauce">
          <div className="sauce-title">
            <h1>Соусы</h1>
          </div>
          <div className="sauce-row">
            {sauceItems.map((el, index) => {
              return (
                <div className="sauce-items" key={index}>
                  <figure>
                    <img src={el.image} alt="IMAGE" />
                    <figcaption>
                      <h2>{el.title}</h2>
                    </figcaption>
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

export default Sauce;
