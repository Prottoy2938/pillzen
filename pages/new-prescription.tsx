import React from "react";
import { Heading, Button, Box, Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>New Prescription | Pillzone</title>
      </Head>

      <Box pr={10} pl={10}>
        <Heading display="table" m="0 auto" mb="100px">
          Add New Prescription
        </Heading>
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <Box>
              <Heading mb="50px">Upload Image</Heading>
            </Box>
          </GridItem>
          <GridItem colSpan={3}>
            {" "}
            <Heading>Preview</Heading>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
