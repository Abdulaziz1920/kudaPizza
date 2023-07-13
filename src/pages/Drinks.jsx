import "../sass/pages/_beverages.scss";

const Drinks = () => {
  const beveragesItems = [
    {
      id: 1,
      image: "/src/assets/products/beverages_1.svg",
      title: "Филадельфия кранч",
      subtitle:
        "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
      price: "от 475 ₽",
    },
    {
      id: 2,
      image: "/src/assets/products/beverages_2.svg",
      title: "Филадельфия крем-брюле",
      subtitle: "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
      price: "от 395 ₽",
    },
    {
      id: 3,
      image: "/src/assets/products/beverages_3.svg",
      title: "Супер Филадельфия",
      subtitle: "Действительно много семги, сливочный сыр, огурец, рис, н...",
      price: "от 425 ₽",
    },
    {
      id: 4,
      image: "/src/assets/products/beverages_4.svg",
      title: "Тигр мама",
      subtitle: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
      price: "от 525 ₽",
    },
    {
      id: 5,
      image: "/src/assets/products/beverages_5.svg",
      title: "Тигр мама",
      subtitle: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
      price: "от 525 ₽",
    },
    {
      id: 6,
      image: "/src/assets/products/beverages_6.svg",
      title: "Супер Филадельфия",
      subtitle: "Действительно много семги, сливочный сыр, огурец, рис, н...",
      price: "от 425 ₽",
    },
    {
      id: 7,
      image: "/src/assets/products/beverages_2.svg",
      title: "Филадельфия кранч",
      subtitle:
        "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
      price: "от 475 ₽",
    },
    {
      id: 8,
      image: "/src/assets/products/beverages_4.svg",
      title: "Филадельфия крем-брюле",
      subtitle: "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
      price: "от 249 ₽",
    },
  ];
  const handleAddCard = (id) => {
    console.log(id);
  };
  return (
    <section>
      <div className="container">
        <div className="beverages">
          <div className="beverages-title">
            <h1>Напитки</h1>
          </div>
          <div className="beverages-row">
            {beveragesItems.map((el, index) => {
              return (
                <div className="beverages-items" key={index}>
                  <figure>
                    <img src={el.image} alt="IMAGE" />
                    <figcaption>
                      <h2>{el.title}</h2>
                    </figcaption>
                    <p>{el.subtitle}</p>
                    <div className="price-btn">
                      <button onClick={() => handleAddCard(el.id)}>
                        Выбрать
                      </button>
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

export default Drinks;
