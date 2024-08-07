import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const Lululala_Piano = () => {
  return (
    <Container maxW='container.md' mt={10}>
      <Heading as='h2' size='lg' textAlign='center' mb={4}>
        피아노는 어렵다? 노! 10년간 축적된 노하우는 다릅니다.
      </Heading>
      <Heading as='h3' size='md' textAlign='center' color='red' mb={8}>
        룰루랄라 그룹 피아노! 아이들이 왜 좋아할까요?
      </Heading>

      <Box mb={10}>
        <Heading as='h4' size='md' mb={4}>
          1. 액티비티 연주
        </Heading>
        <Text mb={4}>청음활동, 짝궁과 신체표현, 댄스(율동)와 게임</Text>

        <SimpleGrid columns={[1, null, 2]} spacing={4}>
          <Box>
            <Image src='/path/to/image1.png' alt='첫 번째 이미지' />
            <Text textAlign='center'>
              짝꿍과 손을 잡고 노래에 맞춰 춤을 춰요.
            </Text>
          </Box>
          <Box>
            <Image src='/path/to/image2.png' alt='두 번째 이미지' />
            <Text textAlign='center'>
              "도" 소리가 나오면 듣고 도를 연주해요.
            </Text>
          </Box>
          <Box>
            <Image src='/path/to/image3.png' alt='세 번째 이미지' />
            <Text textAlign='center'>다시 음악이 나오면 춤을 춰요.</Text>
          </Box>
          <Box>
            <Image src='/path/to/image4.png' alt='네 번째 이미지' />
            <Text textAlign='center'>불현화를 녹수리가 나오면 숨이요!</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box mb={10}>
        <Heading as='h2' size='md' mb={4}>
          2. 씽씽큐 피아노 교재는 신.청.곡.
        </Heading>
        <Text mb={4}>
          <Text as='span' fontWeight='bold'>
            신나게 청
          </Text>
          해주렴. 너희가 연주하고 싶은{" "}
          <Text as='span' fontWeight='bold'>
            곡!
          </Text>
          <br /> 2년 전 우리 큰 아이가 연주했던 교재? NO! 지금 현재 2023년
          아이들에게 현장에서 신청곡을 받아 3단계 편곡 악보 제공.
          <br /> 아이가 좋아하는 곡을 편도 상황에 맞춘 단계별 연주함으로 성취감
          UP UP! 만족도 200%!!
          <br /> 2017년 피메일을 시작으로 ~ 2023년 지속의 꽃까지! 2024년에는...?
        </Text>
        <SimpleGrid columns={[1, 3]} spacing={10} mb={4}>
          <Box textAlign='center'>
            <Heading as='h3' size='lg' color='orange.400' mb={2}>
              1단계 룰루랄라
            </Heading>
            <Text>재미있게 흥얼거리며 연주할 수 있는 단계</Text>
          </Box>
          <Box textAlign='center'>
            <Heading as='h3' size='lg' color='green.400' mb={2}>
              2단계 생각하기
            </Heading>
            <Text>악보와 함께 연주할 수 있는 단계</Text>
          </Box>
          <Box textAlign='center'>
            <Heading as='h3' size='lg' color='blue.400' mb={2}>
              3단계 집중하기
            </Heading>
            <Text>듣고, 보고, 생각하고 양손으로 연주하는 단계</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box mb={10}>
        <Heading as='h4' size='md' mb={4}>
          3. 스토리텔링과 캐릭터
        </Heading>
        <Text mb={4}>
          윰표, 음악기호 등을 스토리를 통해 자연스럽게 인지
          <br /> 코다, 코손이 캐릭터
        </Text>
        <SimpleGrid columns={[1, 2]} spacing={4}>
          <Box textAlign='center'>
            <Image src='/path/to/image5.png' alt='캐릭터 이미지 1' />
          </Box>
          <Box textAlign='center'>
            <Image src='/path/to/image6.png' alt='캐릭터 이미지 2' />
          </Box>
        </SimpleGrid>
      </Box>

      <Box mb={10}>
        <Heading as='h4' size='md' mb={4}>
          4. 다른 악기와의 콜라보
        </Heading>
        <Text mb={4}>핸드벨, 우쿨렐레, 난타 외 여러 가지 리듬악기</Text>
      </Box>
    </Container>
  );
};

export default Lululala_Piano;
