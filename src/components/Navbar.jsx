import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
} from "@chakra-ui/react";
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import logo from "../assets/logo-header.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 30) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    };

    if (location.pathname === "/") {
      tryScroll();
    } else {
      navigate("/");
      requestAnimationFrame(tryScroll);
    }
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Container maxW="1200px">
        <Flex
          h="88px"
          align="center"
          justify="space-between"
        >
          {/* LOGO */}
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
                w="260px"
                maxW="280px"
                objectFit="contain"
                display="block"
              />
            </Link>
          </HStack>

          {/* MENU */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <NavItem
              to="/"
              label="Início"
              active={location.pathname === "/"}
            />

            <NavItem
              to="/quem-somos"
              label="Quem Somos"
              active={location.pathname === "/quem-somos"}
            />

            <NavItem
              to="/servicos"
              label="Serviços"
              active={location.pathname === "/servicos"}
            />

            <NavAction
              label="Contato"
              onClick={() => scrollToSection("contato")}
            />
          </HStack>

          {/* CTA */}
          <Button
            onClick={() => scrollToSection("contato")}
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

/* LINK DE ROTA */
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
              left: 0,
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

/* BOTÃO DE AÇÃO (SCROLL) */
function NavAction({ label, onClick }) {
  return (
    <Link
      as="button"
      onClick={onClick}
      fontWeight="semibold"
      color="gray.700"
      _hover={{ color: "brand.500" }}
    >
      {label}
    </Link>
  );
}
