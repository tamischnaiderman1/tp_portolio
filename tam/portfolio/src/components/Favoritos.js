import { useContext} from "react";
import { FavoritosContext } from "../Context/FavoritosContext";
import Proyecto from "./Proyecto";

const Favoritos = () => {
    const {favoritos:listFav, ExisteFavorito} = useContext(FavoritosContext);
    console.log(listFav)
    return (
        <>
                <h1 style={{textDecorationLine: 'underline'}}>Favorites</h1>
                {listFav.length >0  ?(
                    listFav.map((proy) =>
                    //console.log(proy)
                    <div key={proy.id}>
                        <Proyecto proyecto={proy} esFavorito={ExisteFavorito(proy.id)}/>
                    </div>    
                )):(
                    <>
                        <h2 className="text-center">Oops, you do not have any Favorite projects yet...</h2>
                    </>
                )
                }
        </>
    );
};

export default Favoritos;