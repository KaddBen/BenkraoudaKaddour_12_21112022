import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Error from "./pages/Error/Error.js";
import Main from "./pages/Main/Main.js";
import "./components/Bar/ChartBar.css";
import "./components/Carbs/Carbs.css";
import "./components/ChartLine/ChartLine.css";
import "./components/Header/Header.css";
import "./components/RadarChart/RadarChart.css";
import "./components/RadialBar/RadialBar.css";
import "./components/VerticalLayout/VerticalLayout.css";
import "./components/Welcome/Welcome.css";
import "./pages/Home/Home.css";
import "./pages/Error/Error.css";
import "./pages/Main/Main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/main/:userId" element={<Main />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
