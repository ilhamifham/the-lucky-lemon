import { useRef } from "react";

export function useScroll() {
    const scrollRef = useRef(null);

    function scrollRight() {
        scrollRef.current.scrollBy({ left: Math.min(320, (scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth) - scrollRef.current?.scrollLeft), top: 0, behavior: "smooth" })
    }

    function scrollLeft() {
        scrollRef.current.scrollBy({ left: -Math.min(320, scrollRef.current?.scrollLeft), top: 0, behavior: "smooth" })
    }

    return [scrollRef, scrollRight, scrollLeft];

}