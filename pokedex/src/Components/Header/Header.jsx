import { Container, PokedexButton } from "./headerStyle";
import logo from "../../assets/logo-pokemon.svg"
function Header (){
    return(
        <Container>
        <button >Todos Pokémons</button>
        <img src={logo} alt="logo-pokemon" />
        <PokedexButton>Pokédex</PokedexButton>
        </Container>
    )
}
export default Header;