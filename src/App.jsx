import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Projects/Project";
import Connect from "./pages/Connect/Connect";

function App() {
  const location = useLocation(); // Get the current route location

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="connect" element={<Connect />} />
      </Routes>
    </AnimatePresence>
  );
}

function RootApp() {
  return (
    <BrowserRouter basename="/PortFoilo/">
      <App />
    </BrowserRouter>
  );
}

export default RootApp;
