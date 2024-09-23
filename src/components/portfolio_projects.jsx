import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Card = ({ id, title, description, githubLink }) => {
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    hidden: { opacity: 0, x: "-25%" }, // Initial state: hidden to the left
    visible: { opacity: 1, x: "0%" }, // Visible state: fully opaque and at original position
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById(id).offsetTop;

      if (scrollPosition > elementPosition && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id, isVisible]);

  return (
    <div id={id} className="pl-20 pr-10 md:pr-0 md:pl-0 py-5">
      <motion.div
        initial="hidden" // Initial animation state
        animate={isVisible ? "visible" : "hidden"} // Animation state controlled by isVisible state
        variants={variants} // Variants defined above
        transition={{ ease: "easeInOut", duration: 0.5 }} // Transition settings
        className="relative max-w-xl w-full p-6  bg-zinc-800 shadow-lg text-white"
      >
        <h1 className="text-[16px] font-Drexs mb-4">{title}</h1>
        <p className="text-[11px] mb-6 font-Duru">{description}</p>
        <a
          href={githubLink}
          className="absolute bottom-0 right-0 inline-block py-2 px-4 bg-zinc-900 text-white rounded-tl-3xl text[11px] font-Drexs transition duration-100 hover:bg-zinc-600"
        >
          GITHUB LINK
        </a>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-screen min-h-screen md:min-h-full flex-col items-center justify-center bg-black relative">
      <div className="h-full w-32 absolute left-12 ">
        <div className="bg-white w-[1px] h-full"></div>
      </div>

      <div>
        <h1 className="text-center text-3xl md:text-5xl font-Drexs text-white pt-10 ">
          PORTFORLIO
        </h1>
        <h2 className="text-center text-md md:text-3xl font-Drexs text-white ">
          SOFTWARE PROJECTS{" "}
        </h2>
      </div>

      <div className="flex-col md:grid grid-cols-3 gap-10 pl-0 md:pl-20 pr-0 md:pr-10">
        <Card
          id="card1"
          title="DOUBLY LINKED LIST IN C#"
          description="Completed Doubly Linked list program with a working UI terminal and multiple user functions."
          githubLink="https://github.com/TristanBaileyFisher/Doubly_Linked_list_CSharp"
        />

        <Card
          id="card2"
          title="FOUR LEVEL MINI-GAME IN GODOT"
          description="Completed minigame in godot 4 to get introduced to game development"
          githubLink="https://github.com/TristanBaileyFisher/Godot_game_2"
        />
        <Card
          id="card3"
          title="BST - AVL LIST C-SHARP"
          description="BST-AVL list with a working UI terminal and multiple user functions."
          githubLink="https://github.com/TristanBaileyFisher/BST_AVL_List_CSharp"
        />
        <Card
          id="card4"
          title="ANDROID STUDIO APP DEV ASSIGNMENT TASKS"
          description="A number of Application Development assessment tasks."
          githubLink="https://github.com/TristanBaileyFisher/AppDev_2023-projects"
        />
        <Card
          id="card5"
          title="GAME DEV PROJECT (WIP) GODOT"
          description="A primitive first step into learning more about game engines."
          githubLink="https://github.com/TristanBaileyFisher/Godot_game_1"
        />
        <Card
          id="card6"
          title="STATIC WEBSITE"
          description="A first iteration at a full website for my small business."
          githubLink="https://venerable-cascaron-b7a3a9.netlify.app/#home"
        />
        <Card
          id="card7"
          title="SOFTWARE UNIT TESTING IN C#"
          description="Introduction into Visual Studio Code Unit Testing."
          githubLink="https://github.com/TristanBaileyFisher/Software_Testing_C1"
        />
      </div>
    </div>
  );
};

export default Projects;
