import React from "react";
import Typewriter from "typewriter-effect";
import "./Intro.css";
import mouse from "../../Assets/scroll.png";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    y: 70,
  },
  hello: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4.8,
      duration: 1,
    },
  },
  typer: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 5,
      duration: 1.5,
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
  var gamer = `Gamer.`;
  var dev = `Web Developer.`;
  var prog = `Programmer.`;
  return (
    <div id="intro">
      <motion.h3
        variants={textVariants}
        initial="initial"
        animate="hello"
        className="intro-greetings"
      >
        Hello, my name is <span className="intro-emphasis">Amarendra Dash</span>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="typer"
          style={{ margin: 0 }}
        >
          I am a{" "}
          <span>
            <Typewriter
              options={{
                strings: [prog, dev, gamer],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.div>
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
  );
}

export default Intro;
