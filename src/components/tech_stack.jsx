import React, { useState, useEffect } from "react";
import IMAGES from "./icons/Images";
import { motion } from "framer-motion";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    hidden: { x: "-100%" }, // Initial state: hidden to the left
    visible: { x: "0%" }, // Visible state: fully opaque and at original position
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById("tech-stack").offsetTop;

      if (scrollPosition > elementPosition && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      id="tech-stack"
      className="w-screen min-h-screen md:min-h-full flex-col  items-center justify-center bg-black relative"
    >
      <div className="h-full w-32 absolute  left-12">
        <div className="bg-white w-[1px] h-full"></div>
      </div>

      <div>
        <h1 className="text-center text-3xl md:text-5xl font-Drexs text-white pt-10 ">
          TECHSTACK
        </h1>
        <h2 className="text-center text-md md:text-3xl font-Drexs text-white ">
          WHAT I'M MOST FAMILIAR WITH
          <br />
          <br />
        </h2>
      </div>

      <div className=" flex-col items-center  md:grid grid-cols-3 gap-x-11 justify-center w-full pl-20 px-10">
        <div className="flex py-5">
          <img
            src={IMAGES.java}
            alt="Java"
            className="w-11 h-auto flex-shrink-0"
          />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-1/2 h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">
              JAVASCRIPT
            </div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.css} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-9/12 h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">CSS</div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.html} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-5/6 h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">HTML</div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.react} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-8/12 h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">REACT</div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.tailwind} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-10/12 h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">
              TAILWIND
            </div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.csharp} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-1/2 h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">
              C SHARP
            </div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.python} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-1/2 h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">PYTHON</div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.figma} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-10/12 h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">FIGMA</div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.java} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-full h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">
              BLENDER
            </div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.ableton} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-full h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">
              ABLETON
            </div>
          </div>
        </div>
        <div className="flex py-5">
          <img src={IMAGES.photoshop} alt="Java" className="w-11 h-auto" />

          <div className="ml-4 w-screen">
            <div className="bg-gray-500 w-full h-[.15rem] rounded-full overflow-hidden">
              <motion.div
                initial="hidden" // Initial animation state
                whileInView={"visible"} // Animation state controlled by isVisible state
                variants={variants} // Variants defined above
                transition={{ ease: "easeInOut", duration: 1 }} // Transition settings
                className="bg-white w-full h-[.15rem] rounded-full items-start"
              ></motion.div>
            </div>
            <div className="text-white mt-1 select-none font-Drexs">
              PHOTOSHOP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
