import { ArrowRight, Target, Lightbulb, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Optional: dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              The Premier Student-Run Consulting Firm
              <span className="block text-accent mt-2">
                at the University of Illinois
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Scroll to learn more arrow and text */}
              <div className="flex flex-col items-center w-full animate-bounce-slow mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="text-sm text-muted-foreground mt-1">Scroll to learn more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Excellence</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Entrepreneurship</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Learning</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Community</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Committed to delivering outstanding business solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Since 2000, OTCR Consulting has brought together the brightest students at the 
              University of Illinois to solve pressing real-world issues for our clients.
            </p>
            <Button variant="outline" size="lg">
              Who We Are
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-light text-foreground text-center mb-8 leading-relaxed">
              "OTCR Consultants are passionate, knowledgeable, and have a keen intuition 
              for the business world"
            </blockquote>
            <div className="text-center">
              <p className="text-lg font-semibold text-accent">Luke Pollack</p>
              <p className="text-muted-foreground">Internal Operations Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">What we offer...</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Industry, technology, and market trends analysis</h3>
              <p className="text-muted-foreground">
                Using data and insights to create conclusions and forecast the trajectory of industries/technology
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Marketing strategies</h3>
              <p className="text-muted-foreground">
                Analyzing marketing trends, competitor insights, and consumer data to develop the most effective marketing approach
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Growth strategies</h3>
              <p className="text-muted-foreground">
                Identifying a clients' goals and objectives, current and future obstacles, and strategies to increase market share and revenue
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Market entry</h3>
              <p className="text-muted-foreground">
                Pinpointing market size, competition, and opportunities to determine the value and risk of the market
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Competitor analysis and partnership strategy</h3>
              <p className="text-muted-foreground">
                Analyzing competitor and partnership landscape to identify potential opportunities
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Operations analysis and improvements</h3>
              <p className="text-muted-foreground">
                Using a deep internal analysis to improve the client's business strategy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
