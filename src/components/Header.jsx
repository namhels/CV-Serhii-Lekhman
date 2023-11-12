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
      color="black"
      borderTopRightRadius="30px"
    >
      <Heading as="h1" size="3xl" mb="14px">
        Serhii Lekhman
      </Heading>
      <Text as="i" fontSize="3xl" mt={6} fontWeight="700">
        Full Stack Developer
      </Text>
      <Box position="relative" padding="5">
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
      <Text fontSize="md" mt={2}>
        I'm a Full Stack Developer with strong analytical thinking and excellent
        basic training. I have good knowledge and practical experience at HTML,
        CSS, SASS, JavaScript, Next, Nest. Used React/Redux Toolkit as main tool of
        Front-end. Implemented RESTfull API's using Node.js. I am constantly
        improving my level as a specialist and I am looking for a company where
        I can be useful, become part of a team where I can use my knowledge
      </Text>
    </GridItem>
  );
};

export default Header;
