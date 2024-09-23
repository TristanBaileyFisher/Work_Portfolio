import React, { useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";

export const NavBar = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prevActive) => !prevActive);
  };

  const variants = {
    initial: { opacity: 0, y: "50%" },
    fadeIn: { opacity: 1, y: "0%" },
  };

  // Add event listener for visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      // If tab becomes visible again, restart the animation by toggling active state
      if (!document.hidden) {
        setActive((prevActive) => !prevActive);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div
        className="absolute"
        variants={variants}
        animate={isVisible ? "animate" : "initial"}
      >
        <div className="hidden md:block">
          <ul className="flex justify-between items-end">
            <li className="font-Drexs text-white text-2xl pl-5">
              <a href="#home">HOME</a>
            </li>
            <li className="font-Drexs text-white text-2xl pl-5">
              <a href="#bio">BIO</a>
            </li>
            <li className="font-Drexs text-white text-2xl pl-5">
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li className="font-Drexs text-white text-2xl pl-5">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute right-5 top-5 md:hidden">
        <motion.button
          onClick={toggleMenu}
          className="relative h-20 w-20"
          animate={active ? "open" : "closed"}
        >
          {/* Your motion spans */}
        </motion.button>
      </div>
      <motion.div
        animate={{
          opacity: active ? 1 : 0,
          display: active ? "block" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="block md:hidden absolute"
        onClick={toggleMenu}
      >
        {/* Your mobile menu items */}
      </motion.div>
    </MotionConfig>
  );
};
