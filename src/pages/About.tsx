import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  const companyLogos = [
    "Bloomberg", "MIT", "HRT", "Penn", "PWC", "Citadel", "J.P.Morgan", "Bain & Company", "IMC",
    "Microsoft", "Facebook", "Robinhood", "NASA", "Harvard", "Rubrik", "Uber", "University of Chicago",
    "Deloitte", "DRW", "Amazon", "Google", "Jane Street", "Tesla", "BCG", "LinkedIn", "Goldman Sachs",
    "McKinsey & Company", "Stanford"
  ];

  const partners = [
    {
      name: "Luke Pollack",
      role: "Internal Operations Partner"
    },
    {
      name: "Jeff Page", 
      role: "Executive Partner"
    },
    {
      name: "Arda Kokyazici",
      role: "Project Excellence Partner"
    },
    {
      name: "Ayushe Nagpal",
      role: "Alumni Relations Partner"
    },
    {
      name: "Steele Kersten",
      role: "Social Partner"
    }
  ];

  const stats = [
    { number: "25", label: "Years Experience" },
    { number: "300", label: "Past Clients" },
    { number: "60", label: "Active Members" },
    { number: "63%", label: "Honors Students" },
    { number: "100%", label: "Job/Grad Placement" },
    { number: "100%", label: "Junior Internship Placement" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              We pride ourselves on delivering high quality, impactful work at every 
              level of our firm. Our partners create robust SoWs that are carried out 
              by teams of 5 consultants overseen by a PM. OTCR strives to grow 
              our members personally and professionally to prepare them for their 
              postgrad goals.
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Company Logos */}
      <section className="py-12 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll space-x-12 whitespace-nowrap">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex space-x-12 shrink-0">
                {companyLogos.map((company, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="px-8 py-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-foreground">
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
            Meet Our Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="w-56 h-56 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 group-hover:border-accent/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-xl bg-card"></div>
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">{partner.role}</h3>
                <p className="text-lg text-foreground">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Statistics */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
            Firm Statistics
          </h2>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-background rounded-2xl border border-border hover:border-accent/50 transition-all duration-300">
                <div className="text-5xl lg:text-6xl font-bold text-accent mb-4">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Student Breakdown */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Student Breakdown</h3>
            <div className="max-w-md mx-auto">
              <div className="w-80 h-80 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent/30 via-accent/20 to-accent/10 border-4 border-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground mb-4">Academic Distribution</div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between gap-4">
                        <span>Business</span>
                        <span className="font-semibold text-accent">41%</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Engineering</span>
                        <span className="font-semibold text-accent">47%</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Other</span>
                        <span className="font-semibold text-accent">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After OTCR */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              After OTCR
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our alumni have gone on to work at top companies and pursue advanced degrees 
              at prestigious institutions around the world.
            </p>
          </div>
          
          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {companyLogos.slice(0, 16).map((company, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:bg-card/80 transition-all duration-300 flex items-center justify-center min-h-[80px]"
              >
                <span className="text-sm font-semibold text-foreground text-center">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow OTCR */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
            Follow OTCR on Instagram
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300"></div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="accent" size="lg" className="text-lg px-8">
              @otcrconsulting
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;