import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-zinc-400">Welcome to your dashboard!</p>
        <div className="pt-2">
          <UserButton appearance={{
            elements: {
              avatarBox: "w-10 h-10"
            }
          }}/>
        </div>
      </div>
    </div>
  );
}
