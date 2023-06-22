import { useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { api } from "../../Api/AxiosConfig";
import { Grid } from "@chakra-ui/react";

function PokemonListPage() {
    const [pokemonList, setPokemonList] = useState([])
    useEffect(() => {
        api.get().then((response) => {
            Promise.all(response.data.results.map((response) => api.get(response.url))).then((response) => {
                setPokemonList(response.map((res) => res.data))
            })

        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <>
        <Grid
            templateColumns={"repeat(3,1fr)"}
            justifyItems={"center"}
        >
          {pokemonList.map((pokemon)=>{
            return(
                <PokemonCard 
                    key={pokemon.id}
                    pokemon={pokemon}
                />
            )
          })}
          </Grid>
        </>

    )
}
export default PokemonListPage;