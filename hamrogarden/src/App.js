import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Body />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
