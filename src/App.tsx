import { Button, useColorMode } from "@chakra-ui/react"

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
  )
}

export default App