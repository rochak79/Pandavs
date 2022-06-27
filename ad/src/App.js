import logo from "./logo.svg";
import "./App.css";
import Mid from "./components/Mid";
import { BrowserRouter } from "react-router-dom";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Admin />
        {/* <Mid /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
