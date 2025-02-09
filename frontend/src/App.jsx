import { useState } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <Button colorScheme="blue" size="lg">Hello</Button>
    </ChakraProvider>
  );
}

export default App;