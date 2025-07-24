import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Apply = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-background text-center px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-6 animate-fade-in-up">
            Apply to OTCR
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in-up">
            Take the first step towards joining our elite consulting team. Fill out our interest form to stay informed about upcoming events and opportunities.
          </p>
        </div>
      </section>

      {/* Interest Form Section */}
      <section className="py-24 bg-gradient-to-br from-navy-deep to-navy-medium">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-scale-in">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8">
              Fill out our interest form to stay informed about upcoming events, or start working on your application!
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Applications will open soon. For now, express your interest and we'll keep you updated on all opportunities and events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold hover-scale"
              >
                Interest Form
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-background px-8 py-4 text-lg font-semibold hover-scale"
                disabled
              >
                Application (Coming Soon)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-white animate-fade-in-up">
            Recruitment Timeline
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up hover-scale">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">First Round Interview</h3>
                <p className="text-muted-foreground">Behavioral questions and case interview to assess problem-solving skills</p>
              </div>
              
              <div className="text-center animate-fade-in-up hover-scale" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Coffee Chat</h3>
                <p className="text-muted-foreground">Informal conversation to learn more about OTCR culture and fit</p>
              </div>
              
              <div className="text-center animate-fade-in-up hover-scale" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Second Round Interview</h3>
                <p className="text-muted-foreground">Traditional case interview focusing on strategic problem-solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;