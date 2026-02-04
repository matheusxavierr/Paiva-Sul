import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="1200px">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>
          <GridItem>
            <Text
              color="brand.500"
              fontWeight="bold"
              textTransform="uppercase"
              mb={2}
            >
              Conheça nossa história
            </Text>
            <Heading mb={6}>Compromisso com a Solidez</Heading>
            <Text mb={4}>
              A PAIVA SUL é referência em soluções de engenharia e construção,
              focada em entregar qualidade, segurança e prazos rigorosos.
            </Text>
            <Text>
              Nossa equipe utiliza tecnologias modernas para garantir obras
              duráveis, funcionais e com alto padrão técnico.
            </Text>
          </GridItem>

          <GridItem>
            <Box
              h="100%"
              minH="300px"
              borderRadius="xl"
              bgImage="url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj_ICird9ENRF26_KBU9TnLkv_iehsR73PD5s2nTPu7PeywKgCAshFK3QSDMkiYvcBz27eqq-YtedZcJeeMHDKwveAvVUZBO9olW10CN4ffDWEyXnQcWvgCwpCLIz_5FkOKyVookKVebgFCkdK5wKFmNR93NO2RzvMt5rrEfQ0hIlhf_9yA5qFuZ1DFoviFahvTLQMmGShsuQfUtcdcDxSD10QSDNaqo78ErAsNWLtS93qymCR2flkzhaIRQF2Wi2OWSChuG8RFy4')"
              bgSize="cover"
              bgPosition="center"
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
