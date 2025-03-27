import { useEffect, useState, useCallback } from "react";

export const useProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScrollPosition = () => {
      const newScrollWidth = Math.round(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          100
      );
      setScrollWidth(newScrollWidth);
    };

    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, [scrollWidth]);

  return [scrollWidth];
};
