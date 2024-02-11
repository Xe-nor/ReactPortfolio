import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.css";
import ToggleButton from "./toggleButton/ToggleButton";
import Framer from "../Utility/magnet";

const variants = {
  initial: {
    scale: 0,
    x: -500,
  },
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      // initial="initial"
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Framer>
        <ToggleButton setOpen={setOpen} />
      </Framer>
    </motion.div>
  );
};

export default Sidebar;
