import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Values from "../components/Values";

export default function About() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Box py={{ base: 20, md: 28 }} bg="gray.50">
        <Container maxW="1200px">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={16}
            alignItems="center"
          >
            {/* IMAGEM */}
            <Box
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              transition="all 0.4s ease"
              _hover={{ transform: "scale(1.02)" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7gxyMZ6uCzqN9wTm95GkAm5IdAO_y_Wwp-WQqqq7q7tlRqa5Y9s065OSuXlLVj8cX6fg4gu60dDsgWcoAKRvs85oz0OUPEGKsd8uy8grECDv-a2pCF11GI9i1DuZrhI876sODjWzGMP--YZF83eGnVkYwxq_nNvlI4f1J3niynPA44ivv-URNIXQVLMgTDHqKWc8okmIhxukxtqCWkhUJY-LPr1cxSC9k7OY54QPN_jJxeTd-6SoPVKwGaZ2Ys8IO8Hi4t4cUSpQ"
                alt="Equipe em obra"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>

            <Stack spacing={6}>
              <Text
                textTransform="uppercase"
                fontWeight="bold"
                color="brand.500"
                letterSpacing="wider"
              >
                Sobre Nós
              </Text>

              <Heading fontSize={{ base: "3xl", md: "4xl" }}>
                Transformando visões em
                <br /> realidade sólida.
              </Heading>

              <Text color="gray.600" fontSize="lg">
                A PAIVA SUL é referência em engenharia e construção no sul do
                país. Fundada com o propósito de elevar o padrão da construção
                civil, focamos em excelência técnica, inovação e
                sustentabilidade.
              </Text>

              <Text color="gray.600">
                Atuamos em projetos residenciais, comerciais e industriais,
                sempre priorizando a segurança, a eficiência e a satisfação do
                cliente em cada metro quadrado construído.
              </Text>

              <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                <Button colorScheme="brand" size="lg">
                  Nossa História
                </Button>
                <Button
                  variant="outline"
                  colorScheme="brand"
                  size="lg"
                >
                  Ver Portfólio
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Container>
      </Box>

      <Values />

      {/* STATS REUTILIZADO */}
      <Box py={20} bg="brand.500">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} color="white">
            <StatBlock title="Anos de Experiência" value="20+" subtitle="Solidez" />
            <StatBlock title="Obras Entregues" value="350+" subtitle="Qualidade" />
            <StatBlock title="Colaboradores" value="150+" subtitle="Equipe" />
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

function StatBlock({ title, value, subtitle }) {
  return (
    <Stack
      align="center"
      spacing={3}
      p={8}
      borderRadius="xl"
      bg="whiteAlpha.200"
      backdropFilter="blur(6px)"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-6px)" }}
    >
      <Text fontSize="sm" textTransform="uppercase" opacity={0.8}>
        {title}
      </Text>
      <Heading fontSize="5xl">{value}</Heading>
      <Text fontSize="sm" color="green.200">
        + {subtitle}
      </Text>
    </Stack>
  );
}
