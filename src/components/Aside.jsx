import {
  // Avatar,
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
    <GridItem bg="purple.100" area={'aside'}>
      <Flex justify="center" pt="40px">
        <Image
          borderRadius="full"
          boxSize="300px"
          objectFit="cover"
          src={SerhiiLekhman}
          alt="Serhii Lekhman"
          borderWidth="5px"
          borderColor="gray.200"
        />
        {/* <Avatar
          w="300px"
          h="300px"
          name="Serhii Lekhman"
          src={SerhiiLekhman}
          showBorder
          border="5px"
          borderColor="gray.200"
        /> */}
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
  );
};

export default Aside;
