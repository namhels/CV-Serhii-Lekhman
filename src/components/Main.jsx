import { Box, GridItem, Divider, AbsoluteCenter } from '@chakra-ui/react';

const Main = () => {
  return (
    <GridItem
      bg="gray.100"
      area={'main'}
      px={10}
      pt={16}
      color="black"
      borderBottomRightRadius="30px"
    >
      <Box position="relative" padding="5">
        <Divider borderBottomWidth="3px" borderColor="black" />
        <AbsoluteCenter
          fontSize="2xl"
          bg="purple.100"
          px="4"
          borderRadius="full"
        >
          PROJECT EXPERIENCE
        </AbsoluteCenter>
      </Box>
    </GridItem>
  );
};

export default Main;
