import React, { useContext } from "react";
import { Heading, Button, Box, Image } from "@chakra-ui/react";
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
        <Heading display="table" m="0 auto" mb="35px">
          Pillzen
        </Heading>
        <Heading fontSize="xl">
          Manage Your Medication Cycle with a Click of Your Camera
        </Heading>
        <a href={user ? "/new-prescription" : "create-account"}>
          <Button display="table" m="0 auto" mt="60px">
            Get Started
          </Button>
        </a>
        <Image
          src="/pillzen-logo-2.jpg"
          alt="logo"
          w="300px"
          borderRadius={5}
          m="0 auto"
          mt="120px"
        />
      </Box>
    </>
  );
};

export default Home;
