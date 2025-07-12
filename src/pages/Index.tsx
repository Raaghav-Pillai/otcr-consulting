import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* Business & Tech Strategy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 max-w-4xl">
            We create well-informed and scalable business solutions
          </h2>
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
      <Footer />
    </div>
  );
};

export default Index;
