import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  HStack,
  SlideFade,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box as="section" id="inicio" py={{ base: 16, md: 28 }}>
      <Container maxW="1280px" px={8}>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={16}
          alignItems="center"
        >
          <Stack spacing={8}>
            <SlideFade in offsetY="16px" transition={{ enter: { duration: 0.7, ease: "easeOut" } }}>
              <Heading
                fontSize={{ base: "4xl", md: "7xl" }}
                fontWeight="black"
                lineHeight="1"
              >
                Sua obra com a excelência da{" "}
                <Box as="span" color="brand.500">
                  PAIVA SUL
                </Box>
              </Heading>
            </SlideFade>

            <Text fontSize="xl" color="gray.600">
              Soluções completas em engenharia civil, elétrica e hidráulica. Transformamos seu projeto em realidade com segurança, qualidade e cumprimento rigoroso de prazos.
            </Text>

            <Stack direction="row" spacing={4}>
              <Button
                as="a"
                href="#servicos"
                size="lg"
                bg="brand.500"
                color="white"
                px={10}
                py={6}
                fontWeight="bold"
                _hover={{ bg: "brand.400" }}
              >
                Ver Serviços
              </Button>

              <Button
                as="a"
                href="#contato"
                size="lg"
                variant="outline"
                px={10}
                py={6}
                fontWeight="bold"
              >
                Falar com Consultor
              </Button>
            </Stack>
          </Stack>
          {/* IMAGEM */}
          <Box
            position="relative"
            w="100%"
            aspectRatio={{ base: "4 / 5", md: "1 / 1" }}
            overflow="hidden"
            borderRadius="3xl"
            boxShadow="0 32px 64px -16px rgba(0,0,0,0.1)"
          >
            
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-tr, brand.500Alpha.100, transparent)"
              zIndex={1}
            />

            <SlideFade in offsetY="24px" transition={{ enter: { duration: 1.2, ease: "easeOut" } }}>
              <Box
                as="img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABBLWVAXnoVy_agpz-0BZ9o1_nfukgnEL5ixLj5DHBeV8smEJZZIuxHVD3YsmAphRxSOYZLXcxA3ibXqL2McDMjOHhw_MkqFWzOVXuGUihKqr4OiV6YkuIpK9r4PJA7Ic4V-DliztHCPOenkzTwm2A8Duw71DP0TuhcDAyXkDX6sBMFLZtvr_N3xSvX-DG4HtiDxSU_F0sjRaXUfJkrmcgXp6Gtz9AxsPVXrepBOQe0VeHWK-vp38pNVs5Hhi8NwBFm1ZSwtm3xG4"
                alt="Equipe de construção trabalhando em um projeto moderno"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            

            <Box
              position="absolute"
              bottom={8}
              left={8}
              right={8}
              bg="whiteAlpha.900"
              backdropFilter="blur(12px)"
              p={6}
              borderRadius="2xl"
              border="1px solid"
              borderColor="whiteAlpha.300"
              zIndex={2}
            >
              <HStack spacing={4}>
                <Box
                  w={12}
                  h={12}
                  borderRadius="full"
                  bg="brand.500"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  <Box
                    fontFamily="'Material Symbols Outlined'"
                    fontSize="24px"
                    lineHeight="1"
                  >
                    trending_up
                  </Box>
                </Box>

                <Box lineHeight="1.2">
                  <Text
                    fontSize="small"
                    fontWeight="extrabold"
                    color="brand.500"
                    textTransform="uppercase"
                    letterSpacing="0.12em"

                  >
                    Compromisso
                  </Text>

                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    color="gray.800"
                  >
                    +250 Obras Entregues
                  </Text>
                  

                  <Text
                    fontSize="xs"
                    color="gray.500"
                  >
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </SlideFade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
