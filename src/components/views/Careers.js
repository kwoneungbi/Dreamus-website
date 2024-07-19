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

function Careers() {
  return (
    <Box py={10}>
      <Heading mb={4}>함께 일해요</Heading>
      <VStack align='start' spacing={4}>
        <Box>
          <Heading size='md'>함께 수업해요. (강사 도전)</Heading>
          <Text>
            자유로운 시간, 사랑스런 아이들의 미래에 향기를 심어주는 보람.
            <br />
            시간 대비 최고의 페이. <br />
            드림어스 강사에 도전하세요.
            <br />
            <br />
            자격요건이요? 물론 있습니다.
            <br />
            <br />
            자차 소유, 대졸자, 그리고 가장 중요한 것이 있습니다.
            <br />
            <br />
            넌 정말 아이를 사랑하는구나? 라는 말을 들으시나요?
            <br />
            아이를 보면 웃음이 나오시나요?
            <br />
            가끔씩 혀가 짧아지기도 하나요? <br />
            <br />
            그렇다면 어서 오세요! <br />
            저희와 함께 하실 자격을 갖추셨습니다.
            <br />
            <br />
            “저.. 하고는 싶은데 사실 노래를 못해요..”
            <br />
            “저는 동화 구연을 잘못해요.”
            <br />
            “저는 아이들 교육으로는 재능이 없어요.”
            <br />
            괜찮습니다. 아이를 사랑하는 마음만 있다면요, <br />
            다른 재능은 교육으로 일정 수준에 올라갈수 있습니다.
            <br />
            아이를 사랑하는 마음은 그 누가 가르쳐도 심어지기 힘든 재능입니다.
            <br />
            <br />
            그 재능을 가지고 있다면 나머지는 저희가 이끌어드립니다. <br />
            저희와 함께 우리 아이들의 미래에 꽃씨를 심어주러 가시지요.
            <br />
          </Text>
        </Box>
        <Box>
          <Heading size='md'>교사 신청</Heading>
          <FormControl id='name'>
            <FormLabel>이름</FormLabel>
            <Input type='text' />
          </FormControl>
          <FormControl id='region'>
            <FormLabel>지역</FormLabel>
            <Input type='text' />
          </FormControl>
          <FormControl id='age'>
            <FormLabel>나이</FormLabel>
            <Input type='number' />
          </FormControl>
          <FormControl id='contact'>
            <FormLabel>연락처</FormLabel>
            <Input type='text' />
          </FormControl>
          <FormControl id='resume'>
            <FormLabel>이력서 첨부</FormLabel>
            <Input type='file' />
          </FormControl>
          <Button mt={4} colorScheme='gray'>
            지원하기
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default Careers;
