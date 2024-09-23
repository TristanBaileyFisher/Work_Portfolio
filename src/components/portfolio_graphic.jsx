import React from "react";
import poster1 from "./gallery/poster1.png";
import poster2 from "./gallery/poster2.png";
import poster3 from "./gallery/poster3.png";
import poster4 from "./gallery/poster4.png";
import poster5 from "./gallery/poster5.png";
import poster6 from "./gallery/poster6.png";
import poster7 from "./gallery/poster7.png";
import poster8 from "./gallery/poster8.png";
import poster9 from "./gallery/poster8.png";
import poster10 from "./gallery/poster8.png";

const Carousel = () => {
  return (
    <div className="p-5 md:p-16 bg-black">
      <div>
        <h1 className="text-center text-3xl md:text-5xl font-Drexs text-white pt-10 ">
          PORTFOLIO
        </h1>
        <h2 className="text-center text-md md:text-3xl font-Drexs text-white ">
          GRAPHIC DESIGN
          <br />
          <br />
        </h2>
      </div>
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
        <a
          href={poster1}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster1} alt="Poster 1" />
        </a>
        <a
          href={poster2}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster2} alt="Poster 2" />
        </a>
        <a
          href={poster3}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster3} alt="Poster 3" />
        </a>
        <a
          href={poster4}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster4} alt="Poster 4" />
        </a>
        <a
          href={poster5}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster5} alt="Poster 5" />
        </a>
        <a
          href={poster6}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster6} alt="Poster 6" />
        </a>
        <a
          href={poster7}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster7} alt="Poster 7" />
        </a>
        <a
          href={poster8}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster8} alt="Poster 8" />
        </a>
        <a
          href={poster9}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster9} alt="Poster 8" />
        </a>
        <a
          href={poster10}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-150 ease-in-out duration-200 [&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8"
        >
          <img src={poster10} alt="Poster 8" />
        </a>
      </div>
    </div>
  );
};

export default Carousel;
