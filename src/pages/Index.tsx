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
        {/* Header Navigation */}
        <header className="w-full px-6 sm:px-12 lg:px-20 py-8 sm:py-12">
          <nav className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-6 sm:gap-4">
            {/* Left: Name and Role */}
            <div className="text-foreground font-sans">
              <h2 className="text-base sm:text-lg font-semibold tracking-wide uppercase">
                Harshit Pal
              </h2>
              <p className="text-sm sm:text-base opacity-90 tracking-wide">
                [Stellar Astrophysicist]
              </p>
            </div>
            
            {/* Center: Portfolio Year */}
            <div className="text-foreground font-sans text-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
              <h1 className="text-base sm:text-lg font-semibold tracking-wider uppercase">
                RÉSUMÉ
              </h1>
              <p className="text-sm sm:text-base opacity-90 tracking-wide">
                2024
              </p>
            </div>
            
            {/* Right: Contact */}
            <div className="text-foreground font-sans sm:text-right">
              <p className="text-base sm:text-lg font-semibold tracking-wide uppercase">
                SAY HI
              </p>
              <a 
                href="mailto:harshit.iiser@gmail.com" 
                className="text-sm sm:text-base opacity-90 hover:opacity-100 transition-opacity tracking-wide block"
              >
                [ harshit.iiser@gmail.com ]
              </a>
            </div>
          </nav>
        </header>
        
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 sm:px-12 py-12 sm:py-0">
          <h1 className="font-serif italic text-foreground text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-none tracking-tight">
            Résumé
          </h1>
        </main>
      </div>
    </div>
  );
};

export default Index;
