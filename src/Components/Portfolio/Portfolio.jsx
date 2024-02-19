import React, { useRef } from "react";
import "./Portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import campusKonnect from "../../Assets/CampusKonnect.jpg";
import huntItOut from "../../Assets/huntItOut.jpg";
import identifies from "../../Assets/Identifies.jpg";
import Rounded from "../Utility/buttons";
import Magnet from "../Utility/magnet";

const items = [
  {
    id: 1,
    title: "CampusKonnect",
    img: campusKonnect,
    desc: "A mobile application designed to help students and faculty members manage events at their college. The app is built using Flutter, a cross-platform mobile app development framework, and Firebase, a cloud-based database and backend service.",
  },
  {
    id: 2,
    title: "Hunt It Out",
    img: huntItOut,
    desc: "A web-based interactive mystical-themed Riddle Game, designed to test your Soft skills. Created using HTML, CSS, and JS. The website uses Firebase as its backend database and authentication provider in order to allow tracking of players.",
  },
  {
    id: 3,
    title: "Gender Identifier",
    img: identifies,
    desc: "A Machine Learning Project which identifies a person's gender based on certain facial features.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="item-section">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Rounded className="butn">
              <span className="item-btn">See Demo</span>
            </Rounded>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio-container" ref={ref}>
      <div className="progress">
        <motion.h1>Featured</motion.h1>

        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>

      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Portfolio;
