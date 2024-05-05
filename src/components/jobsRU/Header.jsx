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
      Сергей Лехман
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
          О СЕБЕ
        </AbsoluteCenter>
      </Box>
      <Text fontSize="md" textIndent={16}>
      Я прямолинеен, прост и умею смеяться над собой. За последний год я изменил три страны проживания, поэтому стал более стрессоустойчивым, сильным и адаптивным. Теперь я понимаю, что очень люблю жизнь. Поэтому я считаю, что человек с моим опытом способен принести пользу вашей компании.
      </Text>
    </GridItem>
  );
};

export default Header;
