import { Avatar, Flex, Grid, GridItem } from '@chakra-ui/react';

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
          <Flex justify="center" pt="20px">
            <Avatar
              w="300px"
              h="300px"
              name="Serhii Lekhman"
              src={SerhiiLekhman}
            />
          </Flex>
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
