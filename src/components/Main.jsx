import {
  Box,
  GridItem,
  Divider,
  AbsoluteCenter,
  UnorderedList,
  ListItem,
  Heading,
  Link,
  ListIcon,
  Text,
  Flex,
} from '@chakra-ui/react';

import { AiFillGithub } from 'react-icons/ai';

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
      <UnorderedList mt={3}>
        <ListItem>
          <Flex>
            <Link href="https://www.github.com/namhels" isExternal>
              <Heading as="h3" size="md">
                Phonebook
              </Heading>
              <ListIcon as={AiFillGithub} />
            </Link>
            <Text
              fontSize="md"
              as="mark"
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'cyan.100' }}
            >
              [ REACT, REDUX TOOLKIT, PERSIST, AXIOS, STYLED-COMPONENTS, CHAKRA
              UI ]
            </Text>
          </Flex>
          <Text fontSize="md">
            Application for add, delete, filter and store on server.
          </Text>
        </ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
      </UnorderedList>
    </GridItem>
  );
};

export default Main;
