import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="white">
      <footer>
        <Flex
          className="scroll-section"
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>MONA • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;