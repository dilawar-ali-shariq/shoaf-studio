import "./App.css";
import About from "./Components/About";
import CircleDesign1 from "./Components/CircleDesign1";
import Footer from "./Components/Footer";
import HalfCirclesDesign from "./Components/HalfCirclesDesign";
import Home from "./Components/Home";
import LineDesign from "./Components/LineDesign";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <LineDesign />
      <CircleDesign1 />
      <Services />
      <Portfolio />
      <HalfCirclesDesign />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
