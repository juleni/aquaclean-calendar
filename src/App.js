import {
  Box,
  ChakraProvider,
  Code,
  Grid,
  Link,
  Text,
  theme,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        h="100%"
        textAlign="center"
        fontSize="xl"
        border="2px"
        m="3"
        borderRadius="lg"
        borderColor="#22A699"
        boxShadow="xl"
      >
        <Header />

        <Grid p={3}>
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
