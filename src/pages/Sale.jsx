import "../sass/pages/_sale.scss";

const Sale = () => {
  const saleItems = [
    {
      img: "/src/assets/image/action.svg",
      title: "3 средние пиццы от 999 рублей",
    },
    {
      img: "/src/assets/image/cashback.svg",
      title: "Кэшбек 10% на самовывоз (доставка)",
    },
    {
      img: "/src/assets/image/action.svg",
      title: "3 средние пиццы от 999 рублей",
    },
    {
      img: "/src/assets/image/cashback.svg",
      title: "Кэшбек 10% на самовывоз (доставка)",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="sale">
          {saleItems.map((el, index) => {
            return (
              <div className="sale-items" key={index}>
                <figure>
                  <img src={el.img} alt="" />
                  <figcaption>{el.title}</figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sale;
