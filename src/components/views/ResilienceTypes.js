import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function ResilienceTypes() {
  return (
    <Box py={10}>
      <Heading mb={4}>Resilience Types and Support Methods</Heading>
      <VStack align="start" spacing={4}>
        <Box>
          <Heading size="md">EPSA - Hopeful Explorer</Heading>
          <Text>Characteristics: Emotionally regulated, problem solver, socially competent, self-directed...</Text>
          <Text>Support Methods: Provide diverse problem-solving activities...</Text>
        </Box>
        <Box>
          <Heading size="md">ePSA - Challenging Solver</Heading>
          <Text>Characteristics: Struggles with emotional regulation, good problem solver, socially competent, self-directed...</Text>
          <Text>Support Methods: Teach various methods of expressing emotions...</Text>
        </Box>
        {/* Add more types similarly */}
      </VStack>
    </Box>
  );
}

export default ResilienceTypes;
