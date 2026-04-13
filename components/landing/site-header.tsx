import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            {/* Simple geometric logo placeholder */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <div className="h-3 w-3 rounded-sm bg-background" />
            </div>
            <span className="inline-block font-bold sm:text-xl text-lg tracking-tight">VidMaxx</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#how-it-works" className="transition-colors hover:text-foreground">
            How it Works
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/login" className="hidden sm:inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mr-4">
              Log in
            </Link>
            <Button asChild size="sm" className="rounded-full px-6 shadow-sm">
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
