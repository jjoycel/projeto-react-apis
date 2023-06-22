import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Router from './Router/Routes';


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
    
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
    
  )
}

export default App
