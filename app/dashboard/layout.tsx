import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { UserButton } from "@clerk/nextjs";
import { cookies } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    // Forcing the Light theme layout via background utilities to override any dark mode cascade
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="flex min-h-screen w-full bg-white text-zinc-950 font-sans">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Dashboard Header Bar */}
          <header className="flex h-16 items-center justify-between px-6 border-b border-zinc-200 bg-white sticky top-0 z-40">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-zinc-500 hover:text-zinc-900" />
              <h2 className="text-lg font-semibold tracking-tight text-zinc-800">Dashboard</h2>
            </div>
            <div className="flex items-center gap-4">
               {/* Right side User Profile action */}
               <UserButton appearance={{ elements: { avatarBox: "w-9 h-9" } }} />
            </div>
          </header>

          {/* Main Content Pane */}
          <div className="flex-1 overflow-auto bg-zinc-50 p-6 md:p-8">
            <div className="mx-auto max-w-5xl">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
