import { Text, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";

import Footer from "components/wrapper/Footer";

const FooterComponent = () => (
  <Footer>
    <Text>
      <ChakraLink isExternal href="https://is-a.fun">
        <b>{new Date().getFullYear()} | L RMN</b>
      </ChakraLink>
    </Text>
  </Footer>
);

export default FooterComponent;
