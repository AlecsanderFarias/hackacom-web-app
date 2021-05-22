import { useState } from "react";
import { GetServerSideProps } from "next";
import { Flex, SimpleGrid, Box, Text, Stack } from "@chakra-ui/react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Entity from "../components/Entity";

import EntityInterface from "../types/Entity";

interface Tag {}

interface DashboardProps {
  entitys?: Array<EntityInterface>;
  search: string;
  tags?: Array<Tag>;
}

export default function dashboard({ entitys, tags, search }: DashboardProps) {
  const listFilters = () => {
    return <div>listFilters</div>;
  };

  const entitysList = () => {
    return (
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
        {entitys.map((item) => (
          <Entity data={item} />
        ))}
      </SimpleGrid>
    );
  };

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1">
          <Stack spacing="4" align="stretch">
            {listFilters()}

            {entitysList()}
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const entitys = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  const search = "Procurando";
  const tags = [];

  return {
    props: {
      entitys,
      search,
      tags,
    },
  };
};
