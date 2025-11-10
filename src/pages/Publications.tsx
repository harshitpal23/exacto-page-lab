import Header from "@/components/Header";

const Publications = () => {
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
        
        <main className="flex-1 flex items-center justify-center px-6 sm:px-12 py-12">
          <h1 className="font-serif italic text-foreground text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight">
            My Publications
          </h1>
        </main>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-foreground/40 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* ORCID Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-20 bg-background/95">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif italic text-foreground text-4xl sm:text-5xl font-bold mb-8">
            Research Profile
          </h2>
          <div className="bg-background/80 border-2 border-foreground/20 rounded-lg p-8 sm:p-12">
            <p className="font-sans text-foreground/90 text-lg sm:text-xl mb-6">
              View my complete research profile and publications on ORCID:
            </p>
            <a 
              href="https://orcid.org/0009-0001-8079-3471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-sans font-semibold text-lg rounded hover:opacity-90 transition-opacity"
            >
              <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
                <path d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z"/>
              </svg>
              ORCID Profile
            </a>
            <p className="font-mono text-foreground/60 text-sm mt-4">
              0009-0001-8079-3471
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
