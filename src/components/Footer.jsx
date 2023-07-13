import "../sass/layout/_footer.scss";
import logo from "../assets/favicons/logo(40x40).svg"
import phone from "../assets/icons/phone.svg"
import location from "../assets/icons/location.svg"
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
            <div className="footer-logo">
                <figure>
                    <img src={logo} alt="Pizza" />
                    <figcaption>Куда Пицца</figcaption>
                </figure>
                <p>© Copyright 2021 — Куда Пицца</p>
            </div>
            <div className="footer-respecting">
                <strong>Куда пицца</strong>
                    <ul>
                        <li className="nav-item"><a className="nav-link" href="/w">О компании</a></li>
                        <li className="nav-item"><a className="nav-link" href="/w">Пользовательское соглашение</a></li>
                        <li className="nav-item"><a className="nav-link" href="/w">Условия гарантии</a></li>
                    </ul>
            </div>
            <div className="footer-assist">
                <strong>Помощь</strong>
                    <ul>
                        <li className="nav-item"><a className="nav-link" href="/w">Ресторан</a></li>
                        <li className="nav-item"><a className="nav-link" href="/w">Контакты</a></li>
                        <li className="nav-item"><a className="nav-link" href="/w">Поддержка</a></li>
                        <li className="nav-item"><a className="nav-link" href="/w">Отследить заказ</a></li>
                    </ul>
            </div>
            <div className="footer-contact">
                <strong>Контакты</strong>
                    <ul>
                        <li className="nav-item"><a className="nav-link" href="tel:+99890074950"><img src={phone} alt="Phone Number" />+998(90)007-49-50</a></li>
                        <li className="nav-item"><a target="blank" className="nav-link" href="https://goo.gl/maps/TnBetW8QE2SEswmv5"><img width={'20px'} src={location} alt="Location" />Москва, ул. Юных Ленинцев, д.99</a></li>
                    </ul>
                    <div className="social">
                        <figure>
                            <img src={facebook} alt="Facebook" />
                            <figcaption><a href="https://www.facebook.com/">Facebook</a></figcaption>
                        </figure>
                        <figure>
                            <img src={instagram} alt="Instagram" />
                            <figcaption><a href="https://www.instagram.com/">Instagram</a></figcaption>
                        </figure>
                    </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
