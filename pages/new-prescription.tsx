import React, { useCallback, useState } from "react";
import {
  Heading,
  Button,
  Box,
  Grid,
  GridItem,
  Text,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";
import { useDropzone } from "react-dropzone";
import { FaFileImport } from "react-icons/fa";

const Home: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // @ts-ignore
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 5242880, //5mb
    accept: "image/*",
  });

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
            <Heading>Prescription Image</Heading>
            <Grid mt="70px" templateColumns="repeat(6, 1fr)" gap={4}>
              <GridItem m="0 auto" colSpan={3}>
                <Box>
                  <Heading size="md" mb="30px">
                    Upload Image
                  </Heading>
                  <Box
                    {...getRootProps()}
                    height="200px"
                    border="1px dashed"
                    textAlign="center"
                    cursor="pointer"
                    pr={2}
                    pl={2}
                  >
                    <input {...getInputProps()} />
                    <Box pos="relative" top="15%">
                      <FaFileImport
                        style={{
                          width: "55px",
                          height: "55px",
                          margin: "0 auto",
                        }}
                      />
                      <Text marginTop="20px">
                        Click or drag file to this area to upload
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </GridItem>
              <GridItem m="0 auto" colSpan={3}>
                <Box>
                  <Heading size="md">Capture Image</Heading>
                </Box>
              </GridItem>
            </Grid>
            <Button
              isDisabled={!selectedFile}
              pr={20}
              pl={20}
              bg="rgba(16, 181, 60, 0.7)"
              display="table"
              m="100px auto"
              _hover={{
                background: "rgba(16, 181, 60, 0.9)",
              }}
            >
              Submit
            </Button>
          </GridItem>
          <GridItem m="0 auto" colSpan={3}>
            <Heading mb="30px">Preview</Heading>
            {selectedFile ? (
              <Box>
                <Image
                  w="80%"
                  src={URL.createObjectURL(selectedFile)}
                  alt="Uploaded Image"
                />
              </Box>
            ) : null}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
