import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

function Enrollment() {
  return (
    <Box py={10}>
      <Heading mb={4}>Class Enrollment</Heading>
      <Text>Enroll in our classes...</Text>
      <VStack align='start' spacing={4}>
        <FormControl id='name'>
          <FormLabel>Name</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl id='age'>
          <FormLabel>Age</FormLabel>
          <Input type='number' />
        </FormControl>
        <FormControl id='contact'>
          <FormLabel>Contact</FormLabel>
          <Input type='text' />
        </FormControl>
        <Button colorScheme='gray' mt={4}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default Enrollment;
