import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import OverviewDream from "./Components/Overview/OverviewDream";
import OverviewSodam from "./Components/Overview/OverviewSodam";
import OverviewHello from "./Components/Overview/OverviewHello";
import OverviewQuiz from "./Components/Overview/OverviewQuiz";
import OverviewBlog from "./Components/Overview/OverviewBlog";
import OverviewFigma from "./Components/Overview/OverviewFigma";
import MainLayout from "./Components/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout/>}/>
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