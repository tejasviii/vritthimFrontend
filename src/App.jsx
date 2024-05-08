import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";

import Nav from "./components/navbar/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Home />
      <div style={{ height: "100vH" }}></div>
    </>
  );
}

export default App;
