import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function BI() {
  return (
    <Box py={10}>
      <Heading mb={4}>Brand Identity</Heading>
      <VStack align='start' spacing={4}>
        <Box>
          <Heading size='md'>Dreamus 로고</Heading>
          <Text>
            드림어스는 드림어스, 드리머스 두가지의 뜻을 가지고 있습니다.
            <br />
            드림어스 : 우리의 재능을 선한 사업을 위해, 미래의 꿈 자람을 위해
            <br />
            아낌없이 드린다. 드리머스: 꿈꾸는 사람들이 모여 행복한 꿈을 이룬다
          </Text>
          <img src='/images/dreamusLogo.png' alt='logo' />
          <Text>
            음악을 기반으로 한 창의성 프로그램을 나타내고자 하였습니다. <br />
            드림에서 앞글자 두 개, 소문자 d와 대문지 R을 합쳐 8분 음표를
            형상화하였습니다. <br />
            <br />
            Cl 소개 띵동 : 아이가 용수철에서 튀어오르는 이미지를 세로로 놓아서
            “띠”를 형상화하였습니다. <br />
            마음을 표현하는 하트를 동그라미 받침으로 사용하여 “띵”이미를
            만들었습니다.
          </Text>
          <img src='/images/dingdong.png' alt='logo' />
          <Text>
            맘펴니 : 영상과 교구로 원하는 시간, 요일에 만나는 프로그램! <br />
            원장님과 아이들의 마음을 편하게 해주는 맘펴니 뮤직. <br />
            맘이 편하면 미소가 나오지요. 앞글자 mpㄴ로 웃는 얼굴을 만들게
            배치하였습니다..
          </Text>
          <img src='/images/dingdong.png' alt='logo' />
          <Text>씽씽큐 뮤직(로고 미정)</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default BI;
