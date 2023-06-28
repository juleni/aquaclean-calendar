import { Box, Heading } from '@chakra-ui/react';
import { Logo } from '..//Logo';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Header() {
  return (
    <Box
      backgroundColor="#22A699"
      h="20"
      w="100%"
      display="flex"
      justifyContent="space-between"
      boxShadow="xl"
    >
      <Box p="5">
        <Box display="flex">
          <Logo h="20" pointerEvents="none" />
          <Heading as="h4" size="md" pl="4">
            Aquarium Cleaning Calendar
          </Heading>
        </Box>
      </Box>
      <Box p="5">
        <ColorModeSwitcher />
      </Box>
    </Box>
  );
}
