import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./Intro.css";
import mouse from "../../Assets/scroll.png";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: "-200%",
  },
  intro: {
    y: "0%",
    transition: {
      delay: 3.8,
      duration: 1,
    },
  },
  hello: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4.2,
      duration: 1,
    },
  },
  typer: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4,
      duration: 1,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 20,
    transition: {
      delay: 10,
      duration: 4,
      repeat: Infinity,
    },
  },
};

function Intro() {
  const card = useRef(null);
  const container = useRef(null);
  const text = useRef(null);
  const [isHovering, setIsHovering] = React.useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovering && card.current && text) {
        let xAxis = -(window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
        card.current.style.transition = "all 0.3s linear";
        card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        text.current.style.transform = "translateZ(150px)";
      }
    };
    const handleLeave = () => {
      if (card.current) {
        card.current.style.transition = "all 1s ease";
        text.current.style.transition = "all 1s ease";
        card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        text.current.style.transform = "translateZ(0px)";
      }
    };

    if (container.current) {
      const currentContainer = container.current; // Create a variable to hold the ref value
      currentContainer.addEventListener("mousemove", handleMouseMove);
      currentContainer.addEventListener("mouseleave", handleLeave);

      return () => {
        currentContainer.removeEventListener("mousemove", handleMouseMove); // Use the variable in the cleanup function
        currentContainer.removeEventListener("mouseleave", handleLeave); // Use the variable in the cleanup function
      };
    }
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  var gamer = `Gamer.`;
  var dev = `Web Developer.`;
  var prog = `Programmer.`;

  return (
    <motion.div
      id="intro"
      variants={textVariants}
      initial="initial"
      animate="intro"
      ref={container}
    >
      <div
        className="card"
        ref={card}
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
      >
        <motion.h3
          variants={textVariants}
          initial="initial"
          animate="hello"
          className="intro-greetings"
          ref={text}
        >
          Hello, my name is{" "}
          <span className="intro-emphasis">Amarendra Dash</span>
          {/* <motion.div
            variants={textVariants}
            initial="initial"
            animate="typer"
            style={{
              margin: 0,
            }}
          >
            I am a{" "}
            <motion.span variants={textVariants} whileHover="hoverText">
              <Typewriter
                options={{
                  strings: [prog, dev, gamer],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.span>
          </motion.div> */}
        </motion.h3>

        <div className="mouse">
          <a href="#about">
            <motion.img
              variants={textVariants}
              animate="scrollBtn"
              src={mouse}
              alt=""
              className="ScrollSymb"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Intro;
