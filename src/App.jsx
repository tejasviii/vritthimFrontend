import "./App.css";
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './themeContext';
import Home from "./components/MainComp/Home";
import Nav from "./components/MainComp/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Services from "./components/MainComp/Services/Services";
import Contact from "./components/MainComp/Contact/Contact";


function App() {
  const { theme,toggleTheme } = useContext(ThemeContext);

  // Apply the theme to the document body
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Nav theme={toggleTheme}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
