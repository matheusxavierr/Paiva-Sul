import Navbar from "../components/Navbar";
import HeroServices from "../components/HeroServices";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";
import ServiceSection from "../components/ServiceSection";
import ServiceTitle from "../components/ServiceTitle";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import Contact from "../components/Contact";
import ProjectsCarousel from "../components/ProjectsCarousel";
import {
  FaHardHat,
  FaPaintRoller,
  FaBolt,
  FaFaucet,
  FaTools,
  FaTags
} from "react-icons/fa";


export default function Services() {
  return (
    <>
        <Navbar />
        <HeroServices />
        <ServiceSection />
        <ProjectsCarousel />
        <ServiceTitle
        label="O que fazemos"
        title="Nossos Serviços Especializados"
        description="Oferecemos um portfólio completo para atender todas as necessidades do seu empreendimento, do alicerce ao acabamento impecável."
        />
        <Box py={5} bg="gray.50">
            <Container maxW="1200px">
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    <InfoCard
                        variant="service"
                        icon="construction"
                        title="Construção Civil"
                        description="Execução de obras residenciais e comerciais com alto padrão de acabamento e estrutura robusta."
                        />

                        <InfoCard
                        variant="service"
                        icon="reformas"
                        title="Reformas"
                        description="Renovação de ambientes, modernização de fachadas e revitalização total de espaços internos e externos."
                        />

                        <InfoCard
                        variant="service"
                        icon="eletrica"
                        title="Instalações Elétricas"
                        description="Projetos de baixa e média tensão, quadros de energia inteligentes e manutenção predial industrial."
                        />

                        <InfoCard
                        variant="service"
                        icon="hidraulica"
                        title="Hidráulica"
                        description="Instalação de redes de água fria/quente, esgoto e sistemas avançados de combate a incêndio."
                        />

                        <InfoCard
                        variant="service"
                        icon="instalacoes"
                        title="Instalações"
                        description="Serviços completos de instalação técnica com padrão profissional e máxima eficiência."
                        />

                        <InfoCard
                        variant="service"
                        icon="adesivagem"
                        title="Adesivagem"
                        description="Aplicação profissional de adesivos e identidade visual para ambientes e fachadas."
                        />
                </SimpleGrid>
            </Container>
        </Box>
        <Contact />
        <Footer />
    </>
  );
}