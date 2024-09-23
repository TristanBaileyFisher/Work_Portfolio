import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../assets/images/profile_image.png";

const LandingPage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "SOFTWARE DEVELOPER",
    "WEB DEVELOPER",
    "GRAPHIC DESIGNER",
    "MUSIC PRODUCER",
    "DRAG QUEEN",
  ];
  const transitionDuration = 0.5; // Duration of transition animation
  const intervalDuration = 3000; // Duration between role changes (in milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalDuration);

    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div className="max-w-screen h-screen overflow-hidden bg-black relative">
      <div className="h-screen flex flex-col justify-center items-center -mt-32">
        <h1 className="text-white md:text-7xl lg:text-9xl font-Drexs select-none">
          TRISTAN
        </h1>
        <AnimatePresence mode="wait">
          <motion.h2
            key={roles[roleIndex]} // Unique key based on content
            className="text-gray-400 md:text-3xl lg:text-6xl font-Drexs select-none absolute  transform top-[54%] -translate-x-1/2 -translate-y-1/2 md:-mt-32 lg:-mt-28"
            initial={{ opacity: 0, x: "250%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-250%" }}
            transition={{ duration: transitionDuration, ease: "easeInOut" }}
          >
            {roles[roleIndex]}
          </motion.h2>
        </AnimatePresence>
        <div className="h-full w-32 absolute  left-12"></div>
        <img
          src={Image}
          alt="Your Alt Text Here"
          className="h-auto md:w-60 lg:w-96 absolute bottom-20" // Adjust the dimensions as needed
        />
      </div>
    </div>
  );
};

export default LandingPage;
