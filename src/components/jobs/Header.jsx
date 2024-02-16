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
      py={16}
      // pb="21px"
      color="black"
      borderTopRightRadius="30px"
    >
      <Heading as="h1" size="3xl" mb="14px">
        Serhii Lekhman
      </Heading>
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
        I am straightforward, simple, and able to laugh at myself. I was able to work and survive in the occupied territory for one year and nine months, that’s why I became more stress-resistant, stronger and adaptive. Now I understand that I really love life. So I believe that a person with my experience is able to benefit your company.
      </Text>
    </GridItem>
  );
};

export default Header;
