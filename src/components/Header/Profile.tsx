import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Afonso Monteiro</Text>
        <Text color="gray.300" fontSize="small">
          afonsomonteiro_@hotmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Afonso Monteiro" src="https://github.com/AffonsoMonteiro.png" />
    </Flex>
  )
}