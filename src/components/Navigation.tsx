import { useState, useEffect, useRef } from 'react';
import { Menu, X, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '/', isLink: true },
    { label: 'About OTCR', href: '/about', isLink: true },
    { label: 'Recruitment', href: '/join', isLink: true },
    { label: 'Resources', href: '/recruitment-resources', isLink: true },
  ];

  return (
    <nav
      className={`
        top-6
        fixed left-1/2 z-50
        -translate-x-1/2
        w-[50vw] max-w-5xl
        flex flex-row items-center justify-between
        rounded-full shadow-2xl scale-105
        bg-white/80 backdrop-blur-xl border border-border
        px-4 py-2
        transition-all duration-700 ease-in-out
      `}
      style={{
        background: 'rgba(255,255,255,0.7)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255,255,255,0.18)',
        backdropFilter: 'blur(16px)',
        willChange: 'transform, top, box-shadow, border-radius',
      }}
    >
      {/* Nav Links */}
      <div className="flex flex-row items-center gap-x-12 pl-2 pr-4 flex-1 justify-center">
        {navItems.map((item) => (
          item.isLink ? (
            <Link
              key={item.label}
              to={item.href}
              className="text-center text-grey text-foreground font-semibold hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="text-center text-foreground font-semibold hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </a>
          )
        ))}
      </div>
      {/* Social Icons */}
      <div className="flex items-center space-x-1 pr-1">
        <a href="https://www.linkedin.com/company/otcr-consulting/about/" target="_blank" rel="noopener noreferrer" className="rounded-full p-1 hover:bg-accent transition-colors">
          <Linkedin className="w-5 h-5 text-grey hover:text-white transition-colors" />
        </a>
        <a href="https://www.instagram.com/otcr_consulting/?hl=en" target="_blank" rel="noopener noreferrer" className="rounded-full p-1 hover:bg-accent transition-colors">
          <Instagram className="w-5 h-5 text-grey hover:text-white transition-colors" />
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
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 w-full absolute left-0 top-full bg-white/95 rounded-b-2xl shadow-xl z-50">
          <div className="flex flex-col space-y-4 items-center">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            {/* Social Icons in mobile menu */}
            <div className="flex items-center space-x-1 mt-2">
              <a href="https://www.linkedin.com/company/otcr-consulting/about/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-black p-1 hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4 text-white hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/otcr_consulting/?hl=en" target="_blank" rel="noopener noreferrer" className="rounded-full bg-black p-1 hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4 text-white hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;