import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import Magnet from "../Utility/magnet";

const textVariants = {
  initial: {
    opacity: 0,
    dev: { translateY: 0 }, // Initial position for .dev
    dash: { translateY: 0, translateX: -100 }, // Initial position for .dash
  },

  dev_hover: {
    translateY: -50, // Move .dev upwards by 50 pixels
    transition: {
      duration: 1,
    },
  },

  navbar_initial: {
    y: "-200%",
  },
  navbar: {
    y: "0%",
    transition: {
      delay: 4.3,
      duration: 1,
    },
  },
  logo: {
    opacity: 1,
    transition: {
      delay: 4.6,
      duration: 1,
    },
  },
  about: {
    opacity: 1,
    transition: {
      delay: 4.7,
      duration: 1,
    },
  },
  portfolio: {
    opacity: 1,
    transition: {
      delay: 4.9,
      duration: 1,
    },
  },
  skills: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 5.1,
      duration: 1,
    },
  },
  contact: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 5.3,
      duration: 1,
    },
  },
};

function Navbar() {
  const [isHovering, setIsHovering] = useState(false);

  const handleLinkClick = (href) => {
    window.location.href = href;
  };

  return (
    <motion.div
      id="navbar"
      variants={textVariants}
      initial="navbar_initial"
      animate="navbar"
    >
      <Magnet>
        <motion.h2
          id="logo"
          variants={textVariants}
          initial="initial"
          animate="logo"
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          Amarendra
          <div className="logo-effect">
            <motion.span className="dev">.dev</motion.span>
            <motion.span className="dash">.Dash</motion.span>
          </div>
        </motion.h2>
      </Magnet>

      <div className="links">
        <ul>
          <li>
            <Magnet>
              <div className="lis" onClick={() => handleLinkClick("#about")}>
                <motion.a
                  href="#about"
                  variants={textVariants}
                  initial="initial"
                  animate="about"
                >
                  About
                </motion.a>
              </div>
            </Magnet>
          </li>
          <Magnet>
            <li>
              <div className="lis" onClick={() => handleLinkClick("#my-work")}>
                <motion.a
                  href="#my-work"
                  variants={textVariants}
                  initial="initial"
                  animate="portfolio"
                >
                  Portfolio
                </motion.a>
              </div>
            </li>
          </Magnet>
          <Magnet>
            <li>
              <div className="lis" onClick={() => handleLinkClick("#skills")}>
                <motion.a
                  href="#skills"
                  variants={textVariants}
                  initial="initial"
                  animate="skills"
                >
                  Skills
                </motion.a>
              </div>
            </li>
          </Magnet>
          <Magnet>
            <li>
              <div className="lis" onClick={() => handleLinkClick("#contact")}>
                <motion.a
                  href="#contact"
                  variants={textVariants}
                  initial="initial"
                  animate="contact"
                >
                  Contact
                </motion.a>
              </div>
            </li>
          </Magnet>
        </ul>
      </div>
    </motion.div>
  );
}

export default Navbar;
