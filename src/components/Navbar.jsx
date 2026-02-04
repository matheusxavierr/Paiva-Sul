import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      position="sticky"
      top="0"
      zIndex="100"
      bg="whiteAlpha.900"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Container maxW="1200px">
        <Flex h="72px" align="center" justify="space-between">
          <HStack spacing={3}>
            <Box boxSize="32px" bg="brand.500" />
            <Text fontWeight="extrabold">PAIVA SUL</Text>
          </HStack>

          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {["Home", "Quem Somos", "Serviços", "Portfólio", "Contato"].map(
              (item) => (
                <Link
                  key={item}
                  fontWeight="semibold"
                  _hover={{ color: "brand.500" }}
                >
                  {item}
                </Link>
              )
            )}
          </HStack>

          <Button colorScheme="brand">Solicitar Orçamento</Button>
        </Flex>
      </Container>
    </Box>
  );
}
