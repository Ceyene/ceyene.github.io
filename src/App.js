//components
import {
  Hero,
  About,
  Knowledge,
  ProjectsContainer,
  Contact,
  Footer,
} from "./components";
//styles
import GlobalStyle, { GlobalStyles } from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
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
