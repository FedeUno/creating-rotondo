import { Button, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowUpSLine } from "react-icons/ri"; 

export default function Footer() {
  return (
    <Stack align="center" spacing={5} width="full">
      <Button
        bg="grey" 
        borderBottomRadius="10"
        borderTopRadius="25"
        color= "blackAlpha.800"
        fontSize="13px"
        fontWeight={400}
        height="32px"
        paddingInline={4}
        width="fit-content"
      >
        More information
        <Icon as={RiArrowUpSLine} boxSize={15} />
      </Button>
      <Stack bg="transparent" height="87px" lineHeight={1} width="full">
        <Stack fontSize="12px" marginInline="auto" paddingBlockStart={10} spacing={5} width="1180px">
          <Stack as="nav" direction="row" fontSize="13px" spacing={20} width="fit-content">
            <Link color="blackAlpha.900"> Work with us </Link>
            <Link color="blackAlpha.900"> Terms and conditions </Link>
            <Link color="blackAlpha.900"> How we take care of your privacy </Link>
            <Link color="blackAlpha.900"> Information </Link>
            <Link color="blackAlpha.900"> Consumer Defense </Link>
          </Stack>
          <Stack>
            <Text color="blackAlpha.600" width="fit-content">
              Copyright © 2020-2022 FedeRotondo  
            </Text>
            <Text color="blackAlpha.600" width="fit-content">
              742 Evergreen Terrace, Springfield, EEUU
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
