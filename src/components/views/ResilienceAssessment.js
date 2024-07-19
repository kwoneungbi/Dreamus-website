import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Input,
  RadioGroup,
  Radio,
  Stack,
  HStack,
} from "@chakra-ui/react";
import FormComponent from "../forms/FormComponent";

const questions = [
  "아이는 화가 났을 때 큰 소리로 울지 않고 차분해지려 해요.",
  "아이는 장난감이 망가졌을 때 다른 장난감으로 놀기를 이어가요.",
  "아이는 기분이 나쁘더라도 금방 기분을 바꿔 웃어요.",
  "아이는 자신의 감정을 잘 표현하려고 노력해요.",
  "아이는 새로운 사람을 만났을 때 선뜻 다가가려고 해요.",
  "아이는 친구와 놀이할 때 장난감을 나눠서 잘 놀아요.",
  "아이는 친구가 울 때 다가가서 위로하려고 해요.",
  "아이는 형제나 친구와 갈등 후 금방 화해하고 다시 놀아요.",
  "아이는 다른 아이들과 함께 놀이를 계획하고 실행할수 있어요.",
  "아이는 새로운 놀이를 시도할 때 두려워하지 않아요.",
  "아이는 자신의 성취 (예 – 블록쌓기)에 자랑스러워 해요.",
  "아이는 주변 환경을 탐색하는 데 주저하지 않아요.",
  "아이는 놀이 중 발생하는 작은 문제를 스스로 해결하려고 해요.",
  "아이는 자신의 이름을 들으면 기뻐하고 반응해요.",
  "아이는 칭찬을 받으면 웃거나 기뻐하는 모습을 보여요.",
  "아이는 자신의 그림이나 작품을 보여주기를 좋아해요.",
  "아이는 혼자서 놀이를 잘 마쳤을 때 자신감을 보여요.",
  "아이는 놀이 중에 피곤해지면 스스로 쉬려고 해요.",
];

