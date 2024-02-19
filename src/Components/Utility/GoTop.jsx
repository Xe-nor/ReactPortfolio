import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { IconContext } from "react-icons";
import RoundedButton from "./buttons";

const GoTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconContext.Provider value={{ className: "arrowUp" }}>
      <button
        className="gotopbtn"
        data-aos="fade-up"
        data-aos-delay="700"
        onClick={scrollToTop}
      >
        <RoundedButton className="toparrow">
          <FaArrowUp />
        </RoundedButton>
      </button>
    </IconContext.Provider>
  );
};

export default GoTopBtn;
