import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-foreground">
            Launch Your
            <span className="block text-accent">
              Consulting Career
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Join OTCR Consulting, the premier student-run consulting firm at the University of Illinois. 
            Gain real-world experience working with Fortune 500 companies while building your professional skills.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">24+</div>
              <div className="text-muted-foreground font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">300+</div>
              <div className="text-muted-foreground font-medium">Alumni Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground font-medium">Career Ready</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="group">
              Apply Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
