import { useState, useEffect, useRef } from 'react';
import { Menu, X, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const navItems = [
    { label: 'Home', href: '/', isLink: true },
    { label: 'About OTCR', href: '/about', isLink: true },
    { label: 'Leadership', href: '/leadership', isLink: true },
    { label: 'Recruitment Process', href: '/join', isLink: true },
    { label: 'Resources', href: '/recruitment-resources', isLink: true },
    { label: 'Apply Now', href: '/apply', isLink: true },
    { label: 'Nexus', href: 'https://swarnikabhardwaj2.github.io/otcr-consulting-nexus-web/about', isLink: false },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border px-6 py-4 transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F98c6b4d260e54d44896320277f23f7f2%2Fa46e089f3caf43dab4a95e9cb35165cb?format=webp&width=800"
              alt="OTCR Consulting Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-x-8">
          {navItems.map((item) => (
            item.isLink ? (
              <Link
                key={item.label}
                to={item.href}
                className="relative text-foreground font-medium hover:text-accent transition-colors duration-300 group py-2"
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem('')}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 origin-left ${activeItem === item.label ? 'scale-x-100' : 'scale-x-0'}`}></span>
                <span className="absolute inset-0 rounded-lg bg-accent/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground font-medium hover:text-accent transition-colors duration-300 group py-2"
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem('')}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 origin-left ${activeItem === item.label ? 'scale-x-100' : 'scale-x-0'}`}></span>
                <span className="absolute inset-0 rounded-lg bg-accent/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            )
          ))}
        </div>
        
        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-2">
          <a 
            href="https://www.linkedin.com/company/otcr-consulting/about/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative rounded-full p-3 hover:bg-accent/10 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform" />
            <div className="absolute inset-0 rounded-full bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </a>
          <a 
            href="https://www.instagram.com/otcr_consulting/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative rounded-full p-3 hover:bg-accent/10 transition-all duration-300 group"
          >
            <Instagram className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform" />
            <div className="absolute inset-0 rounded-full bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative group"
          >
            <div className="relative z-10">
              {isMenuOpen ? 
                <X className="transition-transform duration-300 rotate-90" /> : 
                <Menu className="transition-transform duration-300 hover:rotate-12" />
              }
            </div>
            <div className="absolute inset-0 rounded-md bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </Button>
        </div>
      </div>
      
      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden absolute left-0 top-full w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col space-y-2 p-4">
          {navItems.map((item, index) => (
            item.isLink ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-accent transition-all duration-300 font-medium py-3 px-2 rounded-lg hover:bg-accent/5 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-all duration-300 font-medium py-3 px-2 rounded-lg hover:bg-accent/5 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            )
          ))}
          {/* Social Icons in mobile menu */}
          <div className="flex items-center space-x-2 mt-4 px-2">
            <a 
              href="https://www.linkedin.com/company/otcr-consulting/about/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full p-2 hover:bg-accent/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
            <a 
              href="https://www.instagram.com/otcr_consulting/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full p-2 hover:bg-accent/10 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
