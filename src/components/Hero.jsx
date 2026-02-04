import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      minH="520px"
      bgImage="linear-gradient(rgba(16,25,34,0.7), rgba(16,25,34,0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzSg5AUIxvhXYFh3dWs_MRLdhhcAlZnriMbsP4XR6NRpp8C3okIkdJS8jsJ0gjekn6G2zNag_kGOxAwV4-aPXHcJqki6eD2kg0sESBKBTPFweYx67mN_O1ER32lD2YYMYRGvzow3XfOfmklydBQ0dHdDbWzEkVOvyH0hL2SllMcmhmHpdB9r5msHgjVPHCYCGXKAa7HVTqaE4tFa2sLA5UfEZAKw-bKMfjD1yjblZ9gfvopOZoJHLf8GEQEaibGGMczlgYeTl00YU')"
      bgSize="cover"
      bgPosition="center"
      borderRadius="xl"
      display="flex"
      alignItems="center"
    >
      <Container maxW="1200px">
        <Stack spacing={6} maxW="600px">
          <Heading
            as="h1"
            textStyle="h1"
            color="white"
          >
            Excelência em Construção e Reformas
          </Heading>

          <Text color="gray.200" fontSize="lg">
            Construindo o futuro com solidez, inovação e confiança absoluta em
            cada detalhe do seu projeto.
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
            <Button
              size="lg"
              colorScheme="brand"
              px={8}
              fontWeight="bold"
            >
              Solicitar Orçamento
            </Button>

            <Button
              size="lg"
              variant="outline"
              color="white"
              borderColor="whiteAlpha.400"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Nossos Serviços
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
