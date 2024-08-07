import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const Momfany_Music = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW='container.md' mt={10}>
      <Heading as='h2' size='lg' textAlign='center' mb={4} color='purple.500'>
        이럴 때! 맘 편히!!
      </Heading>

      <SimpleGrid columns={[1, null, 1]} spacing={6} mb={10}>
        <Text fontSize='xl' color='purple.700'>
          1. 오늘은 뭐하고 놀아주나 고민될 때
        </Text>
        <Text fontSize='xl' color='purple.700'>
          2. 음악수업을 격주 혹은 이벤트로 하고 싶을 때
        </Text>
        <Text fontSize='xl' color='purple.700'>
          3. 아이들이 활동하는 시간이 짧아서 아쉬울 때
        </Text>
        <Text fontSize='xl' color='purple.700'>
          4. 원하는 수업 시간을 맞추기 힘들 때
        </Text>
        <Text fontSize='xl' color='purple.700'>
          5. 법규상 특활이 불가능한 어린 연령대에 대한 우리 원만의 특색을 갖추고
          싶을 때
        </Text>
      </SimpleGrid>

      <Heading as='h3' size='lg' mb={4}>
        맘펴니 뮤직 수업영상 (만2세 친구들) - 사진을 클릭하시면 동영상을 재생할
        수 있습니다.
      </Heading>

      <Box textAlign='center' mb={10}>
        <Image
          src='/mnt/data/image.png'
          alt='수업 영상 미리보기'
          cursor='pointer'
          onClick={onOpen}
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={0}>
            <Box
              as='iframe'
              src='https://www.youtube.com/embed/영상ID'
              width='100%'
              height='400px'
              allowFullScreen
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Heading as='h2' size='lg' textAlign='center' mb={4} color='pink.500'>
        맘펴니는 이렇게 만들었습니다.
      </Heading>

      <SimpleGrid columns={[1, null, 4]} spacing={4} mb={10} textAlign='center'>
        <Box>
          <Text fontSize='lg' fontWeight='bold'>
            1. 기존 수업보다 2배 긴 시간
          </Text>
          <Image src='/mnt/data/image1.png' alt='기존 수업보다 2배 긴 시간' />
        </Box>
        <Box>
          <Text fontSize='lg' fontWeight='bold'>
            2. 아이들의 시간에 맞춰 아무때나
          </Text>
          <Image
            src='/mnt/data/image2.png'
            alt='아이들의 시간에 맞춰 아무때나'
          />
        </Box>
        <Box>
          <Text fontSize='lg' fontWeight='bold'>
            3. 맘펴니 대표의 수업 진행 영상
          </Text>
          <Image
            src='/mnt/data/image3.png'
            alt='맘펴니 대표의 수업 진행 영상'
          />
        </Box>
        <Box>
          <Text fontSize='lg' fontWeight='bold'>
            4. 15년 이상 유아교육에 몸담은 연구진이 만든 교구와 음원
          </Text>
          <Image src='/mnt/data/image4.png' alt='연구진이 만든 교구와 음원' />
        </Box>
      </SimpleGrid>

      <Box textAlign='center' mb={10}>
        <Image
          src='/images/char1.png'
          alt='Background'
          width='100px'
          height='auto'
        />
        <Box>
          <Heading as='h3' size='lg' color='yellow.400' bg='pink.600' p={2}>
            맘펴니 뮤직 어떻게 진행하나요?
          </Heading>
          <Text fontSize='xl' color='yellow.400' bg='pink.600' p={2}>
            시간 및 요일 결정 {"->"} 교구와 영상 전달 {"->"} 영상을 보며
            자유롭게 음악놀이 {"->"} 수거
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Momfany_Music;
