import { Box, Text } from "@chakra-ui/react";

import EntityInterface from "../types/Entity";

interface EntityProps {
  data: EntityInterface;
}

export default function Entity({ data }: EntityProps) {
  return (
    <Box p="8" bg="teal.800" borderRadius={8}>
      <Text fontSize="lg" mb="4">
        Taxa de abertura
      </Text>
    </Box>
  );
}
