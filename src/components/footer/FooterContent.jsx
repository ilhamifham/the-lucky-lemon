import { Link } from "react-router";
import Logo from "../../assets/logo-footer.svg";

function FooterContent() {
  return (
    <div>
      <img src={Logo} alt="little lemon restaurant logo" width={80} height={80} />
      <div>
        <div>Navigations</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
          <li>
            <Link to="reservation">Reservation</Link>
          </li>
        </ul>
      </div>
      <div>
        <div>Contacts</div>
        <ul>
          <li>
            <address>Little City, Colombo</address>
          </li>
          <li>
            <a href="mailto:littlelemon@gmail.com">littlelemon@gmail.com</a>
          </li>
          <li>
            <a href="tel:+94701450713">070 145 0713</a>
          </li>
        </ul>
      </div>
      <div>
        <div>Socials</div>
        <ul>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterContent;
