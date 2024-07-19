import React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

function ContactUs() {
  return (
    <Box id='contact' py={10}>
      <Heading mb={4}>Contact Us</Heading>
      <VStack spacing={4} align='start'>
        <FormControl id='name'>
          <FormLabel>Name</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl id='email'>
          <FormLabel>Email</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl id='message'>
          <FormLabel>Message</FormLabel>
          <Input type='text' />
        </FormControl>
        <Button colorScheme='gray' size='lg'>
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default ContactUs;
