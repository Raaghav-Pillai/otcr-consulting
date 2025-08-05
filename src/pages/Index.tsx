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

// Enhanced client list with tech companies and consulting firms - using reliable SVG sources
const clients = [
  // Tech Giants - Using brand-official colors
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
  { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' },
  { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
  { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg' },
  // Consulting Firms
  { name: 'McKinsey & Company', logo: 'https://logos-world.net/wp-content/uploads/2021/02/McKinsey-Company-Logo.png' },
  { name: 'BCG', logo: 'https://logos-world.net/wp-content/uploads/2021/02/BCG-Logo.png' },
  { name: 'Bain & Company', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Bain-Company-Logo.png' },
  { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.svg' },
  { name: 'PwC', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg' },
  { name: 'EY', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/EY_logo_2019.svg' },
  { name: 'KPMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/KPMG_logo.svg' },
  // Financial Services
  { name: 'Goldman Sachs', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Goldman-Sachs-Logo.png' },
  { name: 'JPMorgan Chase', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/JPMorgan_Chase_logo.svg' },
  { name: 'Morgan Stanley', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Morgan_Stanley_Logo_1.svg' },
  // Additional Companies
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* Business & Tech Strategy Section */}
      <section className="py-24 bg-navy-deep">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-5xl mx-auto">
              We create well-informed and scalable business solutions
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">
              Delivering strategic insights that drive measurable results for our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeContent delay={0.2}>
              <div className="professional-card p-8 group text-center">
                <div className="w-16 h-16 bg-teal-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-teal-primary mb-6 group-hover:text-white transition-colors duration-300">Business Strategy</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  We strive to effectively tackle our clients' short and long term business challenges across areas such as market entry, competitor analysis, acquisitions, product development, and more.
                </p>
              </div>
            </FadeContent>
            <FadeContent delay={0.4}>
              <div className="professional-card p-8 group text-center">
                <div className="w-16 h-16 bg-blue-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-accent mb-6 group-hover:text-white transition-colors duration-300">Tech Strategy</h3>
                <p className="text-lg text-white/90 leading-relaxed">
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

      {/* Why Join OTCR Section */}
      <section className="py-20 bg-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white-accent mb-16">Why Join OTCR?</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              "Work directly with Fortune 500 companies and innovative startups",
              "Develop critical business analysis and strategic thinking skills",
              "Build your professional portfolio with meaningful accomplishments",
              "Connect with industry professionals and like-minded peers"
            ].map((benefit, index) => (
              <FadeContent key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-3 bg-card rounded-xl p-6 border border-border/30 hover:border-teal-primary/50 transition-all duration-300 hover:transform hover:scale-105 group shadow-sm hover:shadow-lg">
                  <div className="w-6 h-6 bg-teal-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-white-accent transition-colors duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-foreground group-hover:text-white-accent transition-colors duration-300">{benefit}</span>
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
