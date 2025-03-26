import { useEffect, useState, useCallback } from "react";

export const useProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleScrollPosition = useCallback(() => {
    return setScrollPosition({
      ...scrollPosition,
      y: Math.round(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          100
      ),
      x: Math.round(
        (window.scrollX / (document.body.offsetWidth - window.innerWidth)) * 100
      ),
    });
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, [handleScrollPosition]);

  return scrollPosition;
};
