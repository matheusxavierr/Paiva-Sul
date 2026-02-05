import { Box, Container, Flex, HStack, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bgGradient="linear(to-r, #0f172a, #020617)" py={6} color="gray.400">
      <Container maxW="1200px">
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <HStack>
            <Box w="28px" h="28px" bg="brand.500" />
            <Text fontWeight="bold" color="white">PAIVA SUL</Text>
          </HStack>

          <Text fontSize="sm">
            © 2024 PAIVA SUL Engenharia & Construção. Todos os direitos reservados.
          </Text>

          <HStack spacing={6}>
            <Link href="https://instagram.com" _hover={{ color: "brand.500" }}>
              Instagram
            </Link>
            <Link href="https://wa.me/5548999999999" _hover={{ color: "brand.500" }}>
              WhatsApp
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
