import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
}

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, className = "" }) => {
  return (
    <div className={`scroll-stack-item ${className}`}>
      {children}
    </div>
  );
};

export const ScrollStack: React.FC<ScrollStackProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className={`scroll-stack ${className}`}>
      {children}
    </div>
  );
};