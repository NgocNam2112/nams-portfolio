'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarProvider,
  useSidebar,
} from '@/components/ui/sidebar';
import MenuAction from '../icons/MenuAction';
import Image from 'next/image';

const CustomSidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="absolute z-30 right-4 top-4 cursor-pointer border-2 rounded-sm"
    >
      <MenuAction />
    </button>
  );
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width-icon': '60px',
        } as React.CSSProperties
      }
    >
      <Sidebar collapsible="icon">
        <SidebarHeader className="relative border-b-0 h-full flex flex-col justify-center bg-background">
          <CustomSidebarTrigger />
          <SidebarMenu>
            <SidebarMenuItem className="hover:bg-hover">
              <SidebarMenuSubButton className="hover:bg-hover py-6 text-2xl active:bg-hover">
                About
              </SidebarMenuSubButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="hover:bg-hover">
              <SidebarMenuSubButton className="hover:bg-hover py-6 text-2xl active:bg-hover">
                Skills
              </SidebarMenuSubButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="hover:bg-hover">
              <SidebarMenuSubButton className="hover:bg-hover py-6 text-2xl active:bg-hover">
                Projects
              </SidebarMenuSubButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="hover:bg-hover">
              <SidebarMenuSubButton className="hover:bg-hover py-6 text-2xl active:bg-hover">
                Education
              </SidebarMenuSubButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="hover:bg-hover">
              <SidebarMenuSubButton className="hover:bg-hover py-6 text-2xl active:bg-hover">
                Contact
              </SidebarMenuSubButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      </Sidebar>
      <SidebarContent className="min-h-screen w-full relative overflow-hidden">
        <Image
          src="/images/left-decor.png"
          alt="left-decor"
          width={85}
          height={136}
          className="absolute top-32 left-0"
        />

        <Image
          src="/images/right-decor.png"
          alt="right-decor"
          width={97}
          height={89}
          className="absolute top-0 right-0"
        />
        {children}
      </SidebarContent>
    </SidebarProvider>
  );
}