const resultDescriptions = {
  ESPA: {
    title: "희망찬 탐험가 (Hopeful Explorer)",
    character: "모모 (모모)",
    description:
      "이 유형의 아이는 스트레스 상황에서도 차분하게 감정을 조절하며, 문제를 해결하는 데 적극적이고, 다른 아이들과 잘 어울리며, 스스로 목표를 세우고 달성하는 능력이 뛰어납니다.",
    support: [
      "강점 강화: 다양한 문제 해결 활동과 모험적인 놀이를 제공하여 아이의 탐구심과 자기주도성을 더욱 키워줍니다.",
      "보완점: 지속적인 긍정적 강화와 지지적인 환경을 유지해주면 됩니다.",
    ],
  },
  eSPA: {
    title: "도전적인 해결사 (Challenging Solver)",
    character: "피터 팬 (피터 팬)",
    description:
      "이 유형의 아이는 감정 조절에 어려움을 겪을 수 있지만, 문제 해결 능력과 사회성이 뛰어나며, 자기주도적으로 행동합니다.",
    support: [
      "감정 조절: 감정을 표현할 수 있는 다양한 방법을 가르치고, 차분하게 할 수 있는 활동(예: 명상, 심호흡)을 가르칩니다.",
      "강점 강화: 문제 해결 활동에서 성공 경험을 많이 쌓을 수 있도록 도와줍니다.",
    ],
  },
  EsPA: {
    title: "독립적인 사색가 (Independent Thinker)",
    character: "셜록 홈즈 (셜록홈즈)",
    description:
      "이 유형의 아이는 감정 조절과 문제 해결 능력은 우수하지만, 사회적 상호작용에서 어려움을 겪을 수 있습니다.",
    support: [
      "사회성: 그룹 놀이와 사회적 활동에 참여하도록 독려하고, 친구들과의 상호작용을 촉진하는 환경을 마련해줍니다.",
      "강점 강화: 아이가 혼자서도 성취감을 느낄 수 있는 창의적인 활동을 제공합니다.",
    ],
  },
  ESPa: {
    title: "사회적 해결사 (Social Solver)",
    character: "해리 포터 (해리 포터)",
    description:
      "이 유형의 아이는 감정 조절과 문제 해결 능력이 뛰어나고, 사회성도 높지만, 자기주도성에서 어려움을 겪을 수 있습니다.",
    support: [
      "자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.",
      "강점 강화: 사회적 상호작용과 문제 해결 과제를 통해 성취감을 느낄 수 있도록 합니다.",
    ],
  },
  EspA: {
    title: "사회적 탐구자 (Social Explorer)",
    character: "빨간 모자 소녀 (빨간모자와 늑대)",
    description:
      "이 유형의 아이는 감정 조절과 사회성은 우수하지만, 문제 해결과 자기주도성에서 어려움을 겪을 수 있습니다.",
    support: [
      "문제 해결: 문제 해결 활동과 논리적인 사고를 촉진하는 놀이를 제공합니다.",
      "자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.",
      "강점 강화: 사회적 활동에서 리더십 역할을 맡길 수 있는 기회를 줍니다.",
    ],
  },
  espA: {
    title: "조용한 지도자 (Quiet Leader)",
    character: "신데렐라 (신데렐라)",
    description:
      "이 유형의 아이는 전반적으로 어려움을 겪을 수 있지만, 자기주도적으로 행동하는 데 강점을 보입니다.",
    support: [
      "전반적인 지원: 전반적으로 모든 영역에서 지원이 필요하므로, 꾸준한 지지와 격려가 필요합니다.",
      "감정 조절: 감정을 표현하고 관리하는 방법을 가르칩니다.",
      "문제 해결: 문제 해결 전략을 단계적으로 가르칩니다.",
      "사회성: 사회적 기술을 키우기 위한 활동에 참여시킵니다.",
    ],
  },
  ESpA: {
    title: "차분한 지도자 (Calm Leader)",
    character: "엘사 (겨울왕국)",
    description:
      "이 유형의 아이는 감정 조절과 자기주도성에서 강점을 보이지만, 문제 해결과 사회성에서 어려움을 겪을 수 있습니다.",
    support: [
      "문제 해결: 논리적 사고와 문제 해결 기술을 가르칩니다.",
      "사회성: 친구들과의 상호작용을 촉진하는 활동을 제공합니다.",
      "강점 강화: 자기주도적인 프로젝트를 통해 리더십을 키워줍니다.",
    ],
  },
  eSPa: {
    title: "사교적인 도전가 (Social Challenger)",
    character: "피노키오 (피노키오)",
    description:
      "이 유형의 아이는 감정 조절과 문제 해결에서 어려움을 겪을 수 있지만, 사회성과 자기주도성에서 강점을 보입니다.",
    support: [
      "감정 조절: 감정 관리 전략을 가르치고, 감정을 표현하는 방법을 알려줍니다.",
      "문제 해결: 논리적 사고를 촉진하는 놀이와 활동을 제공합니다.",
      "강점 강화: 사회적 리더십을 발휘할 수 있는 활동에 참여시킵니다.",
    ],
  },
  esPA: {
    title: "독립적인 해결사 (Independent Solver)",
    character: "알라딘 (알라딘)",
    description:
      "이 유형의 아이는 감정 조절과 사회성에서 어려움을 겪을 수 있지만, 문제 해결과 자기주도성에서 강점을 보입니다.",
    support: [
      "감정 조절: 감정을 표현하고 관리하는 방법을 가르칩니다.",
      "사회성: 협동 놀이와 그룹 활동을 통해 사회적 기술을 키웁니다.",
      "강점 강화: 독립적인 문제 해결 활동을 통해 성취감을 느낄 수 있도록 합니다.",
    ],
  },
  ESpa: {
    title: "차분한 문제 해결사 (Calm Solver)",
    character: "앨리스 (이상한 나라의 앨리스)",
    description:
      "이 유형의 아이는 감정 조절과 문제 해결에서 강점을 보이지만, 사회성과 자기주도성에서 어려움을 겪을 수 있습니다.",
    support: [
      "사회성: 친구들과의 상호작용을 촉진하는 활동을 제공합니다.",
      "자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.",
      "강점 강화: 문제 해결 과제를 통해 성취감을 느낄 수 있도록 합니다.",
    ],
  },
  esPa: {
    title: "도전적인 탐구자 (Challenging Explorer)",
    character: "잭 (잭과 콩나무)",
    description:
      "이 유형의 아이는 문제 해결에서 강점을 보이지만, 감정 조절, 사회성, 자기주도성에서 어려움을 겪을 수 있습니다.",
    support: [
      "감정 조절: 감정을 표현하고 관리하는 방법을 가르칩니다.",
      "사회성: 친구들과의 상호작용을 촉진하는 활동을 제공합니다.",
      "자기주도성: 자기주도적으로 목표를 설정하고 성취할 수 있는 기회를 줍니다.",
      "강점 강화: 다양한 문제 해결 활동을 통해 성취감을 느낄 수 있도록 합니다.",
    ],
  },
  Espa: {
    title: "차분한 탐구자 (Calm Explorer)",
    character: "팅커벨 (피터 팬)",
    description:
      "이 유형의 아이는 감정 조절에서 강점을 보이지만, 나머지 세 요소에서 어려움을 겪습니다.",
    support: [
      "문제 해결: 논리적 사고를 촉진하는 놀이와 활동을 제공합니다.",
      "사회성: 사회적 상호작용을 촉진하는 활동에 참여시킵니다.",
      "자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.",
      "강점 강화: 감정 조절 능력을 유지하면서 다른 영역에서의 지원을 강화합니다.",
    ],
  },
  espa: {
    title: "전반적인 지원이 필요한 아이 (Child in Need of Support)",
    character: "찰리 브라운 (찰리 브라운)",
    description:
      "이 유형의 아이는 전반적으로 지원이 많이 필요합니다. 특히 감정 조절, 문제 해결, 사회적 기술, 자기주도성 모두에서 지원이 필요합니다.",
    support: [
      "감정 조절: 감정을 표현하고 관리하는 방법을 가르칩니다.",
      "문제 해결: 문제 해결 전략을 단계적으로 가르칩니다.",
      "사회성: 사회적 기술을 키우기 위한 활동에 참여시킵니다.",
      "자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.",
      "전반적인 지원: 지속적인 지지와 긍정적인 강화, 다양한 활동을 통해 전반적인 능력을 키웁니다.",
    ],
  },
  eSpA: {
    title: "조용한 해결사 (Quiet Solver)",
    character: "도라에몽 (도라에몽)",
    description:
      "이 유형의 아이는 감정 조절과 문제 해결에서 강점을 보이지만, 사회성과 자기주도성에서 어려움을 겪을 수 있습니다.",
    support: [
      "사회성: 친구들과의 상호작용을 촉진하는 활동을 제공합니다.",
      "자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.",
      "강점 강화: 문제 해결 과제를 통해 성취감을 느낄 수 있도록 합니다.",
    ],
  },
  EsPa: {
    title: "차분한 지도자 (Calm Leader)",
    character: "모글리 (정글북)",
    description:
      "이 유형의 아이는 감정 조절과 사회성에서 강점을 보이지만, 문제 해결과 자기주도성에서 어려움을 겪을 수 있습니다.",
    support: [
      "문제 해결: 논리적 사고와 문제 해결 기술을 가르칩니다.",
      "자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.",
      "강점 강화: 사회적 활동에서 리더십 역할을 맡길 수 있는 기회를 줍니다.",
    ],
  },
};

