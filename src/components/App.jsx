import { Flex, Grid } from '@chakra-ui/react';
import Aside from './Aside';
import Header from './Header';
import Main from './Main';

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
        <Header />
        <Main />
      </Grid>
    </Flex>
  );
};
