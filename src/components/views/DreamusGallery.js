import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const DreamusGallery = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [newReview, setNewReview] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    isOpen: isUploadOpen,
    onOpen: onUploadOpen,
    onClose: onUploadClose,
  } = useDisclosure();
  const {
    isOpen: isDetailOpen,
    onOpen: onDetailOpen,
    onClose: onDetailClose,
  } = useDisclosure();

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleAddImage = () => {
    if (newImage) {
      const imageURL = URL.createObjectURL(newImage);
      setImages([
        ...images,
        { src: imageURL, review: newReview, description: newDescription },
      ]);
      setNewImage(null);
      setNewReview("");
      setNewDescription("");
      onUploadClose();
    }
  };

  const openImageDetail = (image) => {
    setSelectedImage(image);
    onDetailOpen();
  };

  return (
    <Box p={4} flex='1' overflow='auto'>
      <Heading mb={4} textAlign='center'>
        갤러리
      </Heading>
      <Grid templateColumns='repeat(auto-fill, minmax(250px, 1fr))' gap={6}>
        {images.map((image, index) => (
          <GridItem
            key={index}
            onClick={() => openImageDetail(image)}
            cursor='pointer'
          >
            <Box border='1px solid gray'>
              <Image src={image.src} alt={`gallery-${index}`} />
              <Box p={2}>
                <Text fontWeight='bold'>{image.review}</Text>
                <Text>{image.description}</Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Button
        position='fixed'
        bottom='80px'
        right='20px'
        colorScheme='teal'
        onClick={onUploadOpen}
      >
        업로드
      </Button>

      <Modal isOpen={isUploadOpen} onClose={onUploadClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>사진 및 후기 업로드</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type='file' onChange={handleImageChange} />
            <Textarea
              placeholder='후기'
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              mt={2}
            />
            <Input
              placeholder='사진 설명'
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              mt={2}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleAddImage}>
              업로드
            </Button>
            <Button variant='ghost' onClick={onUploadClose}>
              취소
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {selectedImage && (
        <Modal isOpen={isDetailOpen} onClose={onDetailClose} size='xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>상세보기</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedImage.src} alt='Selected' mb={4} />
              <Text fontWeight='bold' fontSize='lg' mb={2}>
                {selectedImage.review}
              </Text>
              <Text>{selectedImage.description}</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' onClick={onDetailClose}>
                닫기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default DreamusGallery;
