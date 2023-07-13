import "../sass/pages/_sushi.scss";

const Sushi = () => {
  const sushiItems = [
    {
      image: "/src/assets/products/sushi_4.svg",
      title: "Филадельфия кранч",
      subtitle:
        "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
      price: "от 475 ₽",
    },
    {
      image: "/src/assets/products/sushi_3.svg",
      title: "Филадельфия крем-брюле",
      subtitle: "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
      price: "от 395 ₽",
    },
    {
      image: "/src/assets/products/sushi_1.svg",
      title: "Супер Филадельфия",
      subtitle: "Действительно много семги, сливочный сыр, огурец, рис, н...",
      price: "от 425 ₽",
    },
    {
      image: "/src/assets/products/sushi_2.svg",
      title: "Тигр мама",
      subtitle: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
      price: "от 525 ₽",
    },
    {
      image: "/src/assets/products/sushi_1.svg",
      title: "Тигр мама",
      subtitle: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
      price: "от 525 ₽",
    },
    {
      image: "/src/assets/products/sushi_2.svg",
      title: "Супер Филадельфия",
      subtitle: "Действительно много семги, сливочный сыр, огурец, рис, н...",
      price: "от 425 ₽",
    },
    {
      image: "/src/assets/products/sushi_3.svg",
      title: "Филадельфия кранч",
      subtitle:
        "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
      price: "от 475 ₽",
    },
    {
      image: "/src/assets/products/sushi_4.svg",
      title: "Филадельфия крем-брюле",
      subtitle: "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
      price: "от 249 ₽",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="sushi">
          <div className="sushi-title">
            <h1>Суши</h1>
          </div>
          <div className="sushi-row">
            {sushiItems.map((el, index) => {
              return (
                <div className="sushi-items" key={index}>
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

export default Sushi;
