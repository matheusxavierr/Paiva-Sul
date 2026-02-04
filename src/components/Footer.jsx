import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bgGradient="linear(to-r, #0f172a, #020617)"
      color="gray.400"
      py={6}
    >
      <Container maxW="1200px">
        <Flex
          align="center"
          justify="space-between"
          wrap="wrap"
          gap={4}
        >
          {/* LOGO */}
          <HStack spacing={3}>
            <Box
              w="28px"
              h="28px"
              bg="brand.500"
              borderRadius="sm"
            />
            <Text fontWeight="bold" color="white">
              PAIVA SUL
            </Text>
          </HStack>

          {/* COPYRIGHT */}
          <Text fontSize="sm" textAlign="center">
            © 2026 PAIVA SUL Engenharia & Construção. Todos os direitos reservados.
          </Text>

          {/* REDES SOCIAIS (TEXTO) */}
          <HStack spacing={6}>
            <Link
              href="https://instagram.com"
              target="_blank"
              fontSize="sm"
              _hover={{ color: "brand.500" }}
            >
              Instagram
            </Link>

            <Link
              href="https://wa.me/5551999999999"
              target="_blank"
              fontSize="sm"
              _hover={{ color: "brand.500" }}
            >
              WhatsApp
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
