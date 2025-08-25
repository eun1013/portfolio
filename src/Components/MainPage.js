import { useNavigate } from "react-router-dom";
import Cover from "./Cover";
import Aboutme from "./Aboutme/Aboutme";
import AboutmeQnA from "./Aboutme/AboutmeQnA";
import Skills from "./Skills/Skills";
import { FaBars } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Projects from "./Projects/Projects";
import CloneCoding from "./Clone/CloneCoding";
import Close from "./Close";
import Practical from "./Practical";
import { useEffect } from "react";


const MainPage = ({ scrollTarget }) => {

    useEffect(() => {
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTarget]);

  const navigate = useNavigate('');
  return (
    <div className="mainpage">
      <div id="home">
      <Cover/>
      </div>
      <div id="aboutme">
      <Aboutme />
      <AboutmeQnA />
      <Skills />
      </div>
      <div id="project">
      <Projects />
      </div>
      <div id="clone">
      <CloneCoding/>
      </div>
      <div id="practical">
      <Practical/>
      </div>
      <Close/>
    </div>
  );
};

export default MainPage;