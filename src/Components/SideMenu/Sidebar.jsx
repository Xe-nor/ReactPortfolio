import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.css";
import ToggleButton from "./toggleButton/ToggleButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    x: 300,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const burger = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.25,
            x: 300,
            ease: "power1.out",
          });
          setOpen(false);
        },
        onEnterBack: () => {
          gsap.to(burger.current, {
            scale: 0,
            duration: 0.25,
            x: 300,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  return (
    <motion.div className="menu">
      <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" ref={burger} variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
