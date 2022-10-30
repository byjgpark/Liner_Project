import { useEffect, useState } from "react";

// Refer to https://www.youtube.com/watch?v=UvWMlNZuQTc&t=232s
export const useScrollPosition = () => {

  // Hook : to hold the scrolling position
  const [scrollPosition, setScrollPosition] = useState(0);


  // UseEffect : getting scrolling position with hook & EventListener
  // unmount EventListner from the window, so the EvenListener will not listen
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition
};
