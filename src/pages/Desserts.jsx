import "../sass/pages/_desserts.scss";

const Desserts = () => {
  const dessertsItems = [
    {
      image: "/src/assets/products/dessert_4.svg",
      title: "Филадельфия кранч",
      subtitle:
        "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
      price: "от 475 ₽",
    },
    {
      image: "/src/assets/products/dessert_3.svg",
      title: "Филадельфия крем-брюле",
      subtitle: "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
      price: "от 395 ₽",
    },
    {
      image: "/src/assets/products/dessert_1.svg",
      title: "Супер Филадельфия",
      subtitle: "Действительно много семги, сливочный сыр, огурец, рис, н...",
      price: "от 425 ₽",
    },
    {
      image: "/src/assets/products/dessert_2.svg",
      title: "Тигр мама",
      subtitle: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
      price: "от 525 ₽",
    },
    {
      image: "/src/assets/products/dessert_1.svg",
      title: "Тигр мама",
      subtitle: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
      price: "от 525 ₽",
    },
    {
      image: "/src/assets/products/dessert_5.svg",
      title: "Супер Филадельфия",
      subtitle: "Действительно много семги, сливочный сыр, огурец, рис, н...",
      price: "от 425 ₽",
    },
    {
      image: "/src/assets/products/dessert_3.svg",
      title: "Филадельфия кранч",
      subtitle:
        "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
      price: "от 475 ₽",
    },
    {
      image: "/src/assets/products/dessert_6.svg",
      title: "Филадельфия крем-брюле",
      subtitle: "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
      price: "от 249 ₽",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="desserts">
          <div className="desserts-title">
            <h1>Десерты</h1>
          </div>
          <div className="desserts-row">
            {dessertsItems.map((el, index) => {
              return (
                <div className="desserts-items" key={index}>
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

export default Desserts;
