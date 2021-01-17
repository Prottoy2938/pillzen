import React, {
  useCallback,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import {
  Heading,
  Button,
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import { useDropzone } from "react-dropzone";
import { FaFileImport } from "react-icons/fa";
import Camera from "../src/components/use-camera/use-camera";
import { AiOutlineCamera } from "react-icons/ai";
import { AuthContext } from "../src/auth/main-auth-functionality";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const { user, runningAuth } = useContext(AuthContext);
  const [selectedImgURL, setSelectedImgURL] = useState<string>(null);
  const [openCamera, setOpenCamera] = useState(false);

  const toast = useToast();

  const cam = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImgURL(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const router = useRouter();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 5242880, //5mb
    accept: "image/*",
  });

  const handleCamError = (): void => {
    toast({
      title: "Something went wrong",
      description: "Something went wrong while capturing image",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  function captureImage(imgSrc: string) {
    setSelectedImgURL(imgSrc);
    setOpenCamera(false);
  }

  const handleCloseCamera = (): void => {
    setOpenCamera(false);
  };
  const handleOpenCamera = (): void => {
    setOpenCamera(true);
  };

  const handleSubmit = (): void => {
    toast({
      title: "Processing",
      description: "Wait a while ....",
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "bottom-right",
    });
  };
  useEffect(() => {
    //if the auth check if complete and the user is not logged-in, sending him to the join/login page
    if (!user && !runningAuth) {
      router.push("/login");
    }
  }, [user, runningAuth]);

  return (
    <>
      <Head>
        <title>New Prescription | Pillzone</title>
      </Head>

      <Box pr={10} pl={10} mb={20}>
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
                <Heading size="md" mb="30px">
                  Capture Image
                </Heading>

                <Box>
                  {openCamera ? (
                    <Box textAlign="center">
                      <Camera
                        front={false}
                        capture={captureImage}
                        ref={cam}
                        width="100%"
                        height="100%"
                        focusWidth="100%"
                        focusHeight="100%"
                        onError={handleCamError}
                      />
                      <Button
                        colorScheme="facebook"
                        mt={5}
                        size="sm"
                        // https://stackoverflow.com/questions/37949981/call-child-method-from-parent
                        onClick={(img) => cam.current.capture(img)}
                      >
                        Take Image
                      </Button>
                      <Button
                        display="block"
                        size="sm"
                        variant="ghost"
                        // https://stackoverflow.com/questions/37949981/call-child-method-from-parent
                        onClick={handleCloseCamera}
                        m="0 auto"
                        mt={5}
                      >
                        close camera
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      leftIcon={<AiOutlineCamera />}
                      variant="outline"
                      size="sm"
                      onClick={handleOpenCamera}
                    >
                      Open Camera
                    </Button>
                  )}
                </Box>
              </GridItem>
            </Grid>
            <Button
              isDisabled={!selectedImgURL}
              pr={20}
              pl={20}
              bg="rgba(16, 181, 60, 0.7)"
              display="table"
              m="100px auto"
              _hover={{
                background: "rgba(16, 181, 60, 0.9)",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </GridItem>
          <GridItem m="0 auto" colSpan={3}>
            <Heading mb="30px">Preview</Heading>
            {selectedImgURL && selectedImgURL.length ? (
              <Box>
                <Image w="80%" src={selectedImgURL} alt="Uploaded Image" />
              </Box>
            ) : null}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
