import { useEffect } from "react";
import { useLocation } from "react-router";

function DocumentTitle() {
    const location = useLocation();
    const titles = {
        "/cart": "Cart | Little Lemon Restaurant",
        "/reservation": "Reservation | Little Lemon Restaurant",
    };

    useEffect(() => {
        document.title = titles[location.pathname] || "Little Lemon Restaurant";
    }, [location.pathname]);

    return null;
}

export default DocumentTitle;