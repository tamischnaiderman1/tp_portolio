import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import styles from './portfolio.css';
import { FavoritosContext } from "../Context/FavoritosContext";
import Proyecto from "./Proyecto";

const Portfolio = () => {
  const [projects, setProjects] = useState([/*initialSkills*/])

  useEffect(() => {    
    const getProjecs = async () => {
      axios
        .get("Projects.json")
        .then((result) => {
          let prtoyectos = JSON.parse(JSON.stringify(result.data))
          prtoyectos = prtoyectos.map((p) =>
        ({...p, favorito: false})
        )
        setProjects(prtoyectos);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProjecs();      
  }, []);

  const {ExisteFavorito} = useContext(FavoritosContext);
  return (
    <div className="container">
      <div justify="center">
        {projects.map((project) => (
          <div key={project.id}>
            <Proyecto proyecto={project} esFavorito={ExisteFavorito(project.id)}/>
          </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
