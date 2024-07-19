import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function DingDongResilience() {
  return (
    <Box py={10}>
      <Heading mb={4}>Ding Dong - Building Emotional Resilience</Heading>
      <Text>Welcome to the land of fairy tales...</Text>
      <VStack align="start" spacing={4} mt={4}>
        <Box>
          <Heading size="md">Body Muscle vs. Mind Muscle</Heading>
          <Text>How do we build body muscles?...</Text>
          <Text>Similarly, building mind muscles involves...</Text>
        </Box>
        <Box>
          <Heading size="md">Mind Muscle Analysis</Heading>
          <Text>We analyze children's mind muscles...</Text>
        </Box>
        <Box>
          <Heading size="md">Positive Thinking and Creativity</Heading>
          <Text>Our program enhances positive thinking...</Text>
        </Box>
        <Box>
          <Heading size="md">Consistency</Heading>
          <Text>Consistent practice is key...</Text>
        </Box>
        <Box>
          <Heading size="md">Home Feedback and Activities</Heading>
          <Text>Provide activity sheets and feedback...</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default DingDongResilience;
