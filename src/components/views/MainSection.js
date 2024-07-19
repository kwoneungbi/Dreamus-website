import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function MainSection() {
  return (
    <Box py={10} textAlign='center'>
      <Heading>Dreamus에 오신걸 환영합니다.</Heading>
      <Text mt={4}>지금 내 아이의 회복탄력성을 분석해보세요.</Text>
      <Button
        mt={4}
        colorScheme='gray'
        size='lg'
        as={RouterLink}
        to='/assessment'
      >
        무료 회복탄력성 분석 검사 바로가기 (클릭)
      </Button>
    </Box>
  );
}

export default MainSection;
