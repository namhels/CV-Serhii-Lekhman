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
            <Link
              href="https://github.com/namhels/goit-react-hw-08-phonebook"
              isExternal
            >
              <Flex>
                <Heading as="h3" size="md">
                  Phonebook
                </Heading>
                <ListIcon as={AiFillGithub} ml="10px" />
              </Flex>
            </Link>
            <Text fontSize="md">
              [ REACT, REDUX TOOLKIT, PERSIST, AXIOS, STYLED-COMPONENTS, CHAKRA
              UI ]
            </Text>
          </Flex>
          <Text fontSize="md">Single project</Text>
          <Text fontSize="md">
            Application for add, delete, filter and store on server
          </Text>
        </ListItem>
        <ListItem>
          <Flex>
            <Link
              href="https://github.com/namhels/chess-react-typescript"
              isExternal
            >
              <Flex>
                <Heading as="h3" size="md">
                  Chess
                </Heading>
                <ListIcon as={AiFillGithub} ml="10px" />
              </Flex>
            </Link>
            <Text fontSize="md">[ REACT, TYPESCRIPT, CHAKRA UI ]</Text>
          </Flex>
          <Text fontSize="md">Single project</Text>
          <Text fontSize="md">Application for playing chess</Text>
        </ListItem>
        <ListItem>
          <Flex>
            <Link
              href="https://github.com/namhels/Filmoteka-single-project"
              isExternal
            >
              <Flex>
                <Heading as="h3" size="md">
                  Filmoteka
                </Heading>
                <ListIcon as={AiFillGithub} ml="10px" />
              </Flex>
            </Link>
            <Text fontSize="md">[ HTML, SASS, JS, REST API, AXIOS ]</Text>
          </Flex>
          <Text fontSize="md">Single project</Text>
          <Text fontSize="md">
            Project about searching movies, and adding favorite movies to a
            client personal library
          </Text>
        </ListItem>
        <ListItem>
          <Flex>
            <Link
              href="https://github.com/namhels/ice-cream--project-js"
              isExternal
            >
              <Flex>
                <Heading as="h3" size="md">
                  Ice Cream
                </Heading>
                <ListIcon as={AiFillGithub} ml="10px" />
              </Flex>
            </Link>
            <Text fontSize="md">[ HTML, SASS, JS, PARCEL ]</Text>
          </Flex>
          <Text fontSize="md">Team projeсt</Text>
          <Text fontSize="md">
            Ice Cream company site with a responsive layout
          </Text>
        </ListItem>
        <ListItem>
          <Flex>
            <Link href="https://github.com/namhels/Web-Studio" isExternal>
              <Flex>
                <Heading as="h3" size="md">
                  Web Studio
                </Heading>
                <ListIcon as={AiFillGithub} ml="10px" />
              </Flex>
            </Link>
            <Text fontSize="md">[ HTML, SASS, JS ]</Text>
          </Flex>
          <Text fontSize="md">Team project</Text>
          <Text fontSize="md">
            WebStudio company site with a responsive layout
          </Text>
        </ListItem>
      </UnorderedList>
      <Box position="relative" padding="5">
        <Divider borderBottomWidth="3px" borderColor="black" />
        <AbsoluteCenter
          fontSize="2xl"
          bg="purple.100"
          px="4"
          borderRadius="full"
        >
          WORK EXPERIENCE
        </AbsoluteCenter>
      </Box>
    </GridItem>
  );
};

export default Main;
