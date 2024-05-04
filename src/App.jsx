import { useState } from "react";
import "./App.css";
import Header from "./components/navbar/Header";
import Home from "./components/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <div style={{ height: "100vH" }}></div>
    </>
  );
}

export default App;
