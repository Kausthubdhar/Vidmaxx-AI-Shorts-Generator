import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

export async function HeroSection() {
  const { userId } = await auth();
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-balance flex flex-col items-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Sparkles className="mr-2 h-4 w-4 text-primary" />
          <span>VidMaxx AI v1.0 is now live</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
          Automate your multi-platform{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            video strategy
          </span>
        </h1>

        {/* Subhead */}
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          Turn a single prompt into viral short videos. Schedule, post, and grow your audience on YouTube and Instagram completely hands-free.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          {userId ? (
            <Button asChild size="lg" className="rounded-full px-8 h-12 w-full sm:w-auto shadow-lg shadow-primary/20">
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" className="rounded-full px-8 h-12 w-full sm:w-auto shadow-lg shadow-primary/20">
              <Link href="/sign-in">
                Start Generating for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 w-full sm:w-auto border-border hover:bg-muted/50">
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        {/* Dashboard Preview / Mock */}
        <div className="w-full max-w-5xl mt-16 md:mt-24 p-2 md:p-4 rounded-xl border border-border/50 bg-muted/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 shadow-2xl relative">
           <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 rounded-xl" />
           <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-lg bg-card/80 border border-border/50 overflow-hidden flex items-center justify-center relative">
             {/* Mock UI lines representing an app */}
             <div className="flex flex-col w-full h-full p-6 opacity-30">
                <div className="h-6 w-32 bg-muted rounded mb-8" />
                <div className="flex flex-1 gap-6">
                  <div className="w-1/4 flex flex-col gap-4">
                    <div className="h-4 w-full bg-muted rounded" />
                    <div className="h-4 w-10/12 bg-muted rounded" />
                    <div className="h-4 w-11/12 bg-muted rounded" />
                  </div>
                  <div className="w-3/4 bg-muted/40 rounded-lg" />
                </div>
             </div>
             
             {/* Simple central play icon over mock data to signify video */}
             <div className="absolute inset-0 flex items-center justify-center z-20">
               <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/20 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-primary ml-1" />
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
