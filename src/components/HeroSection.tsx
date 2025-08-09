import { ArrowDown } from 'lucide-react';
import SplitText from '../reactbits/textanimations/SplitText/SplitText';
import FadeContent from '../reactbits/animations/FadeContent/FadeContent';
import chicagoSkyline from '/src/assets/chicago_skyline.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-background text-center px-4 overflow-hidden">
      {/* UIUC Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={chicagoSkyline}
          alt="University of Illinois campus"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      </div>

      
      <div className="flex-1 flex flex-col justify-center items-center w-full relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <SplitText
            text="OTCR"
            className="text-7xl md:text-9xl font-extrabold text-white leading-tight mb-4"
            splitType="chars"
          />
          <SplitText
            text="Consulting"
            className="text-7xl md:text-8xl font-extrabold text-teal-primary mb-10"
            splitType="chars"
          />
        </div>
      </div>
      
      {/* Simple scroll indicator */}
      <FadeContent delay={1.5}>
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center animate-bounce-slow group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-teal-primary transition-all duration-300">
            <ArrowDown className="w-5 h-5 text-teal-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <span className="text-sm text-white/75 mt-2 group-hover:text-teal-primary transition-colors duration-300">Scroll to explore</span>
        </div>
      </FadeContent>
    </section>
  );
};

export default HeroSection;
