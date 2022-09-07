import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NaVSection } from "./NavSection";



export function SidebarNav() {
  return (
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
  )
}