import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { IconContext } from "react-icons";
import Magnet from "./magnet";

const GoTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <IconContext.Provider value={{ className: "arrowUp" }}>
        <Magnet>
          <button
            className="gotopbtn"
            data-aos="fade-up"
            data-aos-delay="700"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        </Magnet>
      </IconContext.Provider>
    </div>
  );
};

export default GoTopBtn;
