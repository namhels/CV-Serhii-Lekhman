import { Heading } from '@chakra-ui/react';

const HeadingAside = ({ children }) => {
  return (
    <Heading
      as="h2"
      w="100%"
      boxSizing="content-box"
      size="lg"
      pl={6}
      bg="gray.100"
      borderLeftRadius="full"
      borderTopWidth="3px"
      borderLeftWidth="3px"
      borderBottomWidth="3px"
      borderTopColor="cyan.100"
      borderLeftColor="cyan.100"
      borderBottomColor="cyan.100"
    >
      {children}
    </Heading>
  );
};

export default HeadingAside;
