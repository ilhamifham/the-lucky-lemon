import { useState } from 'react';

import './Header.css';

import Logo from '../assets/logo.svg';
import hamburgerMenu from '../assets/hamburgerMenu.svg';

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggle = () => {
        setToggleMenu(!toggleMenu);
    }
    return (
        <header className='page_header'>
            <div className="header">
                <a className="header_logo" href="#home"><img src={Logo} alt="logo of little lemon restaurant" /></a>
                <button className="header_menu_button" onClick={toggle}><img src={hamburgerMenu} alt="icon of menu button" /></button>
                <nav className={toggleMenu ? "header_navigation collapse" : "header_navigation"}>
                    <ul>
                        <li>
                            <a className="header_navigation_link" onClick={toggle} href="#menu">Menu</a>
                        </li>
                        <li>
                            <a className="header_navigation_link" onClick={toggle} href="#reservation">Reservation</a>
                        </li>
                        <li>
                            <a className="header_navigation_link" onClick={toggle} href="#about">About</a>
                        </li>
                        <li>
                            <a className="header_navigation_link" onClick={toggle} href="#contact">Contact</a>
                        </li>
                        <li>
                            <a className="link-button" href="/">Log In</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;