const getCategoryType = (answers, start, end, highType, lowType) => {
  let countLow = 0;
  let countHigh = 0;

  for (let i = start; i <= end; i++) {
    if (parseInt(answers[i], 10) <= 2) countLow++;
    if (parseInt(answers[i], 10) >= 3) countHigh++;
  }

  return countHigh > countLow ? highType : lowType;
};

function ResilienceAssessment({ addPost }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [result, setResult] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [childInfo, setChildInfo] = useState({
    name: "",
    age: "",
    gender: "",
    date: "",
    guardian: "",
  });

  const handleAnswerChange = (index, value) => {
    if (
      !childInfo.name ||
      !childInfo.age ||
      !childInfo.gender ||
      !childInfo.date ||
      !childInfo.guardian
    ) {
      alert(
        "먼저 아이의 이름, 나이, 성별, 측정 날짜, 측정 인을 입력해 주세요."
      );
      return;
    }
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setChildInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const allQuestionsAnswered = answers.every((answer) => answer !== "");

  const handleSubmit = () => {
    if (!allQuestionsAnswered) {
      alert("모든 질문에 답변해 주세요.");
      return;
    }

    const erType = getCategoryType(answers, 0, 3, "E", "e");
    const scType = getCategoryType(answers, 4, 8, "S", "s");
    const psType = getCategoryType(answers, 9, 12, "P", "p");
    const saType = getCategoryType(answers, 13, 17, "A", "a");

    const resilienceType = `${erType}${scType}${psType}${saType}`;
    setResult(resilienceType);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <Box py={10} px={5}>
      <Heading>안녕하세요! 유아에게 긍정창의력을 심어주는 띵동입니다.</Heading>
      <Text mt={4}>
        우리 아이 회복탄력성은 어느 정도일까요? 성향은 어떨까요? 아래 18문항을
        체크해 주세요.
      </Text>
      <Text>
        우리 아이 회복탄력성 유형을 분석해서 만화 캐릭터로 보여 드려요^^
      </Text>

      <VStack align='start' spacing={4} mt={4}>
        <HStack spacing={2} align='center'>
          <Text width='150px'>아이의 이름:</Text>
          <Input
            name='name'
            placeholder='아이의 이름'
            value={childInfo.name}
            onChange={handleInfoChange}
          />
        </HStack>
        <HStack spacing={2} align='center'>
          <Text width='150px'>아이의 나이:</Text>
          <Input
            name='age'
            placeholder='아이의 나이'
            value={childInfo.age}
            onChange={handleInfoChange}
          />
        </HStack>
        <HStack spacing={2} align='center'>
          <Text width='150px'>아이의 성별:</Text>
          <Input
            name='gender'
            placeholder='아이의 성별'
            value={childInfo.gender}
            onChange={handleInfoChange}
          />
        </HStack>
        <HStack spacing={2} align='center'>
          <Text width='150px'>측정 날짜:</Text>
          <Input
            name='date'
            placeholder='측정 날짜'
            value={childInfo.date}
            onChange={handleInfoChange}
          />
        </HStack>
        <HStack spacing={2} align='center'>
          <Text width='150px'>측정 인:</Text>
          <Input
            name='guardian'
            placeholder='측정 인 (엄마, 아빠, 기타 보호자)'
            value={childInfo.guardian}
            onChange={handleInfoChange}
          />
        </HStack>

        <Heading mt={10} size='lg'>
          다음 질문에 대해 해당하는 정도를 선택해주세요.
        </Heading>
        <Text>
          (0.전혀 아니다, 1: 거의 아니다, 2: 때때로 그렇다. 3: 자주 그렇다. 4
          항상 그렇다)
        </Text>

        {questions.map((question, index) => (
          <Box mb={4} key={index}>
            <Text mb={2}>
              {index + 1}. {question}
            </Text>
            <RadioGroup
              onChange={(val) => handleAnswerChange(index, val)}
              value={answers[index]}
            >
              <Stack direction='row'>
                {[0, 1, 2, 3, 4].map((num) => (
                  <Radio key={num} value={num.toString()}>
                    {num}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Box>
        ))}

        <Button
          colorScheme='gray'
          disabled={!allQuestionsAnswered}
          onClick={handleSubmit}
        >
          결과 보기
        </Button>

        {result && (
          <Box mt={4}>
            <Text fontSize='xl'>유아의 회복탄력성 유형은 {result}입니다.</Text>
            <Text mt={4}>{resultDescriptions[result]?.title}</Text>
            <Text mt={2}>캐릭터: {resultDescriptions[result]?.character}</Text>
            <Text mt={2}>{resultDescriptions[result]?.description}</Text>
            <Text mt={2}>지원 방법:</Text>
            {resultDescriptions[result]?.support.map((item, index) => (
              <Text key={index} mt={2}>
                {item}
              </Text>
            ))}
            <Text mt={4}>우리 아이의 마음근력을 더 키워주고 싶으신가요?</Text>
            <Text>지금 띵동의 티티쌤과 상의하세요.</Text>
            <Button colorScheme='gray' mt={2} onClick={handleShowForm}>
              띵동 신청하기
            </Button>
          </Box>
        )}

        {showForm && (
          <Box mt={4}>
            <FormComponent addPost={addPost} />
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export default ResilienceAssessment;
