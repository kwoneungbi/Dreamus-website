import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";

function FormComponent({ addPost }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postalCode: "",
    address: "",
    detailedAddress: "",
    birthYear: "",
    birthMonth: "",
    preferredTime: "",
    description: "",
    password: "",
    ageInMonths: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isBirthYearValid, setIsBirthYearValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    setIsFormValid(allFieldsFilled && isBirthYearValid);
  }, [formData, isBirthYearValid]);

  useEffect(() => {
    const calculateAgeInMonths = () => {
      const { birthYear, birthMonth } = formData;
      if (birthYear.length === 4 && birthMonth) {
        const birthDate = new Date(`${birthYear}-${birthMonth}-01`);
        const today = new Date();
        const ageInMonths =
          (today.getFullYear() - birthDate.getFullYear()) * 12 +
          (today.getMonth() - birthDate.getMonth());
        setFormData((prevData) => ({
          ...prevData,
          ageInMonths: ageInMonths >= 0 ? ageInMonths.toString() : "",
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          ageInMonths: "",
        }));
      }
    };
    calculateAgeInMonths();
  }, [formData.birthYear, formData.birthMonth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "birthYear" && (value.length > 4 || isNaN(value))) {
      setIsBirthYearValid(false);
    } else {
      setIsBirthYearValid(true);
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({
      name: "",
      phone: "",
      postalCode: "",
      address: "",
      detailedAddress: "",
      birthYear: "",
      birthMonth: "",
      preferredTime: "",
      description: "",
      password: "",
      ageInMonths: "",
    });
    navigate("/board");
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setFormData((prevData) => ({
      ...prevData,
      postalCode: data.zonecode,
      address: fullAddress,
    }));
    setIsModalOpen(false);
  };

  return (
    <Box
      py={10}
      px={5}
      borderWidth={1}
      borderRadius='lg'
      borderColor='gray.200'
      boxShadow='lg'
    >
      <Heading size='md' mb={4}>
        신청서 양식
      </Heading>
      <VStack spacing={4} as='form' onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>이름(자녀)</FormLabel>
          <Input
            name='name'
            placeholder='이름(자녀)'
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>핸드폰번호</FormLabel>
          <Input
            name='phone'
            placeholder='핸드폰번호'
            value={formData.phone}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>주소</FormLabel>
          <HStack>
            <Input
              name='postalCode'
              placeholder='우편번호'
              value={formData.postalCode}
              onChange={handleChange}
              flex='1'
            />
            <Button
              colorScheme='gray'
              variant='outline'
              onClick={() => setIsModalOpen(true)}
            >
              우편번호검색
            </Button>
          </HStack>
          <Input
            name='address'
            placeholder='주소'
            value={formData.address}
            onChange={handleChange}
            mt={2}
          />
          <Input
            name='detailedAddress'
            placeholder='나머지주소입력'
            value={formData.detailedAddress}
            onChange={handleChange}
            mt={2}
          />
        </FormControl>

        <FormControl isRequired isInvalid={!isBirthYearValid}>
          <FormLabel>연령(개월수)</FormLabel>
          <HStack>
            <Input
              name='birthYear'
              placeholder='출생년도 (예: 1998)'
              value={formData.birthYear}
              onChange={handleChange}
              flex='1'
            />
            <Text>년</Text>
            <Input
              name='birthMonth'
              placeholder='출생월 (예: 11)'
              value={formData.birthMonth}
              onChange={handleChange}
              flex='1'
            />
            <Text>월</Text>
          </HStack>
          {!isBirthYearValid && (
            <FormHelperText color='red.500'>
              출생년도는 4자리 숫자여야 합니다.
            </FormHelperText>
          )}
          <Input
            name='ageInMonths'
            placeholder='개월'
            value={formData.ageInMonths}
            readOnly
            mt={2}
          />
          <FormHelperText>출생년, 월 입력시 자동계산 됩니다.</FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>수업 희망 시간</FormLabel>
          <Input
            name='preferredTime'
            placeholder='평일 요일/시간까지 입력'
            value={formData.preferredTime}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>신청내용</FormLabel>
          <Textarea
            name='description'
            placeholder='신청내용'
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>비밀번호</FormLabel>
          <Input
            name='password'
            placeholder='비밀번호'
            type='password'
            value={formData.password}
            onChange={handleChange}
          />
          <FormHelperText>삭제 및 게시글 보기에 필요합니다.</FormHelperText>
        </FormControl>

        <Button
          colorScheme='gray'
          type='submit'
          disabled={!isFormValid}
          w='full'
        >
          신청하기
        </Button>
      </VStack>
      <Text mt={4} fontSize='sm'>
        ㈜에스와이에듀는(이하 '회사'는) 고객님의 개인정보를 중요시하며,
        정보통신망 이용촉진 및 정보보호에 관한 법률을 준수하고 있습니다.
      </Text>
      <Text mt={1} fontSize='sm'>
        회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한
        용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가
        취해지고 있는지 알려드립니다.
      </Text>
      <Text mt={1} fontSize='sm'>
        회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는
        개별공지)을 통하여 공지할 것입니다.
      </Text>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>우편번호 검색</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DaumPostcode onComplete={handleComplete} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={() => setIsModalOpen(false)}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default FormComponent;
