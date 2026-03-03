import {
  Box,
  Text,
  Heading,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  MdHistory,
  MdEngineering,
  MdHandshake,
  MdVerifiedUser,
  MdSchedule,
  MdHandyman,
  MdConstruction,
  MdFormatPaint,
  MdElectricalServices,
  MdPlumbing,
  MdBuild,
  MdLocalOffer
} from "react-icons/md";

const icons = {
  history: MdHistory,
  engineering: MdEngineering,
  handshake: MdHandshake,
  verified_user: MdVerifiedUser,
  schedule: MdSchedule,
  handyman: MdHandyman,

  construction: MdConstruction,
  reformas: MdFormatPaint,
  eletrica: MdElectricalServices,
  hidraulica: MdPlumbing,
  instalacoes: MdBuild,
  adesivagem: MdLocalOffer,
};

export default function InfoCard({
  variant = "home",
  icon,
  title,
  description,
}) {
  const IconComponent = icons[icon];

  if (variant === "service") {
  return (
    <Flex
      direction="column"
      justify="space-between"
      gap={4}                
      p={6}                  
      minH="260px"           
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="2xl"
      shadow="sm"
      role="group"
      transition="all 0.3s"
      _hover={{
        shadow: "xl",
        transform: "translateY(-6px)",
      }}
    >
      <Box>
        <Flex
          w={14}
          h={14}
          align="center"
          justify="center"
          borderRadius="2xl"
          bg="brand.50"
          color="brand.500"
          mb={4}
          transition="all 0.3s"
          _groupHover={{
            bg: "brand.500",
            color: "white",
          }}
        >
          <Icon as={IconComponent} boxSize={8} />
        </Flex>

        <Heading fontSize="xl" mb={3}>
          {title}
        </Heading>

        <Text fontSize="sm" color="gray.500" lineHeight="relaxed">
          {description}
        </Text>
      </Box>

      <Flex
        align="center"
        gap={2}
        fontSize="sm"
        fontWeight="bold"
        color="brand.500"
        cursor="pointer"
        transition="all 0.3s"
        _hover={{ gap: 3 }}
      >
      </Flex>
    </Flex>
  );
}

   return (
    <Box
      role="group"
      bg="white"
      p={10}
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.200"
      transition="all 0.3s"
      _hover={{
        borderColor: "brand.500",
        boxShadow: "xl",
        transform: "translateY(-4px)",
      }}
    >
      <Box
        w="64px"
        h="64px"
        borderRadius="xl"
        bg="brand.50"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={6}
        transition="all 0.3s"
        _groupHover={{
          bg: "brand.500",
          color: "white",
        }}
      >
        <Text
          className="material-symbols-outlined"
          fontSize="32px"
        >
          {icon}
        </Text>
      </Box>

      <Heading size="lg" mb={4}>
        {title}
      </Heading>

      <Text fontSize="lg" color="gray.600">
        {description}
      </Text>
    </Box>
  );
}
