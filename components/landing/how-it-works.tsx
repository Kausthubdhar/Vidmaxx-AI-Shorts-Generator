export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Input your prompt",
      description: "Describe what you want to talk about, or paste an existing blog post or article.",
    },
    {
      number: "02",
      title: "AI Generation",
      description: "VidMaxx writes the script, generates AI voiceover, adds relevant B-roll, and auto-captions it.",
    },
    {
      number: "03",
      title: "Review & Publish",
      description: "Approve the generated video and set a schedule. We post it exactly when your audience is active.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            How VidMaxx Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to automate your social video pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent z-0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-background border-2 border-border mb-6 text-foreground font-bold text-lg shadow-sm">
                {step.number}
              </div>
              <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
