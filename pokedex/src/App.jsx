import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Router from './Router/Routes';
import GlobalContextProvider from "./Context/GlobalContext";


const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#5E5E5E",
      },
    },
  },
});



function App() {





  return (
    <GlobalContextProvider>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </GlobalContextProvider>

  )
}

export default App
