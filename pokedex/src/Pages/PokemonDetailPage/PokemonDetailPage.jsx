import { Box, Flex, Image, Progress, Text } from "@chakra-ui/react";
import pokeBallBg from "../../assets/pokeballBackGroundDetail.png"
import pokeBallInside from "../../assets/pokeballInside.svg"
import { useContext, useEffect, useState } from "react";
import { api } from "../../Api/AxiosConfig";
import { useParams } from "react-router-dom";
import pokeColor from "../../Anexos/themes"
import types from "../../Anexos/types";
import { GlobalContext } from "../../Context/GlobalContext";


const PokemonDetailPage = () => {
    let moveCount = 0
    let total = 0
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState({})
    const {setPokemonGlobal} = useContext(GlobalContext)
    useEffect(() => {
        api.get("/" + params.id).then((response) => {
            setPokemon(response.data)
            setPokemonGlobal(response.data)
            setLoading(false)
        }).catch((error) => { console.log(error) })
    }, [])
    if (loading) {
        return (<p>Carregando...</p>)
    }
    if(!loading) {
        for(const stat of pokemon.stats){
            total += stat.base_stat
        }
    }
    
    return (
        <Box position={"relative"}>
            <Text
                fontSize={"3rem"}
                fontFamily={"Poppins"}
                position={"absolute"}
                top={"3rem"}
                left={"2.5rem"}
                color={"white"}
                fontWeight={700}
            >
                Detalhes
            </Text>

            <Image
                position={"absolute"}
                w={"56.812rem"}
                h={"56.812rem"}
                top={"-3.125rem"}
                left={"50%"}
                transform={"translate(-50%)"}
                src={pokeBallBg}
                alt="pokebola fundo"
            />

            <Box
                position={"absolute"}
                w={"86.821rem"}
                h={"41.438rem"}
                left={"50%"}
                top={"11.75rem"}
                transform={"translate(-50%)"}
                bgColor={pokeColor.colors.backgroundCard[pokemon?.types[0].type.name]}
                borderRadius={"2.368rem"}
            >
                <Image
                    position={"absolute"}
                    top={0}
                    right={0}
                    h={"41.438rem"}
                    src={pokeBallInside}
                    alt="pokebola fundo"
                />

                <Image
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt="imagem do pokemon"
                    zIndex={1}
                    position={"absolute"}
                    top={"-8.25rem"}
                    left={"67.75rem"}
                    h={"16.875rem"}
                    w={"16.875rem"}
                />
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"absolute"}
                    bgColor={"white"}
                    w={"17.625rem"}
                    h={"17.625rem"}
                    left={"2.75rem"}
                    top={"1.625rem"}
                    borderRadius={"0.5rem"}
                    border={"0.125rem solid white"}
                ><Image src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
                    w={"50%"}
                    h={"50%"}
                    /></Flex>

                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"absolute"}
                    bgColor={"white"}
                    w={"17.625rem"}
                    h={"17.625rem"}
                    left={"2.75rem"}
                    top={"22.188rem"}
                    borderRadius={"0.5rem"}
                    border={"0.125rem solid white"}
                ><Image src={pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}
                    w={"50%"}
                    h={"50%"}
                    /></Flex>

                <Box
                    position={"absolute"}
                    bgColor={"white"}
                    w={"21.438rem"}
                    h={"38.313rem"}
                    left={"22.5rem"}
                    top={"1.5rem"}
                    borderRadius={"0.75rem"}
                >
                    {pokemon.stats.map((stat)=>{
                        return(
                            <>
                                <Text>
                                    {stat.stat.name}
                                    {stat.base_stat}
                                </Text>
                                <Progress
                                    value={stat.base_stat}
                                />
                            </>
                        )
                    })}
                    <Text>
                        Total: {total}
                    </Text>
                </Box>

                <Box
                    position={"absolute"}
                    bgColor={"white"}
                    w={"18.25rem"}
                    h={"28.313rem"}
                    left={"48.188rem"}
                    top={"11.5rem"}
                    borderRadius={"0.5rem"}
                >
                    {pokemon.moves.map((move, i)=>{
                        if(moveCount < 5){
                            moveCount++;
                            return(
                             <Text key={i}>{move.move.name}</Text>
                     ) }
                    })}
                
                </Box>

                <Text
                    fontSize={"1rem"}
                    fontFamily={"Inter"}
                    position={"absolute"}
                    top={"1.5rem"}
                    left={"48.375rem"}
                    color={"white"}
                >
                    # {pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
                </Text>

                <Text
                    fontSize={"3rem"}
                    fontFamily={"Inter"}
                    position={"absolute"}
                    top={"2.438rem"}
                    left={"48.188rem"}
                    color={"white"}
                    textTransform={"capitalize"}
                >
                    {pokemon.name}
                </Text>

                <Flex
                    gap={"0.3rem"}
                    position={"absolute"}
                    left={"48.375rem"}
                    top={"6.625rem"}
                >
                    {pokemon.types.map((type, i) => {
                        return <Image key={i} src={types[type.type.name]} />;
                    })}
                </Flex>
            </Box>
        </Box>
    );
};

export default PokemonDetailPage;
