import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

function PostDetail({ posts, deletePost }) {
  const { index } = useParams();
  const post = posts[index];
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleDelete = () => {
    if (password === post.password) {
      deletePost(index);
      navigate("/board");
    } else {
      setError("비밀번호가 틀렸습니다.");
    }
  };

  if (!post) {
    return <Text>게시글을 찾을 수 없습니다.</Text>;
  }

  return (
    <Box py={10} px={5}>
      <Heading size='md' mb={4}>
        게시글 상세보기
      </Heading>
      <VStack spacing={4} align='stretch'>
        <Text>
          <strong>이름(자녀):</strong> {post.name}
        </Text>
        <Text>
          <strong>연령(개월수):</strong> {post.ageInMonths}개월
        </Text>
        <Text>
          <strong>핸드폰번호:</strong> {post.phone}
        </Text>
        <Text>
          <strong>주소:</strong> {post.address} {post.detailedAddress}
        </Text>
        <Text>
          <strong>수업 희망 시간:</strong> {post.preferredTime}
        </Text>
        <Text>
          <strong>신청내용:</strong> {post.description}
        </Text>
        <FormControl>
          <FormLabel>비밀번호</FormLabel>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='비밀번호를 입력하세요'
          />
        </FormControl>
        {error && <Text color='red.500'>{error}</Text>}
        <Button colorScheme='red' onClick={handleDelete}>
          삭제
        </Button>
      </VStack>
    </Box>
  );
}

export default PostDetail;
