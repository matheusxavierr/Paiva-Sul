import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg="whiteAlpha.900"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Container maxW="1200px">
        <Flex h="72px" align="center" justify="space-between">
          {/* LOGO */}
          <HStack spacing={3}>
            <Box w="28px" h="28px" bg="brand.500" borderRadius="sm" />
            <Link
              as={RouterLink}
              to="/"
              fontWeight="extrabold"
              fontSize="lg"
              color="gray.900"
            >
              PAIVA SUL
            </Link>
          </HStack>

          {/* MENU */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <NavItem to="/" label="Início" active={location.pathname === "/"} />
            <NavItem
              to="/quem-somos"
              label="Quem Somos"
              active={location.pathname === "/quem-somos"}
            />
            <NavItem to="/#servicos" label="Serviços" />
            <NavItem to="/#contato" label="Contato" />
          </HStack>

          {/* CTA */}
          <Button
            as={RouterLink}
            to="/#contato"
            colorScheme="brand"
            size="md"
            fontWeight="bold"
          >
            Fale Conosco
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

/* ITEM DO MENU */
function NavItem({ to, label, active }) {
  return (
    <Link
      as={RouterLink}
      to={to}
      fontWeight="semibold"
      color={active ? "brand.500" : "gray.700"}
      position="relative"
      _hover={{ color: "brand.500" }}
      _after={
        active
          ? {
              content: '""',
              position: "absolute",
              bottom: "-6px",
              left: "0",
              width: "100%",
              height: "2px",
              bg: "brand.500",
              borderRadius: "full",
            }
          : {}
      }
    >
      {label}
    </Link>
  );
}
