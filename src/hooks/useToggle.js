import { useState, useEffect } from "react";

export function useToggle() {
    const [toggle, setToggle] = useState(false);

    function handleToggle(mode) {
        setToggle(mode);
    }

    useEffect(() => {
        const removeStyleAttribute = document.body.removeAttribute("style");

        if (toggle) {
            document.body.style.overflow = "hidden";
        } else {
            removeStyleAttribute;
        }

        return () => { removeStyleAttribute };
    }, [toggle]);

    return [toggle, handleToggle];

}