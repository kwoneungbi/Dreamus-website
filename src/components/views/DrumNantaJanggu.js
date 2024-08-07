import React from "react";
import { Box, Heading, Container, Link } from "@chakra-ui/react";

const DrumNantaJanggu = () => {
  return (
    <Container maxW='container.md' mt={10}>
      <Heading as='h2' size='lg' textAlign='center' mb={4}>
        씽씽큐 뮤직의 씽~명나는 타악기 프로그램입니다.
      </Heading>

      <Box mb={10}>
        <Heading as='h3' size='md' mb={4} textAlign='center'>
          콩!치!타 드럼 – <Link color='red'>설명과 사진</Link>
        </Heading>
      </Box>

      <Box mb={10}>
        <Heading as='h3' size='md' mb={4} textAlign='center'>
          콩!치!타 난타 – <Link color='red'>설명과 사진</Link>
        </Heading>
      </Box>

      <Box mb={10}>
        <Heading as='h3' size='md' mb={4} textAlign='center'>
          씽!명나는 장구! – <Link color='red'>설명과 사진</Link>
        </Heading>
      </Box>
    </Container>
  );
};

export default DrumNantaJanggu;
