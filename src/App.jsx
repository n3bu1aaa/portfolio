import "./App.css";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="parallax">
      <Intro />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
