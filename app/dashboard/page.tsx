import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">Welcome Back</h1>
        <p className="text-base text-zinc-500">Your dashboard is set up and ready to go.</p>
        
        <div className="mt-8 p-8 border border-zinc-200 border-dashed rounded-2xl bg-zinc-50 text-zinc-400 w-full max-w-xl">
           <p>Your Series and Videos will appear here soon.</p>
        </div>
      </div>
    </div>
  );
}
