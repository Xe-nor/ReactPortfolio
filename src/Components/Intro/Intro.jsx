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
  hover: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

function Intro() {
  const intro = useRef(null);
  const container = useRef(null);
  const typer = useRef(null);
  const text = useRef(null);
  const [isHovering, setIsHovering] = React.useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovering && intro.current && typer.current && text.current) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        intro.current.style.transition = "all 0.3s linear";
        intro.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        typer.current.style.transform = `translateZ(2000px)`;
        text.current.style.transform = `translateZ(100px)`;
      }
    };
    const handleLeave = () => {
      if (intro.current && typer.current && text.current) {
        intro.current.style.transition = "all 1s ease";
        intro.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        typer.current.style.transform = "translateZ(0px)";
        text.current.style.transform = `translateZ(0px)`;
      }
    };

    if (container.current) {
      container.current.addEventListener("mousemove", handleMouseMove);
      container.current.addEventListener("mouseleave", handleLeave);

      return () => {
        container.current.removeEventListener("mousemove", handleMouseMove);
        container.current.removeEventListener("mouseleave", handleLeave);
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
    >
      <div className="container" ref={container}>
        <div
          className="card"
          ref={intro}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        >
          <motion.h3
            variants={textVariants}
            initial="initial"
            animate="hello"
            ref={text}
            className="intro-greetings"
          >
            Hello, my name is{" "}
            <span className="intro-emphasis">Amarendra Dash</span>
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="typer"
              style={{ margin: 0 }}
            >
              I am a{" "}
              <span ref={typer}>
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
      </div>
    </motion.div>
  );
}

export default Intro;
