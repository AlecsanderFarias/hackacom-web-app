import { Box, Text, Icon, IconButton } from "@chakra-ui/react";
import { RiAddLine, RiCloseLine, RiDeleteBinLine } from "react-icons/ri";

import TagInterface from "../types/tag";

interface tagProps {
  data: TagInterface;
  handleClick?: Function;
  exist?: boolean;
}

export default function Entity({ data, handleClick, exist }: tagProps) {
  return (
    <Box
      p="2"
      bg="teal.900"
      borderRadius={8}
      display="flex"
      alignItems="center"
      justify={handleClick ? "space-between" : "flex-start"}
    >
      <Text fontSize="lg">{data.name}</Text>

      {handleClick && (
        <IconButton
          ml="4"
          aria-label={exist ? "Adicionar tag" : "Remover tag"}
          colorScheme="pink"
          size="sm"
          onClick={() => handleClick(data)}
        >
          <Icon as={exist ? RiCloseLine : RiAddLine} fontSize="20" />
        </IconButton>
      )}
    </Box>
  );
}
