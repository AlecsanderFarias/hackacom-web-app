import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export default function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth="1480"
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Ceo
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth="400"
        alignSelf="center"
        align="center"
        color="teal.200"
        position="relative"
        bg="teal.800"
        borderRadius="full"
      >
        <Input
          color="teal.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="buscar na plataforma"
          _placeholder={{
            color: "teal.400",
          }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="teal.300"
          borderRightWidth={1}
          borderColor="teal.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" ml="4" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Nome</Text>
            <Text color="teal.300" fontSize="small">
              Email
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Alecsander Farias"
            src="https://github.com/AlecsanderFarias.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
