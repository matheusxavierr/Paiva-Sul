import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

const stats = [
  {
    label: "Anos de Experiência",
    value: "15+",
    icon: "history",
  },
  {
    label: "Projetos Concluídos",
    value: "500+",
    icon: "architecture",
  },
  {
    label: "Clientes Satisfeitos",
    value: "100%",
    icon: "sentiment_very_satisfied",
  },
];

export default function Stats() {
  return (
    <Box py={12}>
      <Container maxW="1200px">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {stats.map((item) => (
            <Box
              key={item.label}
              p={8}
              bg="white"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
            >
              {/* ÍCONE */}
              <Text
                className="material-symbols-outlined"
                fontSize="32px"
                color="brand.500"
                mb={3}
              >
                {item.icon}
              </Text>

              <Stat>
                <StatLabel
                  textTransform="uppercase"
                  fontSize="xs"
                  letterSpacing="wider"
                  fontWeight="bold"
                >
                  {item.label}
                </StatLabel>

                <StatNumber
                  color="brand.500"
                  fontSize="4xl"
                  fontWeight="black"
                >
                  {item.value}
                </StatNumber>
              </Stat>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
