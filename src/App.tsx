import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Articles />
    </div>
  );
};

export default App;
