import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button 
        onClick={() => scroll.scrollToTop({ duration: 500 })}
        className="fixed bottom-6 right-6 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
      >
        ↑
      </button>
    )
  );
};

export default BackToTop;
