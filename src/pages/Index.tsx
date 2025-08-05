import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import InfiniteScrollLogos from '@/components/InfiniteScrollLogos';
import ScrollReveal from '@/reactbits/textanimations/ScrollReveal/ScrollReveal';
import FadeContent from '@/reactbits/animations/FadeContent/FadeContent';
import AnimatedContent from '@/reactbits/animations/AnimatedContent/AnimatedContent';

const services = [
  {
    title: 'Industry, technology, and market trends analysis',
    desc: "Using data and insights to create conclusions and forecast the trajectory of industries/technology"
  },
  {
    title: 'Marketing strategies',
    desc: "Analyzing marketing trends, competitor insights, and consumer data to develop the most effective marketing approach"
  },
  {
    title: 'Growth strategies',
    desc: "Identifying a clients' goals and objectives, current and future obstacles, and strategies to increase market share and revenue"
  },
  {
    title: 'Market entry',
    desc: "Pinpointing market size, competition, and opportunities to determine the value and risk of the client entering a new market"
  },
  {
    title: 'Competitor analysis and partnership strategy',
    desc: "Analyzing competitor and partnership landscape to map acquisition opportunities for the client"
  },
  {
    title: 'Operations analysis and improvements',
    desc: "Using a deep internal analysis to improve the client's business strategy and performance"
  },
  {
    title: 'Product development',
    desc: "Performing product and market research to improve and tailor the product's design/functionality"
  },
  {
    title: 'Product validation',
    desc: "Conducting competitive analysis and compiling consumer feedback to identify the effectiveness of the client's product(s) in the market"
  },
  {
    title: 'Technology commercialization',
    desc: "Analyzing market research and consumer data to guide the client's technology product(s) to market"
  },
];

// Enhanced client list with tech companies and consulting firms
const clients = [
  // Tech Giants
  { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
  { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
  { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-14.svg' },
  { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg' },
  { name: 'Meta', logo: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg' },
  { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-4.svg' },
  { name: 'Tesla', logo: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg' },
  { name: 'Spotify', logo: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg' },
  { name: 'Uber', logo: 'https://cdn.worldvectorlogo.com/logos/uber-11.svg' },
  { name: 'LinkedIn', logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' },
  { name: 'Airbnb', logo: 'https://cdn.worldvectorlogo.com/logos/airbnb-2.svg' },
  { name: 'Adobe', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-1.svg' },
  // Consulting Firms
  { name: 'McKinsey & Company', logo: 'https://cdn.worldvectorlogo.com/logos/mckinsey-company.svg' },
  { name: 'BCG', logo: 'https://cdn.worldvectorlogo.com/logos/bcg-1.svg' },
  { name: 'Bain & Company', logo: 'https://cdn.worldvectorlogo.com/logos/bain-company.svg' },
  { name: 'Deloitte', logo: 'https://cdn.worldvectorlogo.com/logos/deloitte-2.svg' },
  { name: 'PwC', logo: 'https://cdn.worldvectorlogo.com/logos/pwc-2.svg' },
  { name: 'EY', logo: 'https://cdn.worldvectorlogo.com/logos/ey-2.svg' },
  { name: 'KPMG', logo: 'https://cdn.worldvectorlogo.com/logos/kpmg-1.svg' },
  // Financial Services
  { name: 'Goldman Sachs', logo: 'https://cdn.worldvectorlogo.com/logos/goldman-sachs.svg' },
  { name: 'JPMorgan Chase', logo: 'https://cdn.worldvectorlogo.com/logos/jp-morgan.svg' },
  { name: 'Morgan Stanley', logo: 'https://cdn.worldvectorlogo.com/logos/morgan-stanley.svg' },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* Business & Tech Strategy Section */}
      <section className="py-20 bg-gradient-sections">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-accent mb-16 max-w-4xl">
            We create well-informed and scalable business solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <FadeContent delay={0.2}>
              <div className="group">
                <h3 className="text-2xl font-bold text-teal-primary mb-6 group-hover:text-teal-light transition-colors duration-300">Business Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We strive to effectively tackle our clients' short and long term business challenges across areas such as market entry, competitor analysis, acquisitions, product development, and more.
                </p>
              </div>
            </FadeContent>
            <FadeContent delay={0.4}>
              <div className="group">
                <h3 className="text-2xl font-bold text-teal-primary mb-6 group-hover:text-teal-light transition-colors duration-300">Tech Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in assisting our client companies in their technical endeavors through analysis of emerging technologies, research of potential applications, writing whitepapers, and more.
                </p>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* We have worked with Section */}
      <InfiniteScrollLogos
        title="We have worked with"
        subtitle="Trusted by leading organizations across various industries"
        clients={clients}
      />

      {/* What we offer Section */}
      <section className="py-20 bg-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white-accent mb-16">What we offer...</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <FadeContent key={idx} delay={idx * 0.1}>
                <div className="mb-8 p-6 rounded-xl bg-card border border-border/30 hover:border-teal-primary/50 transition-all duration-300 hover:transform hover:scale-105 group shadow-sm hover:shadow-lg">
                  <h3 className="text-xl font-bold text-teal-primary mb-2 group-hover:text-white-accent transition-colors duration-300">{service.title}</h3>
                  <p className="text-md text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
