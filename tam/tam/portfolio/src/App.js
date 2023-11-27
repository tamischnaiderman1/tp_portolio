import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";
import "./App.css";
import Index from "./components/index"
import FavoritosProvider from "./Context/FavoritosContext";
import Favoritos from "./components/Favoritos";

function App() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Index />}>
            <Route index element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
            <Route path="/contacto" element={<Contacto/>}></Route>
            <Route path="/favoritos" element={<Favoritos/>}></Route>
          </Route> 
        </Routes >
      </BrowserRouter>
    </FavoritosProvider>
  );
}

export default App;
