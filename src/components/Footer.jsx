import { Box, Container, Flex, HStack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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
            © 2021 PAIVA SUL Engenharia & Construção. Todos os direitos reservados.
          </Text>

          <HStack spacing={6}>
            <Link
              href="https://www.instagram.com/paivasul/"
              isExternal
              _hover={{ color: "brand.500", transform: "scale(1.1)" }}
              transition="0.2s"
            >
              <FaInstagram size={20} />
            </Link>

            <Link
              href="https://wa.me/554884000014"
              isExternal
              _hover={{ color: "brand.500", transform: "scale(1.1)" }}
              transition="0.2s"
            >
              <FaWhatsapp size={20} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
