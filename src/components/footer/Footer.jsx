import "./Footer.css";
import FooterContent from "./FooterContent.jsx";
import { useCartContext } from "../../contexts/cartContext/useCartContext.js";
import { useLocation } from "react-router";
import { useWindowSize } from "../../hooks/useWindowSize.js";

function Footer() {
  const { cartItemsCount } = useCartContext();
  const { pathname } = useLocation();
  const screenSize = useWindowSize();
  const paddingBottom = {
    paddingBottom: "10.5rem",
  };
  const cartCheckout = cartItemsCount > 0 && pathname === "/cart" && screenSize < 768;

  return (
    <footer style={cartCheckout ? paddingBottom : null}>
      <FooterContent />
    </footer>
  );
}

export default Footer;
