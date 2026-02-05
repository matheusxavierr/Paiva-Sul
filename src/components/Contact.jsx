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

export default function Contact() {
  return (
    <Box
      id="contato"
      scrollMarginTop="100px"
      py={28}
      bgGradient="linear(to-br, #0f172a, #020617)"
      color="white"
    >
      <Container maxW="1200px">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={20}>
          <Box>
            <Text color="brand.500" fontWeight="bold" mb={3}>
              Contato
            </Text>

            <Heading mb={6}>
              Pronto para começar
              <br />
              seu projeto?
            </Heading>

            <Text color="gray.300" mb={10}>
              Entre em contato hoje mesmo e agende uma consultoria gratuita.
            </Text>

            <VStack align="start" spacing={6}>
              <HStack>
                <Text fontWeight="bold">Telefone:</Text>
                <Text>(48) 99999-9999</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Email:</Text>
                <Text>contato@paivasul.com.br</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Localização:</Text>
                <Text>São José, SC</Text>
              </HStack>
            </VStack>
          </Box>

          <Box bg="white" p={8} borderRadius="2xl" color="gray.800">
            <VStack spacing={5} align="stretch">
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="semibold">Nome</Text>
                  <Input placeholder="Seu nome" />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="semibold">Email</Text>
                  <Input placeholder="seu@email.com" />
                </Box>
              </Grid>

              <Box>
                <Text fontSize="sm" fontWeight="semibold">Serviço de Interesse</Text>
                <Select>
                  <option>Selecione um serviço</option>
                  <option>Construção</option>
                  <option>Reforma</option>
                  <option>Gestão</option>
                </Select>
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="semibold">Mensagem</Text>
                <Textarea placeholder="Conte-nos sobre seu projeto" />
              </Box>

              <Button size="lg" colorScheme="brand">
                Enviar Mensagem
              </Button>
            </VStack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
