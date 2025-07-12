import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/', isLink: true },
    { label: 'About', href: '/about', isLink: true },
    { label: 'Join Us', href: '#join', isLink: false },
  ];

  return (
    <nav
      className={`
        fixed left-1/2 z-50
        -translate-x-1/2
        transition-all duration-700 ease-in-out
        w-[95vw] max-w-2xl
        flex flex-col items-center
        ${isScrolled ? 'top-6 rounded-full shadow-2xl scale-105' : 'top-0 rounded-b-full shadow-none scale-100'}
        bg-background/60 backdrop-blur-xl border border-border
        px-4 py-2
      `}
      style={{
        background: 'rgba(200,200,200,0.5)',
        boxShadow: isScrolled
          ? '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
          : 'none',
        border: '1px solid rgba(255,255,255,0.18)',
        backdropFilter: 'blur(16px)',
        willChange: 'transform, top, box-shadow, border-radius',
      }}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo removed */}
        <div />

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1">
          <div className="flex flex-row justify-between w-full">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex-1 text-center text-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex-1 text-center text-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
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
        <div className="md:hidden py-4 w-full">
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
            {/* Apply Now button removed */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;