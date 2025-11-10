import Header from "@/components/Header";
import { Guitar } from "lucide-react";

const Music = () => {
  return (
    <div className="relative bg-background overflow-x-hidden">
      {/* Textured background overlay - consistent throughout */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />
      
      {/* First section */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-12">
          <h1 className="font-serif italic text-foreground text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight">
            My Music
          </h1>
          
          {/* Guitar scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <Guitar className="w-8 h-8 text-foreground animate-pulse" />
            <span className="text-sm text-muted-foreground">Scroll Down</span>
          </div>
        </main>
      </div>

      {/* Second section - Album announcement */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-12">
        {/* Additional decorative elements for continuity */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="max-w-3xl text-center space-y-6">
          <h2 className="font-serif italic text-foreground text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Been working on my new Album (EP) really hard, and hopefully it will be out soon.
          </h2>
          
          <p className="text-muted-foreground text-lg sm:text-xl">
            Please stay tuned you all<br />
            Hope you will like it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Music;
