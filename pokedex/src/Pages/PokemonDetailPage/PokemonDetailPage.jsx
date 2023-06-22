import { Box, Image, Text } from "@chakra-ui/react";
import pokeBallBg from "../../assets/pokeballBackGroundDetail.png"
import pokeBallInside from "../../assets/pokeballInside.svg"


const PokemonDetailPage = () => {
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
        bgColor={"#BF9762"}
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
          src=""
          alt=""
          zIndex={1}
          position={"absolute"}
          top={"-8.25rem"}
          left={"67.75rem"}
          h={"16.875rem"}
          w={"16.875rem"}
        />
        <Box
          position={"absolute"}
          bgColor={"white"}
          w={"17.625rem"}
          h={"17.625rem"}
          left={"2.75rem"}
          top={"1.625rem"}
          borderRadius={"0.5rem"}
          border={"0.125rem solid white"}
        ></Box>

        <Box
          position={"absolute"}
          bgColor={"white"}
          w={"17.625rem"}
          h={"17.625rem"}
          left={"2.75rem"}
          top={"22.188rem"}
          borderRadius={"0.5rem"}
          border={"0.125rem solid white"}
        ></Box>

        <Box
          position={"absolute"}
          bgColor={"white"}
          w={"21.438rem"}
          h={"38.313rem"}
          left={"22.5rem"}
          top={"1.5rem"}
          borderRadius={"0.75rem"}
        ></Box>

        <Box
          position={"absolute"}
          bgColor={"white"}
          w={"18.25rem"}
          h={"28.313rem"}
          left={"48.188rem"}
          top={"11.5rem"}
          borderRadius={"0.5rem"}
        ></Box>

        <Text
          fontSize={"1rem"}
          fontFamily={"Inter"}
          position={"absolute"}
          top={"1.5rem"}
          left={"48.375rem"}
          color={"white"}
        >
          #16
        </Text>

        <Text
          fontSize={"3rem"}
          fontFamily={"Inter"}
          position={"absolute"}
          top={"2.438rem"}
          left={"48.188rem"}
          color={"white"}
        >
          Pidgey
        </Text>

        <Image
          position={"absolute"}
          w={"5.688rem"}
          h={"1.938rem"}
          top={"6.625rem"}
          left={"48.375rem"}
          gap={"1.063rem"}
          src=""
          alt=""
        />

        <Image
          position={"absolute"}
          w={"6.188rem"}
          h={"1.938rem"}
          top={"6.625rem"}
          left={"55.188rem"}
          gap={"1.063rem"}
          src=""
          alt=""
        />
      </Box>
    </Box>
  );
};

export default PokemonDetailPage;
