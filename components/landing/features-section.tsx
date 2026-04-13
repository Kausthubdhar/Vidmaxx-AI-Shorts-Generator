import { CalendarClock, Clapperboard, LineChart, Target } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Clapperboard className="h-6 w-6" />,
      title: "AI Video Generation",
      description:
        "Input a simple prompt or script, and our AI instantly generates a polished short video with captions, B-roll, and music.",
    },
    {
      icon: <CalendarClock className="h-6 w-6" />,
      title: "Smart Scheduling",
      description:
        "Plan your content calendar weeks in advance. VidMaxx automatically publishes your shorts at peak engagement times.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Multi-Platform Support",
      description:
        "Publish simultaneously to YouTube Shorts and Instagram Reels. We format your content perfectly for every platform natively.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Actionable Analytics",
      description:
        "Track views, engagement, and audience demographics across platforms from a single, unified dashboard.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">
            Powerful Automation
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Everything you need to go viral
          </h3>
          <p className="text-muted-foreground text-lg">
            Say goodbye to hours of editing and manual posting. Let VidMaxx run your entire short-form content machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col p-8 rounded-2xl border border-border bg-card/50 hover:bg-muted/30 transition-colors"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
