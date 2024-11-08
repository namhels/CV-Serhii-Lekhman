import {
  AbsoluteCenter,
  Box,
  Divider,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <GridItem
      bg="cyan.100"
      area={'header'}
      px={10}
      pt={16}
      pb="21px"
      color="black"
      borderTopRightRadius="30px"
    >
      <Heading as="h1" size="3xl" mb="14px">
        Serhii Lekhman
      </Heading>
      <Text as="i" fontSize="3xl" mt={6} fontWeight="700">
        Full Stack Developer
      </Text>
      <Box position="relative" padding="5" mb={6}>
        <Divider borderBottomWidth="3px" borderColor="black" />
        <AbsoluteCenter
          as="b"
          fontSize="2xl"
          bg="gray.100"
          px="4"
          borderRadius="full"
          borderWidth="3px"
          borderColor="purple.100"
        >
          SUMMARY
        </AbsoluteCenter>
      </Box>
      <Text fontSize="md" textIndent={16}>
        I am a full-stack developer. I have good knowledge and practical experience at HTML, CSS, SASS , BEM, JavaScript, TypeScript, Next, Nest, React, Redux Toolkit, Vue, RESTfull API, Node.js.
      </Text>
      <Text fontSize="md" textIndent={16}>
        I am straightforward, simple, and able to laugh at myself. Over the past year, I have changed three countries of residence, so I have become more stress-resistant, strong and adaptive. Now I understand that I really love life. So I believe that a person with my experience is able to benefit your company.
      </Text>
    </GridItem>
  );
};

export default Header;

// {
//   "position": "Front End Developer",
//   "firm": "at Grand Soft",
//   "years": "2022 - 2023",
//   "titleDescription": "Job description:",
//   "description": [
//     "Development, support and improvement of functionality of web applications using React, Vue.",
//     "Participation in the design and implementation of responsive/adaptive design.",
//     "Interaction with backend developers for integration with backend services.",
//     "Interaction with designers to implement design concepts in the web interface.",
//     "Participation in the design and implementation of the front-end architecture.",
//     "Performance optimization and UX/UI improvements."
//   ]
// },
