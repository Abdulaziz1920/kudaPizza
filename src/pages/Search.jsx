import "../sass/pages/_search.scss";

const Search = () => {
  return (
    <section>
      <div className="container">
        <div className="search">
          <div className="input-label">
            <p>Проверить адрес доставки</p>
          </div>
          <div className="input">
            <input type="text" placeholder="Адрес" />
          </div>
          <div className="input-btn">
            <button>Проверить</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
