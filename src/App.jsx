import "./App.css";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="space-y-16 py-16">
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
