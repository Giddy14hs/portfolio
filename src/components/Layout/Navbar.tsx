
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold">
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div className="flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="ml-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute left-0 w-full bg-background py-4 shadow-lg animate-in fade-in slide-in-from-top-5">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-2 text-sm font-medium hover:text-primary"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
