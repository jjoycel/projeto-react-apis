import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import Header from "../Components/Header/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<PokemonListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:id" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
