import { useState, useEffect } from "react";

export function useWindowSize() {
    const [screenSize, setScreenSize] = useState(() => window.innerWidth);

    useEffect(function () {
        function handleScreenSize() {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener("resize", handleScreenSize);

        return () => { window.removeEventListener("resize", handleScreenSize) };
    }, [screenSize]);

    return screenSize;
}