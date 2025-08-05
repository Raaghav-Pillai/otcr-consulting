import { ArrowDown } from 'lucide-react';
import SplitText from '../reactbits/textanimations/SplitText/SplitText';
import FadeContent from '../reactbits/animations/FadeContent/FadeContent';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-background text-center px-4 overflow-hidden">
      {/* UIUC Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1567168539593-59673ababaae?auto=format&fit=crop&w=1920&q=80"
          alt="University of Illinois campus"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      </div>

      
      <div className="flex-1 flex flex-col justify-center items-center w-full relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <SplitText
            text="OTCR"
            className="text-7xl md:text-9xl font-extrabold text-foreground leading-tight mb-4"
            splitType="chars"
          />
          <SplitText
            text="Consulting"
            className="text-7xl md:text-8xl font-extrabold text-teal-primary mb-10"
            splitType="chars"
          />
          <FadeContent delay={1}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with strategic insights and innovative solutions
            </p>
          </FadeContent>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <FadeContent delay={1.5}>
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center animate-bounce-slow group cursor-pointer">
          <div className="relative">
            <ArrowDown className="w-8 h-8 text-teal-primary group-hover:text-orange-warm transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-teal-primary/20 scale-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
          <span className="text-sm text-muted-foreground mt-2 group-hover:text-teal-primary transition-colors duration-300">Scroll to know more</span>
        </div>
      </FadeContent>
    </section>
  );
};

export default HeroSection;
