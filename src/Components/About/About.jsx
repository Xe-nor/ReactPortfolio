import React, { useState, useEffect, useRef } from "react";
import "./about.css";
import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: "-120%",
    y: 0,
  },
  animateRight: {
    x: "550%",
    transition: {
      repeat: Infinity,
      // repeatType: "mirror",
      duration: 10,
    },
  },
  animateLeft: {
    x: "-550%",
    transition: {
      repeat: Infinity,
      // repeatType: "mirror",
      duration: 10,
    },
  },
};

function About() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const prevScrollY = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const deltaY = currentScrollY - prevScrollY.current;

      if (deltaY > 0) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className="about-container">
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate={scrollDirection === "down" ? "animateRight" : "animateLeft"} // Slide right when scrolling down, left when scrolling up
      >
        <p>Writer content creator</p>
      </motion.div>
    </motion.div>
  );
}

export default About;
