import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiHeartsLine, RiHomeLine, RiInputMethodLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing={12} align="flex-start">
        <Box>
          <Text fontWeight="bold" color="teals.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiHomeLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Empresas
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiHeartsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Match
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="teals.400" fontSize="small">
            PESSOAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Meu perfil
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
