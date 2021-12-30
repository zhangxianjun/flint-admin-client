import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider><Button colorScheme='blue'>Button</Button></ChakraProvider>
    
    </div>
  );
}

export default App;
