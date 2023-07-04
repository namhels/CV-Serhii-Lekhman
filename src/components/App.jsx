import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack,
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
        bg="tomato"
      >
        <GridItem bg="pink.300" area={'aside'}>
          <Flex justify="center" pt="40px">
            <Avatar
              w="300px"
              h="300px"
              name="Serhii Lekhman"
              src={SerhiiLekhman}
            />
          </Flex>
          <VStack spacing={4} py={16}>
            <Flex direction="column" align="start" spacing={4}>
              <Heading as="h2" size="lg">
                Contacts
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={GiSmartphone} />
                  +38 095-555-90-63
                </ListItem>
                <ListItem>
                  <ListIcon as={MdOutlineEmail} />
                  8.lsv.888@gmail.com
                </ListItem>
                <ListItem>
                  <ListIcon as={AiFillGithub} />
                  Quidem, ipsam
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineLinkedin} />
                  Quidem, ipsam
                </ListItem>
                <ListItem>
                  <ListIcon as={MdLocationPin} color="green.500" />
                  Ukraine, Zaporizhzhya
                </ListItem>
              </List>
            </Flex>
          </VStack>
        </GridItem>
        <GridItem mt={8} bg="green.300" area={'header'}>
          Header
        </GridItem>
        <GridItem bg="blue.300" area={'main'}>
          Main
        </GridItem>
      </Grid>
    </Flex>
  );
};
