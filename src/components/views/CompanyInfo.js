import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ProgramTable from "./ProgramTable";

function Introduction() {
  return (
    <Box py={10}>
      <Heading mb={4}>Dreamus 소개</Heading>
      <Text>
        드림어스는 음악을 기반으로 하는 프로그램입니다. <br />
        음악에 세상의 모든 것을 접목합니다. 세상의 모든 것에 음악을 접목합니다.{" "}
        <br />
        드림어스만의 다양한 창의적 예술교육을 만나보세요.
      </Text>
      <Box py={10}>
        <Text fontSize='x-large' mb={4}>
          프로그램 소개
        </Text>
        <ProgramTable />
      </Box>
    </Box>
  );
}

export default Introduction;
