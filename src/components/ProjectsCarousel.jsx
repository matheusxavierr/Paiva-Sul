import { Box, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Residencial Aurora",
    category: "Construção Residencial",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Edifício Alpha Business",
    category: "Empreendimento Comercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Polo Industrial Tech",
    category: "Reforma Industrial",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Condomínio Vista Azul",
    category: "Residencial Premium",
    image:
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Centro Empresarial Prime",
    category: "Comercial Corporativo",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Complexo Logístico Sul",
    category: "Infraestrutura Industrial",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c6f4b4d9f5b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProjectsCarousel() {
  return (
    <Box py={24} bg="gray.50">
      <Box maxW="1200px" mx="auto" px={6}>
        <Heading mb={4}>Portfólio de Projetos</Heading>
        <Text mb={12} color="gray.600">
          Conheça algumas das obras que levam a marca da PAIVA SUL.
        </Text>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

function ProjectCard({ title, category, image }) {
  return (
    <Box
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="xl"
      height="320px"
      role="group"
      cursor="pointer"
    >
      <Box
        as="img"
        src={image}
        alt={title}
        objectFit="cover"
        w="100%"
        h="100%"
        transition="transform 0.6s ease"
        _groupHover={{ transform: "scale(1.08)" }}
      />

      <Box
        position="absolute"
        inset="0"
        bg="linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))"
        opacity="0.9"
        transition="opacity 0.4s"
        _groupHover={{ opacity: 1 }}
      />

      <Box
        position="absolute"
        bottom="0"
        p={6}
        color="white"
        transform="translateY(10px)"
        transition="all 0.4s"
        _groupHover={{ transform: "translateY(0)" }}
      >
        <Text fontSize="sm" fontWeight="bold" opacity={0.9}>
          {category}
        </Text>
        <Heading size="md">{title}</Heading>
      </Box>
    </Box>
  );
}