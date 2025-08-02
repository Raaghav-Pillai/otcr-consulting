import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
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
    desc: "Identifying a clients’ goals and objectives, current and future obstacles, and strategies to increase market share and revenue"
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
    desc: "Using a deep internal analysis to improve the client’s business strategy and performance"
  },
  {
    title: 'Product development',
    desc: "Performing product and market research to improve and tailor the product’s design/functionality"
  },
  {
    title: 'Product validation',
    desc: "Conducting competitive analysis and compiling consumer feedback to identify the effectiveness of the client’s product(s) in the market"
  },
  {
    title: 'Technology commercialization',
    desc: "Analyzing market research and consumer data to guide the client’s technology product(s) to market"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* Business & Tech Strategy Section */}
      <section className="py-20 bg-[#181c24]">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 max-w-4xl">
              We create well-informed and scalable business solutions
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-6">Business Strategy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We strive to effectively tackle our clients’ short and long term business challenges across areas such as market entry, competitor analysis, acquisitions, product development, and more.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent mb-6">Tech Strategy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in assisting our client companies in their technical endeavors through analysis of emerging technologies, research of potential applications, writing whitepapers, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-white text-center mb-8 leading-relaxed">
              "OTCR Consultants are passionate, knowledgeable, and have a keen intuition for the business world"
            </blockquote>
            <div className="text-center">
              <p className="text-lg font-semibold text-accent">Luke Pollack</p>
              <p className="text-md text-muted-foreground">Internal Operations Partner</p>
            </div>
          </div>
        </div>
      </section>
      {/* What we offer Section */}
      <section className="py-20 bg-[#181c24]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">What we offer...</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="text-xl font-bold text-accent mb-2">{service.title}</h3>
                <p className="text-md text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
