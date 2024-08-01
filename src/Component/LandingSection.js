import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Umer Ullah!";
const bio1 = "A frontend developer";
const bio2 = "Specialised in React";
const headingSize = { fontSize: "18px" };
const headingSize2 = { fontSize: "28px" };

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>            
      <Avatar name='Dan Abrahmov' size='2xl' src='https://bit.ly/code-beast' />
      <Heading style={headingSize}>{greeting}</Heading>
      <Heading style={headingSize2}>{bio1}</Heading>
      <Heading style={headingSize2}>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
