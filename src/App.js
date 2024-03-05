import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import WebServicePage from "./pages/WebServicePage";
import AppServicePage from "./pages/AppServicePage";
import FreeConsulatingPage from "./pages/FreeConsulatingPage";
import { useEffect, useState } from "react";

function App() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Router>
        <Navbar scrollToTop={scrollToTop} />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/service">
            <Route path="web" element={<WebServicePage />} />
            <Route path="app" element={<AppServicePage />} />
            <Route path="free" element={<FreeConsulatingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
