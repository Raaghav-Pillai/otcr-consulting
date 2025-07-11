import { ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-consulting.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="OTCR Consulting Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-navy-light/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Launch Your
              <span className="block bg-gradient-to-r from-orange-warm to-orange-light bg-clip-text text-transparent">
                Consulting Career
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl">
              Join OTCR Consulting, the premier student-run consulting firm at the University of Illinois. 
              Gain real-world experience working with Fortune 500 companies and innovative startups 
              while building the skills that will define your career.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-warm mb-2">24+</div>
                <div className="text-white/80 font-medium">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-warm mb-2">300+</div>
                <div className="text-white/80 font-medium">Alumni Network</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-warm mb-2">100%</div>
                <div className="text-white/80 font-medium">Career Ready</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="group">
                Apply Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>

        {/* Value Props */}
        <div className="absolute bottom-8 left-4 right-4 lg:left-8 lg:right-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-orange-warm/20 p-3 rounded-lg">
                <Users className="w-6 h-6 text-orange-warm" />
              </div>
              <div className="text-white">
                <h3 className="font-semibold">Real Experience</h3>
                <p className="text-sm text-white/80">Work on actual projects</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-orange-warm/20 p-3 rounded-lg">
                <Target className="w-6 h-6 text-orange-warm" />
              </div>
              <div className="text-white">
                <h3 className="font-semibold">Career Growth</h3>
                <p className="text-sm text-white/80">Build your professional portfolio</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-orange-warm/20 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-warm" />
              </div>
              <div className="text-white">
                <h3 className="font-semibold">Elite Network</h3>
                <p className="text-sm text-white/80">Connect with industry leaders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;