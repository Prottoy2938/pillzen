import React from "react";
import { Heading, Button, Box } from "@chakra-ui/react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pillzone</title>
      </Head>
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
    </>
  );
};

export default Home;
