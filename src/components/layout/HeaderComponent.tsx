import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

import { useDesktopWidthCheck } from "functions/helpers/desktopWidthChecker";

import DarkModeSwitch from "./DarkModeSwitch";

const HeaderComponent = () => {
  const { colorMode } = useColorMode();
  const isDesktopWidth = useDesktopWidthCheck();
  return (
    <Box
      justifyContent="start"
      bg={colorMode === "light" ? "white" : "gray.700"}
      position="fixed"
      width="100%"
      opacity="0.95"
      top={0}
      zIndex={5}
      transition="0.3s ease-out"
    >
      <Flex
        justifyContent="space-between"
        py={2}
        align="center"
        maxW="48rem"
        mx="auto"
        px={isDesktopWidth ? 1 : 3}
      >
        <Text as="a" href="/" fontSize="lg">
          <Icon as={FaLink} /> <b>Shortin</b>
        </Text>
        <Flex gridGap={3} align="center">
          <Button
            as="a"
            target="_blank"
            href="https://github.com/lrmn7/shortin-isafun"
            leftIcon={<FaGithub />}
            variant="ghost"
            size="sm"
          >
            Open in Github
          </Button>

          <DarkModeSwitch />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
