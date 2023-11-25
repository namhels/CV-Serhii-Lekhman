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
  IconButton,
} from '@chakra-ui/react';

import { AiFillGithub } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';
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
        {projects.map(
          ({ href, hrefView, heading, technologies, title, description }) => (
            <ListItem key={heading}>
              <Flex justifyContent="space-between">
                <Flex alignItems="center">
                  <Link href={href} isExternal>
                    <Flex alignItems="center">
                      <ListIcon as={AiFillGithub} mr="5px" />
                      <Heading as="h3" size="md">
                        {heading}
                      </Heading>
                    </Flex>
                  </Link>
                  <Link href={hrefView} isExternal>
                    <IconButton
                      mx="8px"
                      isRound={true}
                      variant="outline"
                      colorScheme="black"
                      aria-label="View project"
                      boxSize="16px"
                      height="20px"
                      fontSize="16px"
                      icon={<FaRegEye />}
                    />
                  </Link>
                </Flex>
                <Text fontSize="md">{technologies}</Text>
              </Flex>
              <Text fontSize="md">{title}</Text>
              <Text fontSize="md">{description}</Text>
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
          WORK EXPERIENCE
        </AbsoluteCenter>
      </Box>
      <UnorderedList spacing={4} mt={3}>
        {works.map(
          ({ position, firm, years, description, titleDescription }) => (
            <ListItem key={position}>
              <Heading as="h3" size="md">
                {position}
              </Heading>
              <Flex justifyContent="space-between" mt={2}>
                <Heading as="h4" size="md">
                  {firm}
                </Heading>
                <Text fontSize="md">{years}</Text>
              </Flex>
              <Text mt={3} fontSize="md" fontWeight="bold">{titleDescription}</Text>
              <UnorderedList spacing={2}>
                {description.map(descr => (
                  <ListItem key={descr}>{descr}</ListItem>
                ))}
              </UnorderedList>
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

// {
//   "href": "https://github.com/namhels/ice-cream--project-js",
//   "hrefView": "https://namhels.github.io/ice-cream--project-js/",
//   "heading": "Ice Cream",
//   "technologies": "[ HTML, SASS, JS, PARCEL, RESPONSIVE/ADAPTIVE ]",
//   "title": "Team projeсt",
//   "description": "Ice Cream company site with a responsive/adaptive design"
// },
// {
//   "href": "https://github.com/namhels/Web-Studio",
//   "hrefView": "https://namhels.github.io/Web-Studio/",
//   "heading": "Web Studio",
//   "technologies": "[ HTML, SASS, JS, RESPONSIVE/ADAPTIVE ]",
//   "title": "Single project",
//   "description": "WebStudio company site with a responsive/adaptive design"
// }

// [
//   {
//     "position": "Front End Developer",
//     "firm": "Grand Soft",
//     "years": "2022 - 2023",
//     "TitleDescription": "Job description",
//     "description": []
//   },
//   {
//     "position": "Installer of metal-plastic structures",
//     "firm": "PE 'Radyuk' - Zaporizhzhia region, Ukraine",
//     "years": "2011 - 2021",
//     "description": "Installation of metal-plastic windows, doors, balconies, structures"
//   },
//   {
//     "position": "Social Inspector",
//     "firm": "DLSP, Chernihivka RA, Zaporizhzhia region, Ukraine",
//     "years": "2009 - 2010",
//     "description": "Protecting the rights and meeting the needs of low-income families"
//   }
// ]
