import Header from "@/components/Header";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bookCover from "@/assets/book-cover.png";

const Book = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollTop / (windowHeight * 1.5), 1);
      setScrollProgress(progress);
      
      // Show text when scroll passes 40% of viewport
      if (scrollTop > windowHeight * 0.4) {
        setShowText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate book transformations based on scroll
  const bookScale = 1 - scrollProgress * 0.2; // 1.0 to 0.8
  const bookTranslateY = -scrollProgress * 100; // 0 to -100px

  return (
    <div 
      className="relative bg-background overflow-x-hidden" 
      style={{ 
        cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23f4d03f\' stroke-width=\'2\'><path d=\'M4 19.5A2.5 2.5 0 0 1 6.5 17H20\'/><path d=\'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\'/></svg>"), pointer' 
      }}
    >
      {/* Fixed textured background - stays throughout */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />
      
      {/* First section - Hero */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-12">
          <h1 className="font-serif italic text-foreground text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight">
            My Book
          </h1>
          <p className="text-muted-foreground text-xl sm:text-2xl mt-4 font-serif italic">
            Astronomy 101 For Couch Potatoes
          </p>
        </main>
      </div>

      {/* Second section - Cinematic Book Reveal */}
      <div className="relative z-10 min-h-[200vh]">
        {/* Book Hero Section - Sticky during scroll */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Book Image with Scroll Transformations */}
          <div 
            className="relative group pointer-events-none select-none transition-all duration-100"
            style={{
              transform: `scale(${bookScale}) translateY(${bookTranslateY}px)`,
            }}
          >
            {/* Book Image */}
            <img 
              src={bookCover} 
              alt="Astronomy 101 For Couch Potatoes Book Cover" 
              className="max-w-md w-full h-auto rounded-lg shadow-2xl transition-all duration-300 hover:rotate-2 hover:-rotate-2 hover:shadow-[0_0_40px_rgba(244,208,63,0.6)]"
              style={{
                maxHeight: '80vh',
                cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23f4d03f\' stroke-width=\'2\'><path d=\'M4 19.5A2.5 2.5 0 0 1 6.5 17H20\'/><path d=\'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\'/></svg>"), pointer',
              }}
              draggable="false"
            />
            
            {/* Sparkle Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-sparkle"
              />
            </div>
            
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
          </div>
        </div>

        {/* Text Section - Fades in after scroll */}
        <div 
          className={`relative z-20 -mt-screen px-6 sm:px-12 py-20 ${
            showText ? 'opacity-100 animate-fade-slide-up' : 'opacity-0'
          }`}
        >
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Book description */}
            <div className="text-center space-y-4">
              <h2 className="font-serif italic text-foreground text-3xl sm:text-4xl md:text-5xl font-bold">
                My First Book
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                Published worldwide in 2024 across 150+ countries. Kept it low-key with a soft launch at first, but the response has been unreal. Super Grateful !! I guess it's time to share it with you all (Full Fledged).
              </p>
            </div>

            {/* Dropdowns for ordering */}
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto space-y-4">
              {/* Order in India */}
              <AccordionItem 
                value="india" 
                className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm overflow-hidden"
              >
                <AccordionTrigger className="text-foreground font-semibold text-lg hover:text-primary transition-colors">
                  Order it Online in India
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <a 
                    href="https://www.amazon.in/Astronomy-101-Couch-Potatoes-Astrophysics/dp/B0DR8DZXH9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 rounded-md bg-secondary/20 hover:bg-secondary/40 transition-all text-foreground hover:text-primary opacity-0 animate-fade-in-left"
                    style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
                  >
                    Amazon
                  </a>
                  <a 
                    href="https://www.flipkart.com/astronomy-101-couch-potatoes-volume-1-stellar-astrophysics/p/itm6b590d668f831?pid=9798892225007&lid=LSTBOK97988922250075VLBSE&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 rounded-md bg-secondary/20 hover:bg-secondary/40 transition-all text-foreground hover:text-primary opacity-0 animate-fade-in-left"
                    style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                  >
                    Flipkart (Price keeps fluctuating, Idk why)
                  </a>
                  <a 
                    href="https://bookscape.com/product-details/astronomy-101-for-couch-potatoes-volume-1-stellar-astrophysics-9798892225007?srsltid=AfmBOookV7sQ1RYCU_2jhx8n1zsSnHdi-bHhmLu7ndnPqDbZwf-YTOZ4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 rounded-md bg-secondary/20 hover:bg-secondary/40 transition-all text-foreground hover:text-primary opacity-0 animate-fade-in-left"
                    style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
                  >
                    Other Marketplaces (No Idea what these are)
                  </a>
                </AccordionContent>
              </AccordionItem>

              {/* Order worldwide */}
              <AccordionItem 
                value="worldwide" 
                className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm overflow-hidden"
              >
                <AccordionTrigger className="text-foreground font-semibold text-lg hover:text-primary transition-colors">
                  Order it Online (worldwide)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <p className="text-muted-foreground mb-3 opacity-0 animate-fade-in-left" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                    Just go to your Country's Amazon and search my book's name or 'Harshit Pal'... You'll find it (Hopefully). And just in case you don't, order from here:
                  </p>
                  <a 
                    href="https://www.amazon.com/Astronomy-101-Couch-Potatoes-Astrophysics/dp/B0DRBL3JPH/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.mmZIw7eXttu96CXune0K8O4RbB9pMPAWGXWgtw3cgO3GjHj071QN20LucGBJIEps.AbJ_eVKdvEdETd4QFpayc8s9G3FRmSD10HIDHd-d4aE&qid=1750490529&sr=8-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 rounded-md bg-secondary/20 hover:bg-secondary/40 transition-all text-foreground hover:text-primary opacity-0 animate-fade-in-left"
                    style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                  >
                    Amazon
                  </a>
                </AccordionContent>
              </AccordionItem>

              {/* Signed copies */}
              <AccordionItem 
                value="signed" 
                className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm overflow-hidden"
              >
                <AccordionTrigger className="text-foreground font-semibold text-lg hover:text-primary transition-colors">
                  Signed Author Copies
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <p className="text-muted-foreground opacity-0 animate-fade-in-left" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                    Email me directly if you would like to buy a signed copy (at a discounted rate). I would love to connect and even chitchat if I am available ;)
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
