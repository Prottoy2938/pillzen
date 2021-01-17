import React, { useContext } from "react";
import { Heading, Button, Box } from "@chakra-ui/react";
import Head from "next/head";
import { AuthContext } from "../src/auth/main-auth-functionality";

const Home: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Pillzen</title>
      </Head>
      <Box display="table" m="0 auto">
        <Heading display="table" m="0 auto" mb="50px">
          Pillzen
        </Heading>
        <Heading fontSize="xl">Some App Description Here</Heading>
        <a href={user ? "/new-prescription" : "create-account"}>
          <Button display="table" m="0 auto" mt="100px">
            Get Started
          </Button>
        </a>
      </Box>
    </>
  );
};

export default Home;
