import "./App.css";

import React from "react";
import LandingPage from "./components/landing_page.jsx";
import TechStack from "./components/tech_stack.jsx";
import Bio from "./components/bio.jsx";
import Projects from "./components/portfolio_projects.jsx";
import Graphics from "./components/portfolio_graphic.jsx";
import WebsiteDesign from "./components/website_design.jsx";
import ContactMe from "./components/contact_me.jsx";

function App() {
  return (
    <div className="max-w-screen overflow-hidden">
      <LandingPage />
      <Bio />
      <TechStack />
      <Projects />
      <Graphics />
      <WebsiteDesign />
      <ContactMe />
    </div>
  );
}

export default App;
