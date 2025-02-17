
import React, { useRef, useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsFillPinMapFill } from 'react-icons/bs';

import { BoxedNextImage } from "@mf/components/dom/BoxedNextImage";
import {
  AirtableContributorInstance,
  AirtableFairInstance,
  AirtablePerformerInstance,
  AirtableSpeakerInstance,
  AirtableSponsorInstance,
} from "@mf/components/dom/integrations/AirtableInstance";
import SpeakerIcon from "@mf/static/assets/img/icons/forum.svg"
import SponsorIcon from "@mf/static/assets/img/icons/patrons.svg"
import ContributorIcon from "@mf/static/assets/img/icons/players.svg"
import FairIcon from "@mf/static/assets/img/icons/welcometometagame.svg"
import PerformerIcon from "@mf/static/assets/img/icons/xpearned.svg"
import { useOnScreen } from "@mf/utils/hooks";


export const ApplySection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [openSpeakerApplication, setOpenSpeakerApplication] = useState(false);
  const [openContributorApplication, setOpenContributorApplication] = useState(
    false
  );
  const [openPerformerApplication, setOpenPerformerApplication] = useState(
    false
  );
  const [openSponsorApplication, setOpenSponsorApplication] = useState(false);
const [openFairApplication, setOpenFairApplication] = useState(false);
  return (
    <Box as="section" id="apply" position="relative">
      <Box
        ref={ref}
        className="__content"
        width="100%"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
        willChange
      >
        <Box className="__content__body" d={{base: 'unset', md: "flex"}} w="100%" flexFlow={{base: 'column wrap', md: "row nowrap"}} alignItems="center" justifyContent="space-between">
        <Container
            maxW={{base: '100%', md: "2xl"}}
          >
          <Text
            as="h2"
          >
            Apply here
          </Text>
          {/* <span className="fest-dates">9 - 23rd JUNE</span> */}
          </Container>
          <Container maxW={{base: '100%', md: "2xl"}} p={0} mt={{base: 5, md: 0}}>
          <Box
            maxW={{base: '100%', md: "2xl"}}
            p={{ base: 8, md: 12 }}
            sx={{
              bg: "rgba(33,33,33,0.5)",
              backdropFilter: "blur(7px)",
              borderRadius: "5px 30px 10px 0",
              boxShadow: "0 0 30px #00000070",
            }}
          >
            <SimpleGrid columns={{ base: 1 }} spacing={0}>
              <Stack spacing={{base: 2, md: 4}} >
                <Text
                  textTransform="uppercase"
                  fontWeight={500}
                  fontSize={{ base: "2.2vmin", md: "0.7vmax" }}
                  className="gradient"
                  p={0}
                  alignSelf="flex-start"
                  rounded="md"
                >
                  <span role="img" aria-label="Yay, come join us!">
                    🎉
                  </span>{" "}
                  Join the party!{" "}
                  <span role="img" aria-label="Yay, come join us!">
                    🎉
                  </span>
                </Text>
                <Text as="h3" mt={1}>
                  <span>MetaFest2 needs YOU</span>
                  <span
                    className="gradient"
                    role="img"
                    aria-label="Pointing at the forms below"
                  >
                    👇
                  </span>
                </Text>
                <Text as="p" >
                  What is an event without amazing folks like you! People
                  who want to help organise &amp; greet, tell us about their
                  projects, teach, sing, code...we&apos;d love to see you. Apply
                  below.
                </Text>
                <Stack spacing={4} divider={<StackDivider />}>
                    <Feature
                      icon="assets/img/icons/forum.svg"
                    iconBg="yellow.900"
                    text="Speakers/Workshops"
                    call={() =>
                      setOpenSpeakerApplication(!openSpeakerApplication)
                    }
                  />
                    <Feature
                      icon="assets/img/icons/players.svg"
                    iconBg="green.900"
                    text="Contributors"
                    call={() =>
                      setOpenContributorApplication(!openContributorApplication)
                    }
                  />
                    <Feature
                      icon="assets/img/icons/xpearned.svg"
                    iconBg="purple.900"
                    text="Performers"
                    call={() =>
                      setOpenPerformerApplication(!openPerformerApplication)
                    }
                  />
                    <Feature
                      icon="assets/img/icons/patrons.svg"
                    iconBg="purple.900"
                    text="Sponsors"
                    call={() =>
                      setOpenSponsorApplication(!openSponsorApplication)
                    }
                    />
                                        <Feature
                      icon="assets/img/icons/welcometometagame.svg"
                    iconBg="purple.900"
                    text="Job Fair"
                    call={() =>
                      setOpenFairApplication(!openFairApplication)
                    }
                  />
                </Stack>
              </Stack>
            </SimpleGrid>
          </Box>
          </Container>

        </Box>
      </Box>
      {openSpeakerApplication && (
        <>
          <Button
            position="absolute"
            bottom={{ base: 10, md: 20 }}
            aria-label="Open the speaker application form"
            right={6}
            colorScheme="pink"
            bg="#FF61E6"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            transform={`translateY(${openSpeakerApplication ? 0 : "-70px"})`}
            onClick={() => setOpenSpeakerApplication(!openSpeakerApplication)}
            zIndex={2003}
          >
            Close form
          </Button>
          <Box
            ref={ref}
            position="absolute"
            top="12.5vh"
            left={0}
            right={0}
            height="75vh"
            minH="75vh"
            width="100vw"
            sx={{
              bg: "rgba(25,0,50,0.4)",
              backdropFilter: "blur(7px)",
            }}
            boxShadow="0 0 30px rgba(0,0,0,0.8)"
            opacity={onScreen ? 1 : 0}
            transition="opacity 1.2s 0.8s ease-in-out"
            zIndex={2001}
            overflowY="scroll"
          >
            <AirtableSpeakerInstance />
          </Box>
        </>
      )}
      {openContributorApplication && (
        <>
          <Button
            aria-label="Open the contributor application form"
            position="absolute"
            bottom={{base: 10, md: 20}}
            right={6}
            colorScheme="pink"
            bg="#FF61E6"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            transform={`translateY(${
              openContributorApplication ? 0 : "-70px"
            })`}
            onClick={() =>
              setOpenContributorApplication(!openContributorApplication)
            }
            zIndex={2002}
          >
            Close form
          </Button>
          <Box
            ref={ref}
            position="absolute"
            top="12.5vh"
            left={0}
            right={0}
            height="75vh"
            minH="75vh"
            midth="100vw"
            sx={{
              bg: "rgba(25,0,50,0.4)",
              backdropFilter: "blur(7px)",
            }}
            boxShadow="0 0 30px rgba(0,0,0,0.8)"
            opacity={onScreen ? 1 : 0}
            transition="opacity 1.2s 0.8s ease-in-out"
            zIndex={2001}
            overflowY="scroll"
          >
            <AirtableContributorInstance />
          </Box>
        </>
      )}
      {openPerformerApplication && (
        <>
          <Button
            aria-label="Open the performer application form"
            position="absolute"
            bottom={{base: 10, md: 20}}
            right={6}
            colorScheme="pink"
            bg="#FF61E6"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            transform={`translateY(${openPerformerApplication ? 0 : "-70px"})`}
            onClick={() =>
              setOpenPerformerApplication(!openPerformerApplication)
            }
            zIndex={2002}
          >
            Close form
          </Button>
          <Box
            ref={ref}
            position="absolute"
            top="12.5vh"
            left={0}
            right={0}
            height="75vh"
            minH="75vh"
            width="100vw"
            sx={{
              bg: "rgba(25,0,50,0.4)",
              backdropFilter: "blur(7px)",
            }}
            boxShadow="0 0 30px rgba(0,0,0,0.8)"
            opacity={onScreen ? 1 : 0}
            transition="opacity 1.2s 0.8s ease-in-out"
            zIndex={2001}
            overflowY="scroll"
          >
            <AirtablePerformerInstance />
          </Box>
        </>
      )}
      {openSponsorApplication && (
        <>
          <Button
            aria-label="Open the sponsor application form"
            position="absolute"
            bottom={{base: 10, md: 20}}
            right={6}
            colorScheme="pink"
            bg="#FF61E6"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            transform={`translateY(${openSponsorApplication ? 0 : "-70px"})`}
            onClick={() => setOpenSponsorApplication(!openSponsorApplication)}
            zIndex={2002}
          >
            Close form
          </Button>
          <Box
            ref={ref}
            position="absolute"
            top="12.5vh"
            left={0}
            right={0}
            height="75vh"
            minH="75vh"
            width="100vw"
            sx={{
              bg: "rgba(25,0,50,0.4)",
              backdropFilter: "blur(7px)",
            }}
            boxShadow="0 0 30px rgba(0,0,0,0.8)"
            opacity={onScreen ? 1 : 0}
            transition="opacity 1.2s 0.8s ease-in-out"
            zIndex={2001}
            overflowY="scroll"
          >
            <AirtableSponsorInstance />
          </Box>
        </>
      )}
            {openFairApplication && (
        <>
          <Button
            aria-label="Open the Job Fair application form"
            position="absolute"
            bottom={{base: 10, md: 20}}
            right={6}
            colorScheme="pink"
            bg="#FF61E6"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            transform={`translateY(${openFairApplication ? 0 : "-70px"})`}
            onClick={() => setOpenFairApplication(!openFairApplication)}
            zIndex={2005}
          >
            Close form
          </Button>
          <Box
            ref={ref}
            position="absolute"
            top="12.5vh"
            left={0}
            right={0}
            height="75vh"
            minH="75vh"
            width="100vw"
            textAlign="center"
            sx={{
              bg: "rgba(25,0,50,0.4)",
              backdropFilter: "blur(7px)",
            }}
            boxShadow="0 0 30px rgba(0,0,0,0.8)"
            opacity={onScreen ? 1 : 0}
            transition="opacity 1.2s 0.8s ease-in-out"
            zIndex={2001}
            overflowY="scroll"
          >
            <AirtableFairInstance />
          </Box>
        </>
      )}
    </Box>
  );
};

export const Feature = ({ text, icon, iconBg, call }) => {
  const responsiveSize = useBreakpointValue({base: 'xs', md: 'sm'})
  return (
    <Stack direction="row" align="center">
      <Flex
        w={8}
        h={8}
        align="center"
        justify="center"
        rounded="full"
        // bg={iconBg}
      >
        <BoxedNextImage src={icon} alt={text} boxSize={{base: '30px', lg: '75px'}} className="gradient" />
      </Flex>
      <Text fontWeight={500} fontSize={{base: '4vmin', md: '1.2vmax'}} flex={1}>
        {text}
      </Text>
      <Button onClick={() => call()} colorScheme="pink" bg="#FF61E6" size={responsiveSize} justifySelf="right">
        Apply
      </Button>
    </Stack>
  );
};
