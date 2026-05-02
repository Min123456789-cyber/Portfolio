import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!isVisible) return null;

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1000 }}>
      <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
