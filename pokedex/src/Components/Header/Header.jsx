
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-pokemon.svg"
import PokedexPage from "../../Pages/PokedexPage/PokedexPage";
import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { home, pokedexNavigate } from "../../Router/Coordinator";

function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Grid
            h={"10rem"}
            templateColumns={"repeat(16,1fr)"}
            alignItems={"center"}
            bgColor={"#ffffff"}
        >
            <GridItem
                colStart={2}
                colEnd={7}
            >
                {location.pathname !== "/" &&
                    <Button
                        bgColor={"transparent"}
                        textDecoration={"underline"}
                        fontWeight={"bolder"}
                        fontSize={"1rem"}
                        onClick={() => { home(navigate) }}
                    >
                        &lt;Todos Pokémons
                    </Button>
                }
            </GridItem>
            <GridItem
                colStart={7}
                colEnd={12}
            >
                <Image src={logo} alt="logo pokemon" />
            </GridItem>
            <GridItem
                colStart={13}
                colEnd={16}
            >
                {location.pathname === "/" &&
                    <Button
                        bgColor={"#33A4F5"}
                        color={"white"}
                        w={"19.938rem"}
                        h={"4.625rem"}
                        fontSize={"1.5rem"}
                        onClick={() => { pokedexNavigate(navigate) }}
                    >
                        Pokédex
                    </Button>
                }
            </GridItem>
        </Grid>
    )
}
export default Header;