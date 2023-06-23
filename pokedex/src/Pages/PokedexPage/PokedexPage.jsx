
import { useContext } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../Context/GlobalContext";

function PokedexPage (){
    const {pokeList} = useContext(GlobalContext)
    return(
        <>
            {pokeList.map((pokemon)=>{
                return(
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                )
            })}      
        </>
    )
}
export default PokedexPage;