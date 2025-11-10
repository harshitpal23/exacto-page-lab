import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Textured background overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 sm:px-12 py-12 sm:py-0">
          <div className="text-center">
            <h1 className="font-serif italic text-foreground text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-6">
              Hii, I'm Harshit !!
            </h1>
            <p className="font-sans text-foreground/80 text-xl sm:text-2xl md:text-3xl tracking-wide">
              I look at stars — for a living
            </p>
          </div>
        </main>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-foreground/40 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Starfield Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Second Section - About PhD */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-20 bg-background/95">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="font-serif italic text-foreground text-4xl sm:text-5xl md:text-6xl font-bold">
              About My Journey
            </h2>
            <p className="font-sans text-foreground/90 text-lg sm:text-xl md:text-2xl leading-relaxed">
              A PhD scholar at the <span className="text-foreground font-semibold">Macquarie University</span> under{" "}
              <span className="text-foreground font-semibold">Prof. Devika Kamath</span>.
            </p>
          </div>
          
          {/* Universe Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="aspect-square bg-gradient-to-br from-blue-900/40 to-blue-600/20 rounded-lg border-2 border-foreground/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80" 
                alt="Nebula in deep space"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-900/40 to-blue-600/20 rounded-lg border-2 border-foreground/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80" 
                alt="Milky Way galaxy"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-900/40 to-blue-600/20 rounded-lg border-2 border-foreground/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80" 
                alt="Stars in the night sky"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-900/40 to-blue-600/20 rounded-lg border-2 border-foreground/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80" 
                alt="Stellar formation"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
