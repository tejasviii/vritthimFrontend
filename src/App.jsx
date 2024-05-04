import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <div style={{ height: "100vH" }}></div>
    </>
  );
}

export default App;
