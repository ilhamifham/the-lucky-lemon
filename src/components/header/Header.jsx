import "./Header.css";
import { Link } from "react-router";
import Logo from "/src/assets/logo-header.svg";
import LinkCart from "./LinkCart.jsx";

function Header() {
    return (
        <header>
            <div>
                <Link to="/" className="link__logo">
                    <img src={Logo} alt="little lemon restaurant logo" width={40} height={40} />
                </Link>
                <LinkCart />
            </div>
        </header>
    );
}

export default Header;
