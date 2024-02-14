import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import Magnet from "../Utility/magnet";

const textVariants = {
  initial: {
    opacity: 0,
  },
  navbar: {
    opacity: 1,
    transition: {
      delay: 3.8,
      duration: 1,
    },
  },
  logo: {
    opacity: 1,
    transition: {
      delay: 4.2,
      duration: 1,
    },
  },
  about: {
    opacity: 1,
    transition: {
      delay: 4.5,
      duration: 1,
    },
  },
  portfolio: {
    opacity: 1,
    transition: {
      delay: 4.63,
      duration: 1,
    },
  },
  skills: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4.76,
      duration: 1,
    },
  },
  contact: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4.89,
      duration: 1,
    },
  },
};

function Navbar() {
  const handleLinkClick = (href) => {
    window.location.href = href;
  };

  return (
    <motion.div
      id="navbar"
      variants={textVariants}
      initial="initial"
      animate="navbar"
    >
      <Magnet>
        <motion.h2
          id="logo"
          variants={textVariants}
          initial="initial"
          animate="logo"
        >
          Amarendra<span className="dev">.dev</span>
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
