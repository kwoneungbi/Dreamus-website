import React from "react";
import { Box, Text, Radio, RadioGroup, Stack } from "@chakra-ui/react";

function Question({ question, index, value, onChange }) {
  return (
    <Box mb={4}>
      <Text mb={2}>
        {index + 1}. {question}
      </Text>
      <RadioGroup onChange={(val) => onChange(index, val)} value={value}>
        <Stack direction='row'>
          {[0, 1, 2, 3, 4].map((num) => (
            <Radio key={num} value={num.toString()}>
              {num}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  );
}

export default Question;
