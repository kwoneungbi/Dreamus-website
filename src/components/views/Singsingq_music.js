import React from "react";
import { Box, Heading, Text, Container, Image, Flex } from "@chakra-ui/react";

const Singsingq_Music = () => {
  return (
    <Container maxW='container.md' mt={10} position='relative'>
      <Box position='relative' mb={8}>
        <Box
          backgroundColor='#005766'
          color='white'
          p={6}
          borderRadius='md'
          textAlign='center'
        >
          <Heading as='h2' size='lg'>
            한 달 기본 커리큘럼
          </Heading>
        </Box>
        <Image
          src='/images/char1.png'
          alt='Character'
          position='absolute'
          top='-23px'
          left='-30px'
          w='110px'
          h='110px'
        />
      </Box>

      <Box border='1px solid black' borderRadius='30px' p={7} mb={4}>
        <Text fontSize='20px'>
          <Text as='span' fontWeight='bold'>
            1주차 :
          </Text>{" "}
          약 300여종의 다양한 악기와 교구를 이용한{" "}
          <Text as='span' color='orange'>
            플레이뮤직
          </Text>
        </Text>
      </Box>

      <Box border='1px solid black' borderRadius='30px' p={7} mb={4}>
        <Text fontSize='20px'>
          <Text as='span' fontWeight='bold'>
            2주차 :
          </Text>{" "}
          세계 여러 문화를 체험하고 연주하는{" "}
          <Text as='span' color='green'>
            다문화 음악 수업
          </Text>
        </Text>
      </Box>

      <Box border='1px solid black' borderRadius='30px' p={7} mb={4}>
        <Text fontSize='20px'>
          <Text as='span' fontWeight='bold'>
            3주차 :
          </Text>{" "}
          동화를 이용한{" "}
          <Text as='span' color='teal'>
            스토리텔링
          </Text>{" "}
          음악수업, 씽씽큐만의 음악적{" "}
          <Text as='span' color='teal'>
            동화 부르기
          </Text>
        </Text>
      </Box>

      <Box border='1px solid black' borderRadius='30px' p={7}>
        <Text fontSize='20px'>
          <Text as='span' fontWeight='bold'>
            4주차 :
          </Text>{" "}
          쌀, 콩, 빨대 등 음악 수업에서 접할 수 없었던 다양한 재료들을 이용하여
          소리를 만들고 클래식을 연주하는{" "}
          <Text as='span' color='red'>
            퍼포먼스 음악수업
          </Text>
        </Text>
      </Box>

      <Box mt={20}>
        <Heading as='h3' size='md' mb={4}>
          1주차 · 유리드믹스
        </Heading>
        <Text mb={4}>
          에밀자크 달크로즈의 유아음악이론을 재해석한 씽씽큐 유리드믹스는 현재
          유아들에게 맞춘 200여종의 악기와 교구가 함께 합니다. 스스로 노래하고
          신체로 표현하며 자연스럽게 음악적 역량을 키워주는 수업입니다.
        </Text>
        <Flex justifyContent='space-around' flexWrap='wrap'>
          <Image
            src='/images/eurhythmics1.jpg'
            alt='Image 1'
            boxSize='200px'
            borderRadius='md'
          />
          <Image
            src='/images/eurhythmics2.jpg'
            alt='Image 2'
            boxSize='200px'
            borderRadius='md'
          />
          <Image
            src='/images/eurhythmics3.jpg'
            alt='Image 3'
            boxSize='200px'
            borderRadius='md'
          />
          <Image
            src='/images/eurhythmics4.jpg'
            alt='Image 4'
            boxSize='400px'
            borderRadius='md'
          />
        </Flex>
      </Box>
    </Container>
  );
};

export default Singsingq_Music;
