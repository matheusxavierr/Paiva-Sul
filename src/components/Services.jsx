import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const services = [
  {
    title: "Construção Civil",
    desc:
      "Do alicerce ao acabamento, construímos residências e galpões comerciais com alto padrão técnico.",
    icon: "home_work",
  },
  {
    title: "Reformas Premium",
    desc:
      "Transformamos ambientes existentes em espaços modernos e funcionais, sem dores de cabeça.",
    icon: "format_paint",
  },
  {
    title: "Gestão de Obras",
    desc:
      "Gerenciamento completo de cronogramas, suprimentos e mão de obra para máxima eficiência.",
    icon: "engineering",
  },
];

export default function Services() {
  return (
    <Box py={20}>
      <Container maxW="1200px">
        <Text
          textAlign="center"
          color="brand.500"
          fontWeight="bold"
          textTransform="uppercase"
          mb={2}
        >
          Nossas Especialidades
        </Text>

        <Heading textAlign="center" mb={12}>
          O Que Fazemos de Melhor
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {services.map((service) => (
            <Box
              key={service.title}
              p={8}
              bg="white"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              transition="all 0.2s ease"
              _hover={{
                borderColor: "brand.500",
                transform: "translateY(-4px)",
                shadow: "lg",
              }}
            >
              {/* ÍCONE */}
              <Box
                w="56px"
                h="56px"
                bg="brand.50"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={6}
              >
                <Text
                  className="material-symbols-outlined"
                  fontSize="28px"
                  color="brand.500"
                >
                  {service.icon}
                </Text>
              </Box>

              <VStack align="start" spacing={3}>
                <Heading size="md">{service.title}</Heading>
                <Text color="gray.600">{service.desc}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
