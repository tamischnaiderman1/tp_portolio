import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import avatar from "../avatar.png";
import styles from "./navbar.css";
import Portfolio from "./Portfolio";
import Contacto from "./Contacto";
import Favoritos from "./Favoritos";
import Home from "./Home";

const menuItems = [
  { list: <Home />, listText: "Home", listPath: "/home" },
  { list: <Portfolio />, listText: "Portfolio", listPath: "/portfolio" },
  { list: <Contacto />, listText: "Contacto", listPath: "/contacto" },
  { list: <Favoritos />, listText: "Contacto", listPath: "/contacto" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const sideList = () => (
    <div className={styles.menuSliderContainer}>
      <div className={styles.avatar2}>
        <img src={avatar} alt="Tami Schnaiderman" />
      </div>
      <ul>
        {menuItems.map((item, i) => (
          <li key={i} className={styles.listItem} onClick={() => setOpen(false)}>
            <Link to={item.listPath}>
              {item.list}
              <span>{item.listText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
    <div>
      <nav>
        <ul position="static" className="appbar">
        <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
        </ul>
        
      </nav>
      <p className="text">Tami Schnaiderman </p>
      <p className="text">Estudiante de Ort </p>

    </div>
    <Outlet />
    </>
  );
};

export default Navbar;
