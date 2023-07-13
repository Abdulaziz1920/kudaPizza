import logo from "../assets/favicons/logo(32x32).svg";
import basket from "../assets/icons/basket(24x24).svg";
import "../sass/layout/_header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <figure>
              <img src={logo} alt="Pizza" />
              <figcaption>Куда Пицца</figcaption>
            </figure>
          </div>
          <div className="header-basket">
            <button className="base-btn">
              <img src={basket} alt="Basket" />0 ₽
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
