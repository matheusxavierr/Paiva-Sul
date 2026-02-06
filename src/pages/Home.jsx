import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import InfoCard from "../components/InfoCard";
import ServiceTitle from "../components/ServiceTitle";
import { SimpleGrid } from "@chakra-ui/react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
    <Box py={24} id="servicos">
      <Container maxW="1200px">
        <ServiceTitle
        variant="highlight"
        label="Nossas Especialidades"
        title="O Que Fazemos de Melhor"
      />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <InfoCard
            icon="home_work"
            title="Construção Civil"
            description="Do alicerce ao acabamento, construímos residências e galpões comerciais com alto padrão técnico."
          />

          <InfoCard
            icon="format_paint"
            title="Reformas Premium"
            description="Transformamos ambientes existentes em espaços modernos e funcionais, sem dores de cabeça."
          />

          <InfoCard
            icon="engineering"
            title="Gestão de Obras"
            description="Gerenciamento completo de cronogramas, suprimentos e mão de obra para máxima eficiência."
          />
        </SimpleGrid>
      </Container>
    </Box>

      <Contact />
      <Footer />
    </>
  );
}
