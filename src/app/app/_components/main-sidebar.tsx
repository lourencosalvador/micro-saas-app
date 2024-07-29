'use client'

import { usePathname } from "next/navigation"
import {
    Sidebar,
    SidebarHeader,
    SidebarMain,
    SidebarNav,
    SidebarNavFooter,
    SidebarNavHeader,
    SidebarNavHeaderTitle,
    SidebarNavLink,
    SidebarNavMain
} from "../../components/dashboard/sidebar"
import { HomeIcon, MixerVerticalIcon } from "@radix-ui/react-icons"
import { UserDropdown } from "./user-dropdow"
import { Session } from 'next-auth'
import { Logo } from "@/components/logo"

type MainSidebarProps = {
  user: Session['user']
  }

export function MainSideBar({ user }: MainSidebarProps) {

    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <Logo />
            </SidebarHeader>

            <SidebarMain className="flex flex-col flex-grow">
                <SidebarNav>
                    <SidebarNavMain>
                        <SidebarNavLink
                            href="/app"
                            active={isActive('/app')}
                        >
                            <HomeIcon className="w-4 h-4 mr-4"/>
                            Tarefas
                        </SidebarNavLink>
                        <SidebarNavLink
                            href="/app/settings"
                            active={isActive('/app/settings')}
                        >
           <MixerVerticalIcon className="w-4 h-4 mr-4"/>
                            Configuracoes
                        </SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>

                <SidebarNav className="mt-auto">
                    <SidebarNavHeader>
                        <SidebarNavHeaderTitle>Links extras</SidebarNavHeaderTitle>
                    </SidebarNavHeader>
                    <SidebarNavMain>
                        <SidebarNavLink href="/">Precisa de ajuda?</SidebarNavLink>
                        <SidebarNavLink href="/">Site </SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>
            </SidebarMain>

            <SidebarNavFooter>
                <UserDropdown user={user}/>
            </SidebarNavFooter>
    </Sidebar>
  )
}
