import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "My Research", path: "/research" },
    { name: "My Publications", path: "/publications" },
    { name: "My Book", path: "/book" },
    { name: "My Music", path: "/music" },
  ];

  return (
    <header className="w-full px-6 sm:px-12 lg:px-20 py-8 sm:py-12">
      <nav className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-6 sm:gap-4">
        {/* Left: Name and Role - Clickable */}
        <Link to="/about" className="text-foreground font-sans hover:opacity-80 transition-opacity">
          <h2 className="text-base sm:text-lg font-semibold tracking-wide uppercase">
            Harshit Pal
          </h2>
          <p className="text-sm sm:text-base opacity-90 tracking-wide">
            [Stellar Astrophysicist]
          </p>
        </Link>
        
        {/* Right: Contact */}
        <div className="text-foreground font-sans sm:text-right sm:ml-auto">
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
      
      {/* Navigation Menu */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-6 py-2 text-sm sm:text-base font-sans tracking-wide uppercase transition-all",
              "border-2 border-foreground/20 hover:border-foreground/60 hover:bg-foreground/5",
              location.pathname === item.path
                ? "bg-portfolio-yellow text-background border-portfolio-yellow font-semibold"
                : "text-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
