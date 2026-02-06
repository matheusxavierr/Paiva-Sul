import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";

const services = [
  {
    icon: "verified_user",
    title: "Qualidade Garantida",
    description:
      "Materiais certificados e mão de obra especializada em cada etapa.",
  },
  {
    icon: "schedule",
    title: "Pontualidade",
    description:
      "Cronogramas realistas e entrega rigorosamente no prazo estabelecido.",
  },
  {
    icon: "handyman",
    title: "Suporte Técnico",
    description:
      "Acompanhamento completo por engenheiros experientes.",
  },
];

export default function ServiceSection() {
  return (
    <Box
      bg="white"
      py={12}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Container maxW="1280px" px={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12}>
          {services.map((service) => (
            <Box
              key={service.title}
              display="flex"
              alignItems="center"
              gap={5}
            >
              {/* ÍCONE */}
              <Box
                w="56px"
                h="56px"
                flexShrink={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="2xl"
                bg="brand.50"
                color="brand.500"
              >
                <Text
                  className="material-symbols-outlined"
                  fontSize="28px"
                >
                  {service.icon}
                </Text>
              </Box>

              {/* TEXTO */}
              <Box>
                <Heading size="md" mb={1}>
                  {service.title}
                </Heading>

                <Text
                  fontSize="sm"
                  color="gray.500"
                  lineHeight="snug"
                >
                  {service.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
