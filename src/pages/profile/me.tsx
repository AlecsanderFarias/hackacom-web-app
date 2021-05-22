import { useState } from "react";

import {
  Flex,
  SimpleGrid,
  Box,
  Text,
  Stack,
  Avatar,
  HStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import Select from "../../components/Form/Select";
import Tag from "../../components/Tag";
import TagSearch from "../../components/TagSearch";

export default function meProfile() {
  const [tags, setTags] = useState([
    { _id: 1, name: "testes 1" },
    { _id: 2, name: "testes 2" },
    { _id: 3, name: "testes 3" },
    { _id: 4, name: "testes 4" },
  ]);

  function handleClickTag(e) {
    setTags((prev) => prev.filter((item) => item._id !== e._id));
  }

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          bg="teal.800"
          p={8}
          borderRadius={8}
          flexDirection="column"
        >
          <Stack spacing="4">
            <Flex align="flex-start" justify="flex-start">
              <Avatar
                size="xl"
                name="Alecsander Farias"
                src="https://github.com/AlecsanderFarias.png"
                mr="8"
              />
              <Input name="name" label="Seu Nome" placeholder="Nome" />
            </Flex>

            <TextArea name="description" label="Sua história" />

            <SimpleGrid columns={[1, 1, 1, 2]} spacing="5">
              <Stack spacing="4">
                <Text fontWeight="medium">Endereço</Text>

                <Input
                  name="address.zipcode"
                  label="CEP"
                  placeholder="11111-111"
                />

                <HStack>
                  <Input name="address.city" label="Cidade" />
                  <Select
                    name="address.state"
                    label="Estado"
                    options={["estado 1 ", "estado 2 ", "estado 3 "]}
                  />
                </HStack>

                <HStack>
                  <Input name="address.street_name" label="Rua" />
                  <Input name="address.street_number" label="Número" />
                </HStack>

                <Input name="address.neighborhood" label="Bairo" />
              </Stack>

              <Stack spacing="4">
                <Text fontWeight="medium">Tags</Text>

                <TagSearch tags={tags} setTags={setTags} />

                <Wrap auto>
                  {tags.map((item) => (
                    <WrapItem>
                      <Tag data={item} handleClick={handleClickTag} exist />
                    </WrapItem>
                  ))}
                </Wrap>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
