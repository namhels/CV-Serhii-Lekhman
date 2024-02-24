import {
  Box,
  GridItem,
  Divider,
  AbsoluteCenter,
  UnorderedList,
  ListItem,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';

import works from '../../db/worksJobs.json';
import educations from '../../db/educations.json';

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
        {works.map(
          ({ position, firm, years, description, titleDescription }) => (
            <ListItem key={position}>
              <Flex justifyContent="space-between" mt={2}>
                <Heading as="h3" size="md">
                  {position}
                </Heading>
                <Text fontSize="md" fontWeight="bold" color="#6c757d">{years}</Text>
              </Flex>
                <Heading as="h4" size="md" color="#6c757d">
                  {firm}
                </Heading>
              <Text mt={3} fontSize="md" fontWeight="bold" color="#6c757d">
                {titleDescription}
              </Text>
              <Text fontSize="md" fontWeight="bold" color="#6c757d">
                {description}
              </Text>
            </ListItem>
          )
        )}
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
          <ListItem key={title}>
            <Flex justifyContent="space-between">
              <Heading as="h4" size="md">
                {title}
              </Heading>
              <Text fontSize="md" fontWeight="bold" color="#6c757d">{years}</Text>
            </Flex>
            <Text fontSize="md">{description}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </GridItem>
  );
};

export default Main;

