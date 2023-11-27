import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <>
        <Portfolio/>
        <Footer/>
    </>
  );
};

export default Home;
