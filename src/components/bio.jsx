import React from "react";

const Bio = () => {
  return (
    <div className="w-screen h-full  flex items-center md:items-start justify-center bg-black">
      <div className="h-full w-32 absolute  left-12">
        <div className="bg-white w-[1px] h-full"></div>
      </div>

      <div className="  mt-64 md:mt-0 w-full md:pt-10">
        {" "}
        {/* Added mt-20 for margin-top */}
        <div>
          <h1 className="text-center text-3xl md:text-5xl font-Drexs text-white pt-10 ">
            BIO
          </h1>
          <h2 className="text-center text-md md:text-3xl font-Drexs text-white ">
            GET TO KNOW ME
            <br />
            <br />
          </h2>
        </div>
        <p className="sm:text-left lg:text-center  text-xs md:text-sm font-Duru text-white pl-20 lg:pr-10 md:w-[418px] lg:text-xl lg:w-screen">
          Based in Kirikiroa, New Zealand, I’m currently completing my third and
          final year of my degree in IT.
          <br />
          <br />
          I’m a returning student who is currently shifting from the education
          industry towards software and web development.
          <br />
          <br />
          I have a degree in Classical music, Post graduate in secondary school
          teaching, and soon will have a degree in Information Technology
          <br />
          <br />
          I grew up in Thames and moved to Kirikiroa back in 2014.
          <br />
          <br />
          I love anything creative, Food, music production and Drag.
          <br />
          <br />
          I am the Co-founder of a small business called Drag on Vic, my partner
          and I revived the drag scene here in Kirikiriroa and it has been
          thriving for 6 years going strong.
          <br />
          <br />
          I am a self taught graphic designer with over 14 years of learning and
          experience using Blender and Photoshop
          <br />
          <br />
          Thank you for reading, I hope you enjoy my portfolio.
          <br />
          <br /> <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Bio;
