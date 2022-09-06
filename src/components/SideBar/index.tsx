import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NaVSection } from "./NavSection";


export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start" >
        <NaVSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>

          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NaVSection>

        <NaVSection title="AUTOMAÇÂO">
          <NavLink icon={RiInputMethodLine}>Formulários </NavLink>
          <NavLink icon={RiGitMergeLine} >Automação</NavLink>
        </NaVSection>
      </Stack>
    </Box>
  )
}