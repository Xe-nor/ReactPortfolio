import "./App.css";
import React, { useEffect } from "react";
import About from "./Components/About/About.jsx";
import Intro from "./Components/Intro/Intro.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/SideMenu/Sidebar.jsx";
import PreLoader from "./Components/Utility/PreLoader.jsx";
import GoTopBtn from "./Components/Utility/GoTop";
import Portfolio from "./Components/Portfolio/Portfolio";
import ParticlesComponent from "./Components/Utility/ParticlesBg.jsx";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts or updates
  }, []);

  return (
    <div className="App">
      <PreLoader />
      <ParticlesComponent />
      <GoTopBtn />
      <Sidebar />
      <div className="content">
        <section id="Homepage-container"></section>
        <Navbar />
        <Intro />
        <section>
          <About />
        </section>
        <section>
          <Portfolio />
        </section>
      </div>
    </div>
  );
}

export default App;
