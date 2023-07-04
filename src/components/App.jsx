import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { GiSmartphone } from 'react-icons/gi';
import { MdOutlineEmail, MdLocationPin } from 'react-icons/md';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

import SerhiiLekhman from '../images/SerhiiLekhman.jpg';

export const App = () => {
  return (
    <Flex justify="center">
      <Grid
        templateAreas={`"aside header"
                      "aside main"`}
        templateRows={'370px 1fr'}
        templateColumns={'370px 1fr'}
        w="1200px"
      >
        <GridItem bg="purple.100" area={'aside'}>
          <Flex justify="center" pt="40px">
            <Avatar
              w="300px"
              h="300px"
              name="Serhii Lekhman"
              src={SerhiiLekhman}
              border="5px"
              borderColor="gray.200"
            />
          </Flex>
          <Flex direction="column" align="start" pl={10} py={12} color="black">
            <Flex direction="column">
              <Heading as="h2" size="lg">
                Contacts
              </Heading>
              <List spacing={3} mt={4}>
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
                  <Link
                    href="https://www.linkedin.com/in/serhii-lekhman"
                    isExternal
                  >
                    <ListIcon as={AiOutlineLinkedin} />
                    linkedin.com/in/serhii-lekhman
                  </Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdLocationPin} />
                  Ukraine, Zaporizhzhya
                </ListItem>
              </List>
            </Flex>
            <Flex direction="column" mt={7}>
              <Heading as="h2" size="lg">
                TECH SKILLS
              </Heading>
              <UnorderedList spacing={3} mt={4}>
                <ListItem>HTML, CSS, SASS</ListItem>
                <ListItem>Responsive/Adaptive design</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>React: components & hooks</ListItem>
                <ListItem>Redux Toolkit, Persist</ListItem>
                <ListItem>REST API</ListItem>
                <ListItem>Webpack/Parcel</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>MongoDB</ListItem>
              </UnorderedList>
            </Flex>
            <Flex direction="column" mt={7}>
              <Heading as="h2" size="lg">
                SOFT SKILLS
              </Heading>
              <UnorderedList spacing={3} mt={4}>
                <ListItem>Strong analytical thinking</ListItem>
                <ListItem>Attention to details</ListItem>
                <ListItem>Teamwork</ListItem>
                <ListItem>Creativity</ListItem>
                <ListItem>Good communications</ListItem>
                <ListItem>Autonomous</ListItem>
              </UnorderedList>
            </Flex>
            <Flex direction="column" mt={7}>
              <Heading as="h2" size="lg">
                LANGUAGES
              </Heading>
              <UnorderedList spacing={3} mt={4}>
                <ListItem>English - intermediate</ListItem>
                <ListItem>Ukrainian - Native</ListItem>
                <ListItem>Russian - Native</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem bg="cyan.100" area={'header'} pl={10} pt={16} color="black">
          <Heading as="h1" size="3xl">
            Serhii Lekhman
          </Heading>
          <Heading as="h2" size="lg" mt={3}>
            Full Stack Developer
          </Heading>
          <Text fontSize="md" mt={4}>
            I'm a Junior Front-end developer with strong analytical thinking and
            excellent basic training. I have good knowledge and practical
            experience at HTML5, CSS3, SASS, JavaScript. Used React/Redux as
            main tool of Front-end. Implemented RESTfull API's using Node.js. I
            am constantly improving my level as a specialist and I am looking
            for a company where I can be useful, become part of a team where I
            can use my knowledge
          </Text>
        </GridItem>
        <GridItem bg="gray.100" area={'main'}>
          Main
        </GridItem>
      </Grid>
    </Flex>
  );
};
