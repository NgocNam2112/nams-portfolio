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
import { LeftDecor, RightDecor } from '../icons';
import HighlightText from '../common/HighlightText';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationItem {
  title: string;
  url: string;
  isActive?: boolean;
}

const CustomSidebarTrigger = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={`absolute z-30 top-4 ${
        open ? 'right-4' : 'left-1/2 -translate-x-1/2'
      } cursor-pointer border-2 rounded-sm`}
    >
      <MenuAction />
    </button>
  );
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);

  const navigation: NavigationItem[] = [
    { title: 'Home', url: '/', isActive: pathname === '/' },
    { title: 'Experience', url: '/experience', isActive: pathname === '/experience' },
    { title: 'Projects', url: '/projects', isActive: pathname === '/projects' },
    { title: 'Education', url: '/education', isActive: pathname === '/education' },
    { title: 'Contact', url: '/contact', isActive: pathname === '/contact' },
  ];

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
            {navigation.map(item => (
              <SidebarMenuItem className="hover:bg-none py-2 cursor-pointer" key={item.url}>
                <SidebarMenuSubButton
                  className="pl-6 py-4 text-2xl"
                  onClick={() => router.push(item.url)}
                >
                  <HighlightText isActive={item.isActive}>{item.title}</HighlightText>
                </SidebarMenuSubButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarHeader>
      </Sidebar>
      <SidebarContent className="h-screen flex flex-col relative">
        <LeftDecor className="w-[85px] h-[136px] absolute top-32 left-0" />
        <RightDecor className="w-[97px] h-[89px] absolute top-0 right-0" />
        <LeftDecor className="w-[85px] h-[136px] bottom-0 left-0 absolute" />
        <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
      </SidebarContent>
    </SidebarProvider>
  );
}
