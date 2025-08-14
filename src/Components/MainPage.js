import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Cover from "./Cover";
import Aboutme from "./Aboutme/Aboutme";
import Scrollpage from "./Scrollpage";
import AboutmeQnA from "./Aboutme/AboutmeQnA";
import Skills from "./Skills/Skills";
import { FaBars } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Projects from "./Projects/Projects";
import CloneCoding from "./Clone/CloneCoding";
import Close from "./Close";


const MainPage = () => {

  const handleClick = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }

  const navigate = useNavigate('');
  return (
    <div className="mainpage">
      <button
        className="btn-menu"
        onClick={() => { navigate('/menu') }}
      ><FaBars /></button>
      {/* <Route path="/" element={<Scrollpage/>}/> */}
      <Cover/>
      <Aboutme />
      <AboutmeQnA />
      <Skills />
      <Projects />
      <CloneCoding/>
      <Close/>
      <button
      onClick={handleClick} 
      className="btn-up"><FaArrowAltCircleUp /></button>
    </div>
  );
};

export default MainPage;