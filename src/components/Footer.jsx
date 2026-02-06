import { Box, Container, Flex, HStack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import logo from "../assets/logo-header.png";

export default function Footer() {
  return (
    <Box bgGradient="linear(to-r, #0f172a, #020617)" py={6} color="gray.400">
      <Container maxW="1200px">
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <HStack>
                      <Link
                        as={RouterLink}
                        to="/"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          as="img"
                          src={logo}
                          alt="Paiva Sul"
                          w="200px"
                          maxW="200px"
                          objectFit="contain"
                          display="block"
                        />
                      </Link>
                    </HStack>

          <Text fontSize="sm">
            © 2024 PAIVA SUL Engenharia & Construção. Todos os direitos reservados.
          </Text>

          <HStack spacing={6}>
            <Link href="https://www.instagram.com/paivasul/" _hover={{ color: "brand.500" }}>
              Instagram
            </Link>
            <Link href="https://wa.me/554884000014" _hover={{ color: "brand.500" }}>
              WhatsApp
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
