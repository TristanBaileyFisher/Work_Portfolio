import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

export const HamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div className="absolute right-0 top-0">
        <motion.button
          onClick={() => setActive((pv) => !pv)}
          className="relative  h-20 w-20"
          animate={active ? "open" : "closed"}
        >
          <motion.span
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-1 w-10 bg-white rounded-full"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "135deg"],
                top: ["50%", "35%", "35%"],
              },
              closed: {
                rotate: ["135deg", "0deg", "0deg"],
                top: ["35%", "35%", "50%"],
              },
            }}
          ></motion.span>
          <motion.span
            style={{
              left: "50%",
              top: "35%",
              x: "-50%",
              y: "-50%",
            }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "135deg"],
                width: ["2.5rem", "2.5rem", "0.5rem"],
              },
              closed: {
                rotate: ["135deg", "0deg", "0deg"],
                width: ["0.5rem", "0.5rem", "2.5rem"],
              },
            }}
            className="absolute h-1 w-10 bg-white rounded-full"
          ></motion.span>
          <motion.span
            style={{
              left: "50%",
              top: "20%",
              x: "-50%",
              y: "-50%",
            }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-135deg"],
                top: ["20%", "35%", "35%"],
              },
              closed: {
                rotate: ["-135deg", "0deg", "0deg"],
                top: ["35%", "35%", "20%"],
              },
            }}
            className="absolute h-1 w-10 bg-white rounded-full"
          ></motion.span>
        </motion.button>
      </div>
    </MotionConfig>
  );
};
