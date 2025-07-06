import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "./App.css";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Project from "./components/Project";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/project" element={<Project/>}></Route>
        </Routes>
        <Footer/>
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
};

export default App;
