import { useContext } from "react";
import { FavoritosContext } from "../Context/FavoritosContext";

const Proyecto = ({proyecto, esFavorito}) => {
const {manejarFavorito} = useContext(FavoritosContext);
console.log(proyecto)

return(
        <div sm={8} md={4}>  
            <div className="cardContainer">
            <div className="card1">
            <div className="costado-der">
                <label className="ui-like">
                
                {   esFavorito ?
                    <input type="checkbox" defaultChecked onClick={()=> manejarFavorito(proyecto)}/>
                :
                <input type="checkbox" onClick={()=> manejarFavorito(proyecto)}/>
                }
                <div className="like">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                    <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                    <g className="svg" id="SVGRepo_iconCarrier">
                        <path  d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z" ></path>
                    </g>
                    </svg>
                </div>
                </label>
                </div>
            <img alt="" className= "card" 
                src={proyecto.image}/>
                <div>
                <p variant="h5" >
                    {proyecto.name}
                </p>
                <p variant="body2" color="textSecondary">
                    {proyecto.description}
                </p>
                <a href={proyecto.linkgithub} target="_blank" rel="noopener noreferrer" key={proyecto.linkgithub}>
                    <button>
                    <span>
                        IR
                    </span>
                    </button>
                </a>
                </div> 
            </div>
        
            </div>
        </div>
    )
}

export default Proyecto