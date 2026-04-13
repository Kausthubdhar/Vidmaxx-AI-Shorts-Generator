import { syncUser } from "@/lib/actions/user";
import { redirect } from "next/navigation";

export default async function SyncPage() {
  const result = await syncUser();
  
  if (result.error) {
     // If there's an error syncing, we might want to log it or handle it.
     // For now, still redirect to dashboard so the user isn't stuck.
     console.error("Sync failed:", result.error);
  }

  // Once synced, bounce them to the dashboard 
  redirect("/dashboard");
}
