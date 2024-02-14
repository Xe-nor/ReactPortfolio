import React from "react";
import "./Portfolio.css";

const items = [
  {
    id: 1,
    title: "CampusKonnect",
    img: "../../Assets/CampusKonnect.jpg",
    desc: "A mobile application designed to help students and faculty members manage events at their college. The app is built using Flutter, a cross-platform mobile app development framework, and Firebase, a cloud-based database and backend service.",
  },
  {
    id: 2,
    title: "Hunt It Out",
    img: "../../Assets/huntItOut.jpg",
    desc: "A web-based interactive mystical-themed Riddle Game, designed to test your Soft skills. Created using HTML, CSS, and JS. The website uses Firebase as its backend database and authentication provider in order to allow tracking of players.",
  },
  {
    id: 3,
    title: "Gender Identifier",
    img: "../../Assets/Identifies.jpg",
    desc: "A Machine Learning Project which identifies a person's gender based on certain facial features.",
  },
];

const Single = ({ item }) => {
  return <section className="item-section">{item.title}</section>;
};

function Portfolio() {
  return (
    <div className="portfolio-container">
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Portfolio;
