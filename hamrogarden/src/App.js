import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
