import {
    Box,
    Button,
    Flex,
    Image,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import pokeTypes from "../../Anexos/types"
import pokeColor from "../../Anexos/themes"
import pokeBola from "../../Assets/fundo-pokebola.svg"
import { detailsPage } from "../../Router/Coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


function PokemonCard({
    pokemon,
}) {
    const navigate = useNavigate()

    const { addPokemon, pokeList, removePokemon } = useContext(GlobalContext)
    console.log(addPokemon)

    const location = useLocation()

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='10%'
            backdropBlur='7px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayTwo />)

    return (
        <>
            <Box
                position={"relative"}
                w={"27.5rem"}
                h={"16.438rem"}
            >
                <Image
                    src={pokemon.sprites.other["official-artwork"].front_default} alt="imagem do pokemon"
                    position={"absolute"}
                    w={"12.063rem"}
                    h={"12.063rem"}
                    zIndex={1}
                    right={0}
                />
                <Box
                    position={"absolute"}
                    bottom={0}
                    w={"27.5rem"}
                    h={"13.125rem"}
                    borderRadius={"0.8rem"}
                    color={"white"}
                    bgColor={pokeColor.colors.backgroundCard[pokemon?.types[0].type.name]}
                >
                    <Text
                        position={"absolute"}
                        fontSize={"1rem"}
                        top={"1.563rem"}
                        left={"1.438rem"}

                    ># {pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</Text>
                    <Text
                        position={"absolute"}
                        fontSize={"2rem"}
                        top={"2.5rem"}
                        left={"1.438rem"}
                        textTransform={"capitalize"}

                    >{pokemon.name}
                    </Text>
                    <Flex
                        position={"absolute"}
                        top={"5.563rem"}
                        left={"1.438rem"}

                    >
                        {
                            pokemon.types.map((type, i) => {
                                return <Image
                                    key={i}
                                    src={pokeTypes[type.type.name]}
                                />

                            })
                        }
                    </Flex>
                    <Button
                        position={"absolute"}
                        left={"1rem"}
                        bottom={"1rem"}
                        w={"4.5rem"}
                        h={"2rem"}
                        background={"transparent"}
                        color={"white"}
                        textDecoration={"underline"}
                        onClick={() => { detailsPage(navigate, pokemon.id) }}
                    >
                        Detalhes
                    </Button>
                    <Button
                        position={"absolute"}
                        right={"2rem"}
                        bottom={"1rem"}
                        w={"9.125rem"}
                        borderRadius={"0.5rem"}
                        fontSize={"1rem"}
                        bgColor={"#ffffff"}
                        onClick={() => {
                            addPokemon(pokemon)
                            onOpen()
                        }}
                        zIndex={2}
                        hidden={pokeList.find((pokemonFinding) => pokemonFinding.id === pokemon.id)}
                    >Capturar!
                    </Button>
                    <Button
                        position={"absolute"}
                        right={"2rem"}
                        bottom={"1rem"}
                        w={"9.125rem"}
                        borderRadius={"0.5rem"}
                        fontSize={"1rem"}
                        bgColor={"#ffffff"}
                        onClick={() => {
                            removePokemon(pokemon)
                        }}
                        zIndex={2}
                        hidden={location.pathname !== "/pokedex"}
                    >Remover!
                    </Button>
                    <Image src={pokeBola} alt="pokebola"
                        position={"absolute"}
                        right={0}
                        top={0}
                    />



                </Box>
            </Box>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Custom backdrop filters!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}
export default PokemonCard;