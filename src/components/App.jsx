import { Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Aside from './Aside';

export const App = () => {
  return (
    <Flex justify="center" py="100px">
      <Grid
        templateAreas={`"aside header"
                      "aside main"`}
        templateRows={'370px 1fr'}
        templateColumns={'370px 1fr'}
        w="1200px"
      >
        <Aside />
        <GridItem
          bg="cyan.100"
          area={'header'}
          pl={10}
          pt={16}
          color="black"
          borderTopRightRadius="30px"
        >
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
        <GridItem bg="gray.100" area={'main'} borderBottomRightRadius="30px">
          Main
        </GridItem>
      </Grid>
    </Flex>
  );
};
