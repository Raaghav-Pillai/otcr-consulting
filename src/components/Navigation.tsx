import { useState, useEffect, useRef } from 'react';
import { Menu, X, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '/', isLink: true },
    { label: 'About OTCR', href: '/about', isLink: true },
    { label: 'Recruitment Process', href: '/join', isLink: true },
    { label: 'Resources', href: '/recruitment-resources', isLink: true },
    { label: 'Apply Now', href: '/apply', isLink: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background border-b border-border px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-x-8">
          {navItems.map((item) => (
            item.isLink ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground font-medium hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground font-medium hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </a>
            )
          ))}
        </div>
        
        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-2">
          <a href="https://www.linkedin.com/company/otcr-consulting/about/" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-accent transition-colors">
            <Linkedin className="w-5 h-5 text-foreground hover:text-accent-foreground transition-colors" />
          </a>
          <a href="https://www.instagram.com/otcr_consulting/?hl=en" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-accent transition-colors">
            <Instagram className="w-5 h-5 text-foreground hover:text-accent-foreground transition-colors" />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-background border-b border-border shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-3 px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-3 px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            {/* Social Icons in mobile menu */}
            <div className="flex items-center space-x-2 mt-4 px-2">
              <a href="https://www.linkedin.com/company/otcr-consulting/about/" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5 text-foreground hover:text-accent-foreground transition-colors" />
              </a>
              <a href="https://www.instagram.com/otcr_consulting/?hl=en" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5 text-foreground hover:text-accent-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;