import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
  HStack,
} from "@chakra-ui/react";

const contactItems = [
  {
    label: "Telefone",
    value: "(48) 99999-9999",
    icon: "phone",
  },
  {
    label: "Email",
    value: "contato@paivasul.com.br",
    icon: "mail",
  },
  {
    label: "Localização",
    value: "São José, SC",
    icon: "location_on",
  },
];

export default function Contact() {
  return (
    <Box
      py={{ base: 20, md: 28 }}
      bgGradient="linear(to-br, #0f172a, #020617)"
      color="white"
    >
      <Container maxW="1200px">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 12, lg: 20 }}
          alignItems="center"
        >
          {/* COLUNA ESQUERDA */}
          <Box>
            <Text
              color="brand.500"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="widest"
              mb={3}
            >
              Contato
            </Text>

            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              mb={6}
            >
              Pronto para começar
              <br />
              seu projeto?
            </Heading>

            <Text color="gray.300" fontSize="lg" mb={10} maxW="420px">
              Entre em contato hoje mesmo e agende uma consultoria gratuita.
              Nossa equipe está pronta para tirar seu sonho do papel.
            </Text>

            <VStack align="start" spacing={6}>
              {contactItems.map((item) => (
                <HStack key={item.label} spacing={4}>
                  <Box
                    w="44px"
                    h="44px"
                    bg="brand.500"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      className="material-symbols-outlined"
                      fontSize="20px"
                    >
                      {item.icon}
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.400">
                      {item.label}
                    </Text>
                    <Text fontWeight="bold">{item.value}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* FORMULÁRIO */}
          <Box
  bg="white"
  p={{ base: 6, md: 8 }}
  borderRadius="2xl"
  boxShadow="2xl"
  color="gray.800"
>
  <VStack spacing={5} align="stretch">
    {/* NOME + EMAIL */}
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
      <Box>
        <Text fontSize="sm" fontWeight="semibold" mb={1}>
          Nome
        </Text>
        <Input placeholder="Seu nome" size="lg" />
      </Box>

      <Box>
        <Text fontSize="sm" fontWeight="semibold" mb={1}>
          Email
        </Text>
        <Input placeholder="seu@email.com" size="lg" />
      </Box>
    </Grid>

    {/* SERVIÇO */}
    <Box>
      <Text fontSize="sm" fontWeight="semibold" mb={1}>
        Serviço de Interesse
      </Text>
      <Select size="lg">
        <option>Selecione um serviço</option>
        <option>Construção Civil</option>
        <option>Reformas Premium</option>
        <option>Gestão de Obras</option>
      </Select>
    </Box>

    {/* MENSAGEM */}
    <Box>
      <Text fontSize="sm" fontWeight="semibold" mb={1}>
        Mensagem
      </Text>
      <Textarea
        placeholder="Conte-nos sobre seu projeto"
        size="lg"
        rows={4}
      />
    </Box>

    {/* BOTÃO */}
    <Button
      size="lg"
      w="100%"
      colorScheme="brand"
      fontWeight="bold"
      mt={4}
    >
      Enviar Mensagem
    </Button>
  </VStack>
</Box>
        </Grid>
      </Container>
    </Box>
  );
}
