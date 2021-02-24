//components
import { Home, Footer } from "./components";
//styles
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
