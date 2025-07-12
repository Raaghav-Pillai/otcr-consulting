import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-background text-center px-4">
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            The Premier Student-Run<br />
            Consulting Firm
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent mb-10">
            at the University of Illinois
          </h2>
        </div>
      </div>
      {/* Scroll to know more arrow and text at the bottom */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
        <ArrowDown className="w-8 h-8 text-accent" />
        <span className="text-sm text-muted-foreground mt-2">Scroll to know more</span>
      </div>
    </section>
  );
};

export default HeroSection;
