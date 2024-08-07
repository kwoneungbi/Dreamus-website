import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  Center,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function MainSection() {
  const [showText, setShowText] = useState(false);

  const handleTextClick = () => {
    if (showText) setShowText(false);
    else setShowText(true);
  };

  return (
    <Box py={10} textAlign='center'>
      <Heading>회복탄력성을 기르는 긍정창의 놀이 - 띵동 (로고)</Heading>
      <Text mt={17}>지금 내 아이의 회복탄력성을 분석해보세요.</Text>
      <Button
        m={8}
        colorScheme='gray'
        size='lg'
        as={RouterLink}
        to='/assessment'
      >
        무료 회복탄력성 분석 검사 바로가기 (클릭)
      </Button>
      <Box display='flex' justifyContent='center'>
        <img src='/images/draw1.png' alt='First drawing' width='900px' />
      </Box>
      <Text mt={5} fontSize='large'>
        같은 경우, 내 아이가 어떤 선택을 하기를 바라시나요?
      </Text>
      <Text mt={5}>띵동을 하면 회복탄력성이 키워지나요?</Text>
      <Text mt={5}>
        네! 띵동이 회복탄력성을 만들어내는 방법을 보여드릴게요.
      </Text>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-evenly'
        mt={10}
      >
        <Text mt={5} fontSize='large' color='blue'>
          영상으로 볼래요 (영상클릭 - 영상 첨부)
        </Text>
        <Text
          mt={5}
          fontSize='large'
          color='blue'
          onClick={handleTextClick}
          style={{ cursor: "pointer" }}
        >
          글로 읽을래요
        </Text>
      </Box>
      {showText && (
        <Center mt={10} flexDirection='column'>
          <Text fontSize='large' color='orange'>
            띵동 띵동 우리 아이들의 마음근력 키우는 동화나라에 잘 오셨습니다.
          </Text>
          <Text fontSize='large' color='orange'>
            동화로 생각하자! think in fairy tales 띵곡 in 동화, 띵동!
          </Text>
          <Text fontSize='large' color='orange'>
            어떤 방법으로 아이의 마음 근육을 단단하게 만들까?
          </Text>
          <Text fontSize='large' color='orange'>
            <br />
            몸의 근육 만들 때는 어떻게 하는지 생각해볼까요?
          </Text>
          <Text fontSize='large' color='orange'>
            먼저 내 몸을 알아야 한다.
          </Text>
          <Text fontSize='large' color='orange'>
            내 몸의 장.단점을 파악 후에 어느 부분을 조절 신경 써 결정하자.
          </Text>
          <Text fontSize='large' color='orange'>
            내 몸 분석, 유산소 꾸준함, 집에서 식단 = 완벽한 몸교육
          </Text>
          <Text fontSize='large' color='orange'>
            마음 근육을 만들기도 똑같습니다. 헬스와 비교해볼까요?
          </Text>
          <Table
            variant='simple'
            mt={10}
            border='1px'
            borderColor='gray.200'
            maxW='700px'
          >
            <Tbody>
              <Tr>
                <Td border='1px' borderColor='gray.200'>
                  헬스
                </Td>
                <Td border='1px' borderColor='gray.200'>
                  띵동 마음근력 만들기
                </Td>
              </Tr>
              <Tr>
                <Td border='1px' borderColor='gray.200'>
                  1. 내 몸 분석
                </Td>
                <Td border='1px' borderColor='gray.200'>
                  아이의 마음 근력 분석
                </Td>
              </Tr>
              <Tr>
                <Td border='1px' borderColor='gray.200'>
                  2. 유산소 - 자전거타기, 러닝머신 <br />
                  무산소 - 덤벨, 머신 웨이트
                </Td>
                <Td border='1px' borderColor='gray.200'>
                  긍정력을 위한 4가지 동화 형식 <br />
                  1. 내가 주인공 동화 (아이의 얼굴이 주인공) <br />
                  2. 나는 감독님 동화 (아이의 캐릭터의 악기를 선정해줍니다){" "}
                  <br />
                  3. 뮤지컬 동화 (뮤지컬 + 악기) <br />
                  4. 문제해결 동화 <br />
                  (직접 문제를 해결하며 동화 듣기) <br />
                  창의력을 위한 융, 복합 프로그램 <br />
                  (음악 신체 오감 미술 등)
                </Td>
              </Tr>
              <Tr>
                <Td border='1px' borderColor='gray.200'>
                  3. 꾸준함
                </Td>
                <Td border='1px' borderColor='gray.200'>
                  아이들이 재미있게 할 수 있는 프로그램
                </Td>
              </Tr>
              <Tr>
                <Td border='1px' borderColor='gray.200'>
                  4. 집에서 식단 조절
                </Td>
                <Td border='1px' borderColor='gray.200'>
                  활동지 - 해피해피 <br />
                  피드백 참여 - 엄마와 티티쌤이 협력하여 <br />
                  선물 이루기 - {"<선수첩>"}
                </Td>
              </Tr>
              <Tr>
                <Td border='1px' borderColor='gray.200'>
                  5. 결과 - 단단한 신체근력
                </Td>
                <Td border='1px' borderColor='gray.200'>
                  단단한 마음 근력
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Center>
      )}
      <Text mt={5} fontSize='large'>
        소중한 우리 아이의 마음근력! 아무에게나 맡길수 없죠.
      </Text>
      <Box display='flex' justifyContent='center' mt={10}>
        <img
          src='/mnt/data/file-ZVTlbIbxWvgCj31Y9UBqXAYS'
          alt='Third drawing'
          width='900px'
        />
      </Box>
      <Text mt={5} fontSize='large'>
        놀이 + 소통 전문가 = 티티선생님 <br />
        띵동! 티티선생님이 벨을 누를때마다 우리 아이의 마음 근육이 단단해집니다.
      </Text>
      <Box display='flex' justifyContent='center' mt={10}>
        <img
          src='/mnt/data/file-Tl0tvPqE2MNEloGZKuz5GxUT'
          alt='Fourth drawing'
          width='900px'
        />
      </Box>
      <Box display='flex' justifyContent='center' mt={10}>
        <img src='/images/draw2.jpg' alt='Fifth drawing' width='900px' />
      </Box>
    </Box>
  );
}

export default MainSection;
