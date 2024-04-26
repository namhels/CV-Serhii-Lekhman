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
import { AiOutlineLinkedin } from 'react-icons/ai';

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
        <HeadingAside>КОНТАКТЫ</HeadingAside>
        <List spacing={3} mt={4} pr={10}>
          <ListItem>
            <Link href="tel:+48576558744">
              <ListIcon as={GiSmartphone} />
              +357 95698009
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:8.lsv.888@gmail.com">
              <ListIcon as={MdOutlineEmail} />
              8.lsv.888@gmail.com
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
              Кипр, Ларнака
            </Link>
          </ListItem>
        </List>
        <Flex direction="column" mt={7}>
          <HeadingAside>НАВЫКИ</HeadingAside>
          <UnorderedList spacing={3} mt={4} pr={10}>
            <ListItem>Сильное аналитическое мышление</ListItem>
            <ListItem>Стрессоустойчивость</ListItem>
            <ListItem>Командная работа</ListItem>
            <ListItem>Креативность</ListItem>
            <ListItem>Автономность</ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction="column" mt={7}>
          <HeadingAside>ЯЗЫКИ</HeadingAside>
          <UnorderedList spacing={3} mt={4} pr={10}>
            <ListItem>Английский – средний уровень</ListItem>
            <ListItem>Украинский - родной</ListItem>
            <ListItem>Русский - родной</ListItem>
          </UnorderedList>
        </Flex>
      </Box>
    </GridItem>
  );
};

export default Aside;
