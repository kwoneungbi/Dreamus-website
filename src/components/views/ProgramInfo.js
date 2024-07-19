import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ProgramTable from "./ProgramTable";

function ProgramInfo() {
  return (
    <Box py={10}>
      <Heading mb={4}>프로그램 소개</Heading>
      <ProgramTable />
    </Box>
  );
}

export default ProgramInfo;
