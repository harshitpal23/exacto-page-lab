import Header from "@/components/Header";

const Book = () => {
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
            My Book
          </h1>
        </main>
      </div>
    </div>
  );
};

export default Book;
