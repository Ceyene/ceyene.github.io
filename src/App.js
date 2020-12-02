//styles
import "./App.css";
//components
import Hero from "./components/Hero";
import About from "./components/About";
import Knowledge from "./components/Knowledge";
import ProjectsContainer from "./components/ProjectsContainer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Knowledge />
      <ProjectsContainer />
      <Contact />
    </div>
  );
}

export default App;
