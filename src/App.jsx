import "./App.css";
import About from "./Components/About/About.jsx";
import Intro from "./Components/Intro/Intro.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/SideMenu/Sidebar.jsx";
import ParticlesBg from "./Components/Utility/ParticlesBg.jsx";
import PreLoader from "./Components/Utility/PreLoader.jsx";
import { FaArrowUp } from "react-icons/fa";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="App">
      {GoTopBtn()}
      <PreLoader />
      <ParticlesBg />
      <Sidebar />
      <section>
        <div id="top" style={{ position: "absolute", top: 0 }}></div>
      </section>
      <section>
        <Navbar />
        <Intro />
      </section>
      <section>
        <About />
      </section>
      <section>Hello</section>
      <section>hellow 2</section>
    </div>
  );
}

export default App;

function GoTopBtn() {
  return (
    <div>
      <IconContext.Provider value={{ className: "arrowUp" }}>
        <a
          className="gotopbtn"
          data-aos="fade-up"
          data-aos-delay="700"
          href="#top"
        >
          <FaArrowUp />
        </a>
      </IconContext.Provider>
    </div>
  );
}
