//components
import Hero from "./components/Hero";
import About from "./components/About";
import Knowledge from "./components/Knowledge";
import ProjectsContainer from "./components/ProjectsContainer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Knowledge />
      <ProjectsContainer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
