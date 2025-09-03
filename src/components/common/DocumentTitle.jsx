import { useEffect } from "react";
import { useLocation } from "react-router";

function DocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/cart": "Cart | The Lucky Lemon",
      "/reservation": "Reservation | The Lucky Lemon",
    };

    document.title = titles[location.pathname] || "The Lucky Lemon";
  }, [location.pathname]);

  return null;
}

export default DocumentTitle;
