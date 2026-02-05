import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const values = [
  {
    title: "Segurança",
    desc: "Protocolos rigorosos e treinamento contínuo para proteção total nas obras.",
    icon: "shield",
  },
  {
    title: "Inovação",
    desc: "Tecnologia de ponta e métodos modernos para eficiência máxima.",
    icon: "lightbulb",
  },
  {
    title: "Integridade",
    desc: "Transparência absoluta em cada etapa do projeto.",
    icon: "handshake",
  },
];

export default function Values() {
  return (
    <Box py={24} bg="white">
      <Container maxW="1200px">
        <Heading textAlign="center" mb={14}>
          Nossos Valores
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {values.map((item) => (
            <Box
              key={item.title}
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "xl",
              }}
            >
              <Stack spacing={4}>
                <Text
                  className="material-symbols-outlined"
                  fontSize="32px"
                  color="brand.500"
                >
                  {item.icon}
                </Text>

                <Heading size="md">{item.title}</Heading>
                <Text color="gray.600">{item.desc}</Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
