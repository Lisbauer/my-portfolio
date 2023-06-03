import "./App.css";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Certificate from "./components/Certificate/Certificate";
import Projects from "./components/Projects/Projects";
import Art from "./components/Art/Art";
import Intro from "./components/Intro/Intro";
import Rocket from "./components/Rocket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/rocket.css";

function App() {
  return (
    <Router>
      <LanguageProvider>
      <div className="App">
        <div id="intro">
          <Routes>
            <Route path="/intro" element={<Intro />} />
          </Routes>
        </div>
        <div className="bg" id="home">
          <div id="navbar">
            <Routes>
              <Route path="/" element={<Navbar />} />
            </Routes>
          </div>
          
          <div id="homepage">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </div>

          <div className="toTop">
            <Routes>
              <Route path="/" element={<Rocket />} />
            </Routes>
          </div>

          <div id="aboutme">
            <Routes>
              <Route path="/" element={<AboutMe />} />
            </Routes>
          </div>

          <div id="skills">
            <Routes>
              <Route path="/" element={<Skills />} />
            </Routes>
          </div>

          <div id="projects">
            <Routes>
              <Route path="/" element={<Projects />} />
            </Routes>
          </div>

          <div id="art">
            <Routes>
              <Route path="/" element={<Art />} />
            </Routes>
          </div>

          <div id="certificate">
            <Routes>
              <Route path="/" element={<Certificate />} />
            </Routes>
          </div>

          <div id="contact">
            <Routes>
              <Route path="/" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
