import Nav from './Nav';
import Logo from '../assets/Logo.svg';
import hamburgerMenu from '../assets/🦆 icon _hamburger menu.svg';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <button><img src={hamburgerMenu} alt="Menu"/></button>
            <Nav/>
        </header>
    );
}

export default Header;