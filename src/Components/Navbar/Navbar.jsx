import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import Magnet from "../Utility/magnet";

const textVariants = {
  // Variants definitions...
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
          <span className={`dev_${isHovering ? "invisible" : ""}`}>.dev</span>
          <span className={`dash_${isHovering ? "" : "invisible"}`}>.Dash</span>
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
