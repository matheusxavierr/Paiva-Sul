import { Box, Heading, Text } from "@chakra-ui/react";

export default function ServiceTitle({
  variant = "default",
  label,
  title,
  description,
}) {
  if (variant === "highlight") {
    return (
      <Box textAlign="center" mb={16}>
        <Text
          color="brand.500"
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="widest"
          mb={2}
        >
          {label}
        </Text>

        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="black"
        >
          {title}
        </Heading>
      </Box>
    );
  }

  // variant === "default"
  return (
    <Box textAlign="center" maxW="3xl" mx="auto" mb={5} mt={5}>
      <Text
        color="brand.500"
        fontWeight="bold"
        letterSpacing="0.2em"
        fontSize="xs"
        textTransform="uppercase"
        mb={4}
      >
        {label}
      </Text>

      <Heading
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="black"
        mb={6}
      >
        {title}
      </Heading>

      {description && (
        <Text fontSize="lg" color="gray.600">
          {description}
        </Text>
      )}
    </Box>
  );
}
