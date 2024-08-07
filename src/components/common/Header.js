import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Header() {
  const [dreamusOpen, setDreamusOpen] = useState(false);
  const [realizationOpen, setRealizationOpen] = useState(false);
  const [dreamusTooltipOpen, setDreamusTooltipOpen] = useState(false);

  return (
    <Box bg='gray.500' p={4}>
      <Flex justify='space-between' align='center'>
        <ChakraLink as={RouterLink} to='/' _hover={{ textDecoration: "none" }}>
          <Heading color='white'>Dreamus</Heading>
        </ChakraLink>
        <Flex>
          <Menu isOpen={dreamusOpen} onClose={() => setDreamusOpen(false)}>
            <MenuButton
              as={ChakraLink}
              onMouseEnter={() => setDreamusOpen(true)}
              onMouseLeave={() => setDreamusOpen(false)}
              color='white'
              mx={2}
            >
              드림어스
              <ChevronDownIcon />
            </MenuButton>
            <MenuList
              onMouseEnter={() => setDreamusOpen(true)}
              onMouseLeave={() => setDreamusOpen(false)}
            >
              <MenuItem as={RouterLink} to='/dreamus/introduction'>
                드리머스 소개
              </MenuItem>
              <MenuItem as={RouterLink} to='/dreamus/ceo'>
                씨이오 인사
              </MenuItem>
            </MenuList>
          </Menu>
          <ChakraLink as={RouterLink} to='/bi' color='white' mx={2}>
            BI
          </ChakraLink>
          <Menu
            isOpen={realizationOpen}
            onClose={() => setRealizationOpen(false)}
          >
            <MenuButton
              as={ChakraLink}
              onMouseEnter={() => setRealizationOpen(true)}
              onMouseLeave={() => setRealizationOpen(false)}
              color='white'
              mx={2}
            >
              꿈의 실현
              <ChevronDownIcon />
            </MenuButton>
            <MenuList
              onMouseEnter={() => setRealizationOpen(true)}
              onMouseLeave={() => setRealizationOpen(false)}
            >
              <MenuItem as={RouterLink} to='/realization/singsingq-music'>
                씽씽큐 뮤직
              </MenuItem>
              <MenuItem as={RouterLink} to='/realization/drum-nanta-janggu'>
                쿵!치!타드럼, 난타, 장구
              </MenuItem>
              <MenuItem as={RouterLink} to='/realization/lululala-piano'>
                룰루랄라 피아노
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to='/realization/think-playground-dingdong'
              >
                생각놀이터 띵동
              </MenuItem>
              <MenuItem as={RouterLink} to='/realization/momfany-music'>
                맘펴니 뮤직
              </MenuItem>
            </MenuList>
          </Menu>
          <ChakraLink as={RouterLink} to='/careers' color='white' mx={2}>
            함께일해요
          </ChakraLink>
          <Tooltip
            label='듣고 보는 드림어스'
            isOpen={dreamusTooltipOpen}
            onOpen={() => setDreamusTooltipOpen(true)}
            onClose={() => setDreamusTooltipOpen(false)}
          >
            <ChakraLink
              as={RouterLink}
              to='/dreamus-gallery'
              color='white'
              mx={2}
              onMouseEnter={() => setDreamusTooltipOpen(true)}
              onMouseLeave={() => setDreamusTooltipOpen(false)}
            >
              듣.보.드
            </ChakraLink>
          </Tooltip>
          <ChakraLink as={RouterLink} to='/class' color='white' mx={2}>
            수업 신청
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
