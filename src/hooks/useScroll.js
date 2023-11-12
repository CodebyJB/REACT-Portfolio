import { useEffect, useState } from "react";

function useScroll() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    function checkScroll() {
      const scrolledDown = window.scrollY > scrollPos;
      scrollPos = window.scrollY;
      setIsScrolledDown(scrolledDown);
    }

    let scrollPos = 0;

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return isScrolledDown;
}

export default useScroll;
