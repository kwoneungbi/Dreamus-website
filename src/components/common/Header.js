import React from "react";
import { Box, Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <Box bg='gray.500' p={4}>
      <Flex justify='space-between' align='center'>
        <ChakraLink as={RouterLink} to='/' _hover={{ textDecoration: "none" }}>
          <Heading color='white'>Dreamus</Heading>
        </ChakraLink>
        <Flex>
          <ChakraLink as={RouterLink} to='/' color='white' mx={2}>
            Home
          </ChakraLink>
          <ChakraLink as={RouterLink} to='/company' color='white' mx={2}>
            Company
          </ChakraLink>
          <ChakraLink as={RouterLink} to='/programs' color='white' mx={2}>
            Programs
          </ChakraLink>
          <ChakraLink as={RouterLink} to='/bi' color='white' mx={2}>
            BI
          </ChakraLink>
          <ChakraLink as={RouterLink} to='/assessment' color='white' mx={2}>
            Assessment
          </ChakraLink>
          <ChakraLink as={RouterLink} to='/careers' color='white' mx={2}>
            Careers
          </ChakraLink>
          <ChakraLink as={RouterLink} to='/board' color='white' mx={2}>
            Post
          </ChakraLink>

          {/* <ChakraLink as={RouterLink} to='/testimonials' color='white' mx={2}>
            Testimonials
          </ChakraLink> */}
          {/* <ChakraLink as={RouterLink} to='/enrollment' color='white' mx={2}>
            Enrollment
          </ChakraLink>
          <ChakraLink as={RouterLink} to='/ding-dong' color='white' mx={2}>
            Ding Dong
          </ChakraLink> */}
          {/* <ChakraLink
            as={RouterLink}
            to='/resilience-types'
            color='white'
            mx={2}
          >
            Resilience Types
          </ChakraLink> */}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
