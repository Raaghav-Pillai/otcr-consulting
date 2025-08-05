import { ArrowDown } from 'lucide-react';
import SplitText from '../reactbits/textanimations/SplitText/SplitText';
import FadeContent from '../reactbits/animations/FadeContent/FadeContent';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-background text-center px-4 overflow-hidden">
<<<<<<< HEAD

      {/* UIUC Background Image placeholder */}
      <div className="absolute inset-0 z-1">
        <div className="image-placeholder w-full h-full opacity-5">
          <div className="text-center">
            <svg className="w-16 h-16 mb-4 mx-auto text-teal-primary/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p className="text-sm opacity-70">Add UIUC Campus Image Here</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy-medium/75 to-purple-accent/80"></div>
=======
      {/* UIUC Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1567168539593-59673ababaae?auto=format&fit=crop&w=1920&q=80"
          alt="University of Illinois campus"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
>>>>>>> b32fe7cbbec2bb3823fd13add1ea640133ef5bdc
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
          <FadeContent delay={1}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with strategic insights and innovative solutions
            </p>
          </FadeContent>
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
