import { useRef } from "react";

export function useScroll() {
  const scrollRef = useRef(null);

  function scrollRight() {
    const element = scrollRef.current;

    if (!element) return;

    element.scrollBy({ left: Math.min(320, element.scrollWidth - element.clientWidth - element.scrollLeft), top: 0, behavior: "smooth" });
  }

  function scrollLeft() {
    const element = scrollRef.current;

    if (!element) return;

    element.scrollBy({ left: -Math.min(320, element.scrollLeft), top: 0, behavior: "smooth" });
  }

  return [scrollRef, scrollRight, scrollLeft];
}
