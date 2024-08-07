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
import DaumPostcode from "react-daum-postcode";

const ClassScenes = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postalCode: "",
    address: "",
    detailedAddress: "",
    birthYear: "",
    birthMonth: "",
    preferredTime: "",
    ageInMonths: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isBirthYearValid, setIsBirthYearValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  }, [formData]);

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
    // Handle form submission logic here
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
      m='30px'
      py={10}
      px={5}
      borderWidth={1}
      borderRadius='lg'
      borderColor='gray.200'
      boxShadow='lg'
    >
      <Heading size='md' mb={4}>
        수업 신청서
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
              placeholder='출생년도 (예: 2021)'
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
          <Textarea
            name='preferredTime'
            placeholder='평일 요일/시간까지 입력'
            value={formData.preferredTime}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          colorScheme='blue'
          type='submit'
          disabled={!isFormValid}
          w='full'
        >
          신청하기
        </Button>
      </VStack>

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
};

export default ClassScenes;
