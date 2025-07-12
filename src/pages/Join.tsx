import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  "Work directly with Fortune 500 companies and innovative startups",
  "Develop critical business analysis and strategic thinking skills",
  "Build your professional portfolio with meaningful accomplishments",
  "Connect with industry professionals and like-minded peers"
];

const Join = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-24 pb-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Are you a University of Illinois student passionate about business strategy and consulting? 
              Join OTCR and gain invaluable experience while making a real impact.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Why Join OTCR?</h3>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Application Process</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Apply Online", description: "Submit your application with resume and cover letter" },
                { step: 2, title: "Phone Interview", description: "Brief conversation about your background and interests" },
                { step: 3, title: "Case Study", description: "Complete a business case to show your analytical skills" },
                { step: 4, title: "Welcome!", description: "Join the team and start your first project" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-background">
                    {step.step}
                  </div>
                  <h4 className="font-bold mb-2 text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 max-w-2xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Make an Impact?</h3>
            <p className="text-muted-foreground mb-6">
              Applications are reviewed on a rolling basis. Join our team and start building your consulting career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="group">
                Apply Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Join; 