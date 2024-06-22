import './Footer.css';

import Logo from '../assets/logo.svg';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div>
                    <p>Little Lemon Restaurant &copy; 2024. All rights reserved.</p>
                </div>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;