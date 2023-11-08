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
import projects from '../db/projects.json';
import works from '../db/works.json';
import educations from '../db/educations.json';

const Main = () => {
  return (
    <GridItem
      bg="gray.100"
      area={'main'}
      px={10}
      py={16}
      color="black"
      borderBottomRightRadius="30px"
    >
      <Box position="relative" padding="5">
        <Divider borderBottomWidth="3px" borderColor="black" />
        <AbsoluteCenter
          as="b"
          fontSize="2xl"
          bg="purple.100"
          px="4"
          borderRadius="full"
          borderWidth="3px"
          borderColor="cyan.100"
        >
          PROJECT EXPERIENCE
        </AbsoluteCenter>
      </Box>
      <UnorderedList spacing={4} mt={3}>
        {projects.map(({ href, heading, technologies, title, description }) => (
          <ListItem>
            <Flex justifyContent="space-between">
              <Link href={href} isExternal>
                <Flex alignItems="baseline">
                  <Heading as="h3" size="md">
                    {heading}
                  </Heading>
                  <ListIcon as={AiFillGithub} ml="10px" />
                </Flex>
              </Link>
              <Text fontSize="md">{technologies}</Text>
            </Flex>
            <Text fontSize="md">{title}</Text>
            <Text fontSize="md">{description}</Text>
          </ListItem>
        ))}
      </UnorderedList>
      <Box position="relative" padding="5" mt={10}>
        <Divider borderBottomWidth="3px" borderColor="black" />
        <AbsoluteCenter
          as="b"
          fontSize="2xl"
          bg="purple.100"
          px="4"
          borderRadius="full"
          borderWidth="3px"
          borderColor="cyan.100"
        >
          WORK EXPERIENCE
        </AbsoluteCenter>
      </Box>
      <UnorderedList spacing={4} mt={3}>
        {works.map(({ position, firm, years, description }) => (
          <ListItem>
            <Heading as="h3" size="md">
              {position}
            </Heading>
            <Flex justifyContent="space-between" mt={2}>
              <Heading as="h4" size="md">
                {firm}
              </Heading>
              <Text fontSize="md">{years}</Text>
            </Flex>
            <Text fontSize="md">{description}</Text>
          </ListItem>
        ))}
      </UnorderedList>
      <Box position="relative" padding="5" mt={10}>
        <Divider borderBottomWidth="3px" borderColor="black" />
        <AbsoluteCenter
          as="b"
          fontSize="2xl"
          bg="purple.100"
          px="4"
          borderRadius="full"
          borderWidth="3px"
          borderColor="cyan.100"
        >
          EDUCATION
        </AbsoluteCenter>
      </Box>
      <UnorderedList spacing={4} mt={3}>
        {educations.map(({ title, years, description }) => (
          <ListItem>
            <Flex justifyContent="space-between">
              <Heading as="h4" size="md">
                {title}
              </Heading>
              <Text fontSize="md">{years}</Text>
            </Flex>
            <Text fontSize="md">{description}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </GridItem>
  );
};

export default Main;
