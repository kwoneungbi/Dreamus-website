import React from "react";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function BoardComponent({ posts = [] }) {
  return (
    <Box py={10} px={5}>
      <Heading size='md' mb={4}>
        게시판
      </Heading>
      {posts.length === 0 ? (
        <Text>아직 게시글이 없습니다.</Text>
      ) : (
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>이름(자녀)</Th>
              <Th>연령(개월수)</Th>
              <Th>핸드폰번호</Th>
              <Th>주소</Th>
              <Th>수업 희망 시간</Th>
              <Th>신청내용</Th>
              <Th>상세보기</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.map((post, index) => (
              <Tr key={index}>
                <Td>{post.name}</Td>
                <Td>{post.ageInMonths}개월</Td>
                <Td>{post.phone}</Td>
                <Td>
                  {post.address} {post.detailedAddress}
                </Td>
                <Td>{post.preferredTime}</Td>
                <Td>{post.description}</Td>
                <Td>
                  <Link as={RouterLink} to={`/post/${index}`}>
                    상세보기
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
}

export default BoardComponent;
