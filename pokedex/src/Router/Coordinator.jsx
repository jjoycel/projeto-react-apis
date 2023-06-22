export function home (navigate){
    navigate("/")
}

export function pokedexNavigate(navigate){
    navigate("/pokedex")
}

export function detailsPage(navigate, id){
    navigate("/details/"+id)
}