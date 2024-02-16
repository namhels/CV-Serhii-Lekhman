import {
  Box,
  Flex,
  GridItem,
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

import ava from '../../images/ava.jpg';
import HeadingAside from './HeadingAside';

const Aside = () => {
  return (
    <GridItem bg="purple.100" area={'aside'} borderLeftRadius="30px" borderRightColor="cyan.100" borderRightWidth="3px">
      <Flex justify="center" pt="40px">
        <Box borderRadius="full" borderWidth="14px" borderColor="gray.100">
          <Box borderRadius="full" borderWidth="10px" borderColor="cyan.100">
            <Image
              borderRadius="full"
              boxSize="300px"
              objectFit="cover"
              src={ava}
              alt="Serhii Lekhman"
            />
          </Box>
        </Box>
      </Flex>
      <Box pl={10} py={12} color="black">
        <HeadingAside>CONTACTS</HeadingAside>
        <List spacing={3} mt={4} pr={10}>
          <ListItem>
            <Link href="tel:+48576558744">
              <ListIcon as={GiSmartphone} />
              +48 576 558 744
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
            <Link href="https://maps.app.goo.gl/EshspPnvS2uCFM6q9" isExternal>
              <ListIcon as={MdLocationPin} />
              Poland, Rabka-Zdroj
            </Link>
          </ListItem>
        </List>
        <Flex direction="column" mt={7}>
          <HeadingAside>TECH SKILLS</HeadingAside>
          <UnorderedList spacing={3} mt={4} pr={10}>
            <ListItem>HTML, CSS, SASS, BEM</ListItem>
            <ListItem>Responsive/Adaptive design</ListItem>
            <ListItem>JavaScript, TypeScript</ListItem>
            <ListItem>React, Redux Toolkit, Persist</ListItem>
            <ListItem>Vue</ListItem>
            <ListItem>Git, Figma, REST API</ListItem>
            <ListItem>Webpack, Parcel</ListItem>
            <ListItem>Node.js, MongoDB, Postman</ListItem>
            <ListItem>Next, Nest</ListItem>
            <ListItem>Chakra UI, Material UI, Styled-Components</ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction="column" mt={7}>
          <HeadingAside>SOFT SKILLS</HeadingAside>
          <UnorderedList spacing={3} mt={4} pr={10}>
            <ListItem>Strong analytical thinking</ListItem>
            <ListItem>Stress resistance</ListItem>
            <ListItem>Teamwork</ListItem>
            <ListItem>Creativity</ListItem>
            <ListItem>Autonomous</ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction="column" mt={7}>
          <HeadingAside>LANGUAGES</HeadingAside>
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
