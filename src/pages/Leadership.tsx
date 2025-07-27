import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, ArrowDown } from 'lucide-react';

const partners = [
  {
    name: '',
    role: 'Internal Operations Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: '',
    role: 'Executive Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: '',
    role: 'Project Excellence Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: '',
    role: 'Alumni Relations Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: '',
    role: 'Social Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: '',
    role: 'Tech Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: '',
    role: 'Professional Development Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: '',
    role: 'Career Placement Partner',
    img: '',
    linkedin: '#'
  },
];

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Leadership Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-background text-center px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-6 animate-fade-in-up">Lead by Mission-Driven People</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in-up">
            Whose expertise can be yours during our collaboration.
          </p>
        </div>
        {/* Scroll arrow */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
          <ArrowDown className="w-8 h-8 text-accent" />
          <span className="text-sm text-muted-foreground mt-2">Scroll to know more</span>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-[#181c24] rounded-2xl overflow-hidden shadow border border-border flex flex-col">
                {partner.img ? (
                  <img src={partner.img} alt={partner.name} className="w-full h-64 object-cover" />
                ) : (
                  <div className="w-full h-64 bg-muted-foreground/10 flex items-center justify-center text-4xl text-muted-foreground">?</div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-end">
                  <div className="text-lg font-semibold text-white mb-1">{partner.name}</div>
                  <div className="text-md text-muted-foreground mb-4">{partner.role}</div>
                  <div className="flex items-center space-x-3 mt-auto">
                    {partner.linkedin && (
                      <a href={partner.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;