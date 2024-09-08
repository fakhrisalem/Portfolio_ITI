import React from "react";
import { Avatar, Heading, HStack, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am MONA!";
const bio1 = " Frontend Developer";
const bio2 = "Specialised in React";

const Home = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="black"
   
  >
    <HStack spacing={100} width="100%">
      <VStack spacing={9} align="start">
        <Heading as="h1" size="3xl">
          {greeting}
        </Heading>
        <Heading as="h2" size="md">
          {bio1}
        </Heading>
        <Heading as="h2" size="md">
          {bio2}
        </Heading>
      </VStack>
      <Avatar
        boxSize="500px" 
        name="mona"
        src="https://i.pinimg.com/736x/38/02/0b/38020b5f67d8ee90416a830a8edf7d3e.jpg"
      />
    </HStack>
  </FullScreenSection>
);


export default Home;