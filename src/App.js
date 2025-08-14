import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./Components/MainPage";
import MenuBar from "./Components/MenuBar";
import OverviewDream from "./Components/Overview/OverviewDream";
import OverviewSodam from "./Components/Overview/OverviewSodam";
import OverviewHello from "./Components/Overview/OverviewHello";
import OverviewQuiz from "./Components/Overview/OverviewQuiz";
import OverviewBlog from "./Components/Overview/OverviewBlog";
import OverviewFigma from "./Components/Overview/OverviewFigma";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="menu" element={<MenuBar/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/overviewDream" element={<OverviewDream/>}/>
        <Route path="/overviewSodam" element={<OverviewSodam/>}/>
        <Route path="/overviewHello" element={<OverviewHello/>}/>
        <Route path="/overviewQuiz" element={<OverviewQuiz/>}/>
        <Route path="/overviewBlog" element={<OverviewBlog/>}/>
        <Route path="/overviewFigma" element={<OverviewFigma/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;