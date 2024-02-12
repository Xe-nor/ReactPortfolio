// "use client";
import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { useSpring, useMotionValue } from "framer-motion";
import Framer from "../Utility/magnet";

const textVariants = {
  initial: {
    opacity: 0,
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
  const logoSpringConfig = {
    stiffness: 1000, // Adjust stiffness as needed
    damping: 40, // Adjust damping as needed
  };

  // Create motion values for logo x and y positions
  const logoX = useMotionValue(0);
  const logoY = useMotionValue(0);

  // Apply spring animation to logo x and y positions
  const logoXSpring = useSpring(logoX, logoSpringConfig);
  const logoYSpring = useSpring(logoY, logoSpringConfig);

  const handleLinkClick = (href) => {
    window.location.href = href;
  };

  return (
    <div id="navbar">
      <Framer>
        <div>
          {/* Apply motion values and animation configuration to the logo */}
          <motion.h2
            id="logo"
            variants={textVariants}
            initial="initial"
            animate="logo"
            drag // Enable dragging
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
            dragElastic={1} // Constrain dragging within the parent container
            style={{
              x: logoXSpring, // Apply spring animation to x position
              y: logoYSpring, // Apply spring animation to y position
            }}
          >
            Amarendra<span className="dev">.dev</span>
          </motion.h2>
        </div>
      </Framer>

      <div className="links">
        <ul>
          <li>
            <Framer>
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
            </Framer>
          </li>
          <Framer>
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
          </Framer>
          <Framer>
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
          </Framer>
          <Framer>
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
          </Framer>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
