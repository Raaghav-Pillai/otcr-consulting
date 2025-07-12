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
      role: "Internal Operations Partner",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Jeff Page", 
      role: "Executive Partner",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Arda Kokyazici",
      role: "Project Excellence Partner", 
      image: "/api/placeholder/300/300"
    },
    {
      name: "Ayushe Nagpal",
      role: "Alumni Relations Partner",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Steele Kersten",
      role: "Social Partner",
      image: "/api/placeholder/300/300"
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
      
      {/* Scrolling Company Logos */}
      <section className="py-8 bg-card overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {[...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-accent/10 rounded-lg min-w-[150px] text-center"
              >
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We pride ourselves on delivering high quality, impactful work at every 
              level of our firm. Our partners create robust SoWs that are carried out 
              by teams of 5 consultants overseen by a PM. OTCR strives to grow 
              our members personally and professionally to prepare them for their 
              postgrad goals.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Partners */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Meet Our Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg bg-muted"></div>
                <h3 className="text-xl font-bold text-accent mb-2">{partner.role}</h3>
                <p className="text-lg text-foreground">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Firm Statistics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Pie Chart Section */}
          <div className="mt-16 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground mb-2">Student Breakdown</div>
                  <div className="text-sm text-muted-foreground">
                    <div>Business: 41%</div>
                    <div>Engineering: 47%</div>
                    <div>Other: 12%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After OTCR */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            After OTCR
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our alumni have gone on to work at top companies and pursue advanced degrees 
            at prestigious institutions around the world.
          </p>
          
          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {companyLogos.slice(0, 24).map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-background rounded-lg hover:bg-accent/10 transition-colors"
              >
                <span className="text-sm font-medium text-foreground text-center">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow OTCR */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Follow OTCR on Instagram...
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="aspect-square bg-muted rounded-lg"></div>
            <div className="aspect-square bg-muted rounded-lg"></div>
            <div className="aspect-square bg-muted rounded-lg"></div>
          </div>
          <div className="text-center mt-8">
            <Button variant="accent" size="lg">
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