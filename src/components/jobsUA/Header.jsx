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
      Сергій Лехман
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
          ПРО СЕБЕ
        </AbsoluteCenter>
      </Box>
      <Text fontSize="md" textIndent={16}>
      Я прямий, простий і вмію посміятися над собою. Я зміг пропрацювати і вижити на окупованій території рік і дев’ять місяців, тому став більш стресостійким, сильнішим і адаптивним. Тепер я розумію, що дійсно люблю життя. Тому я вважаю, що людина з моїм досвідом здатна принести користь вашій компанії.
      </Text>
    </GridItem>
  );
};

export default Header;
