import { createContext, useState } from "react"


export const GlobalContext = createContext()

function GlobalContextProvider ({children}){

    const [pokeList, setPokeList] = useState([])

    const [pokemonGlobal, setPokemonGlobal] = useState({})

    function addPokemon(pokemon){
        setPokeList([...pokeList, pokemon])
    }

    function removePokemon(pokemon){
        setPokeList(pokeList.filter((pokemonFilter)=> pokemon.id !== pokemonFilter.id))
    }

    return(
        <GlobalContext.Provider 
            value={{
                pokeList,
                setPokeList,
                addPokemon,
                removePokemon,
                pokemonGlobal,
                setPokemonGlobal
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider