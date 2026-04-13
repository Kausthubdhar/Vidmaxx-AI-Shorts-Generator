"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Sparkles,
  LayoutGrid,
  PlaySquare,
  BookOpen,
  CreditCard,
  Settings,
  CircleUser,
  Plus
} from "lucide-react"

const menuItems = [
  { title: "Series", icon: LayoutGrid, url: "/dashboard/series" },
  { title: "Videos", icon: PlaySquare, url: "/dashboard/videos" },
  { title: "Guides", icon: BookOpen, url: "/dashboard/guides" },
  { title: "Billing", icon: CreditCard, url: "/dashboard/billing" },
  { title: "Settings", icon: Settings, url: "/dashboard/settings" },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/50 bg-zinc-50/50">
      <SidebarHeader className="h-16 flex justify-center px-4">
        <Link href="/dashboard" className="flex items-center gap-3">
          <Image 
             src="/logo.png" 
             alt="VidMaxx Logo" 
             width={32} 
             height={32} 
             className="rounded-lg"
          />
          <span className="font-bold text-xl tracking-tight text-zinc-900">VidMaxx</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="px-3 pt-6 gap-6">
        {/* Main Action Button */}
        <SidebarGroup>
           <Button size="lg" className="w-full justify-start text-base shadow-sm font-semibold rounded-xl h-12 bg-zinc-900 text-zinc-50 hover:bg-zinc-800 hover:scale-[1.02] transition-all">
              <Plus className="mr-2 h-5 w-5" />
              Create New Series
           </Button>
        </SidebarGroup>

        {/* Navigation Options */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="h-12 text-base text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors px-3 font-medium"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 gap-2 border-t border-border/50 bg-zinc-50/50">
        <SidebarMenu className="gap-2">
           <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-12 text-base text-zinc-600 hover:text-zinc-900 rounded-lg">
                <Link href="/dashboard/upgrade">
                  <Sparkles className="h-5 w-5 mr-3 text-amber-500" />
                  <span className="font-medium text-amber-600">Upgrade</span>
                </Link>
              </SidebarMenuButton>
           </SidebarMenuItem>
           <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-12 text-base text-zinc-600 hover:text-zinc-900 rounded-lg">
                <Link href="/dashboard/profile">
                  <CircleUser className="h-5 w-5 mr-3" />
                  <span className="font-medium">Profile Setting</span>
                </Link>
              </SidebarMenuButton>
           </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
