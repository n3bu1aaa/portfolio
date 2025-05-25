import "./App.css";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="space-y-16 py-16">
      <Intro />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
