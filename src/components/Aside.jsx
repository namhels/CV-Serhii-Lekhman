import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

import { GiSmartphone } from 'react-icons/gi';
import { MdOutlineEmail, MdLocationPin } from 'react-icons/md';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

import SerhiiLekhman from '../images/SerhiiLekhman.jpg';

const Aside = () => {
  return (
    <GridItem bg="purple.100" area={'aside'} borderLeftRadius="30px">
      <Flex justify="center" pt="40px">
        <Box borderRadius="full" borderWidth="14px" borderColor="gray.100">
          <Box borderRadius="full" borderWidth="10px" borderColor="cyan.100">
            <Image
              borderRadius="full"
              boxSize="300px"
              objectFit="cover"
              src={SerhiiLekhman}
              alt="Serhii Lekhman"
            />
          </Box>
        </Box>
      </Flex>
      <Box pl={10} py={12} color="black">
        <Heading as="h2" size="lg" px={6} bg="gray.100" borderLeftRadius="full">
          CONTACTS
        </Heading>
        <List spacing={3} mt={4} pr={10}>
          <ListItem>
            <Link href="tel:+380955559063">
              <ListIcon as={GiSmartphone} />
              +38 095-555-90-63
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:8.lsv.888@gmail.com">
              <ListIcon as={MdOutlineEmail} />
              8.lsv.888@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.github.com/namhels" isExternal>
              <ListIcon as={AiFillGithub} />
              github.com/namhels
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/serhii-lekhman" isExternal>
              <ListIcon as={AiOutlineLinkedin} />
              linkedin.com/in/serhii-lekhman
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={MdLocationPin} />
            Ukraine, Zaporizhzhya
          </ListItem>
        </List>
        <Flex direction="column" mt={7}>
          <Heading
            as="h2"
            size="lg"
            px={6}
            bg="gray.100"
            borderLeftRadius="full"
          >
            TECH SKILLS
          </Heading>
          <UnorderedList spacing={3} mt={4} pr={10}>
            <ListItem>HTML, CSS, SASS</ListItem>
            <ListItem>Responsive/Adaptive design</ListItem>
            <ListItem>JavaScript, TypeScript</ListItem>
            <ListItem>React/Redux Toolkit, Persist</ListItem>
            <ListItem>REST API</ListItem>
            <ListItem>Webpack/Parcel</ListItem>
            <ListItem>Node.js, MongoDB, Postman</ListItem>
            <ListItem>Chakra UI, Material UI, Styled-Components</ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction="column" mt={7}>
          <Heading
            as="h2"
            size="lg"
            px={6}
            bg="gray.100"
            borderLeftRadius="full"
          >
            SOFT SKILLS
          </Heading>
          <UnorderedList spacing={3} mt={4} pr={10}>
            <ListItem>Strong analytical thinking</ListItem>
            <ListItem>Attention to details</ListItem>
            <ListItem>Teamwork</ListItem>
            <ListItem>Creativity</ListItem>
            <ListItem>Good communications</ListItem>
            <ListItem>Autonomous</ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction="column" mt={7}>
          <Heading
            as="h2"
            size="lg"
            px={6}
            bg="gray.100"
            borderLeftRadius="full"
          >
            LANGUAGES
          </Heading>
          <UnorderedList spacing={3} mt={4} pr={10}>
            <ListItem>English - intermediate</ListItem>
            <ListItem>Ukrainian - native</ListItem>
            <ListItem>Russian - native</ListItem>
          </UnorderedList>
        </Flex>
      </Box>
    </GridItem>
  );
};

export default Aside;
