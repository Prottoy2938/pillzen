import React from "react";
import { Heading, Button, Box } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Box display="table" m="0 auto">
      <Heading display="table" m="0 auto" mb="50px">
        Pillzone
      </Heading>
      <Heading fontSize="xl">Some App Description Here</Heading>
      <a href="/new-prescription">
        <Button display="table" m="0 auto" mt="100px">
          Get Started
        </Button>
      </a>
    </Box>
  );
};

export default Home;
