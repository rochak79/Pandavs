import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Dashboard/Main";
import Addproduct from "./components/ProductDashboard/Addproduct";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Main />
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
