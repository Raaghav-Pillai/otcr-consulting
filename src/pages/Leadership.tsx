import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, ArrowDown, Mail } from 'lucide-react';
import ScrollReveal from '@/reactbits/textanimations/ScrollReveal/ScrollReveal';
import FadeContent from '@/reactbits/animations/FadeContent/FadeContent';
import SplitText from '@/reactbits/textanimations/SplitText/SplitText';

const partners = [
  {
    name: 'Coming Soon',
    role: 'Internal Operations Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: 'Coming Soon',
    role: 'Executive Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: 'Coming Soon',
    role: 'Project Excellence Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: 'Coming Soon',
    role: 'Alumni Relations Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: 'Coming Soon',
    role: 'Social Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: 'Coming Soon',
    role: 'Tech Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: 'Coming Soon',
    role: 'Professional Development Partner',
    img: '',
    linkedin: '#'
  },
  {
    name: 'Coming Soon',
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
      <section className="min-h-screen flex flex-col justify-center items-center bg-background text-center px-4 relative overflow-hidden">

        
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <SplitText
            text="Lead by Mission-Driven People"
            className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-6"
            splitType="words"
          />
          <FadeContent delay={1}>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
              Whose expertise can be yours during our collaboration.
            </p>
          </FadeContent>
        </div>
        
        {/* Scroll arrow */}
        <FadeContent delay={1.5}>
          <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center animate-bounce-slow group cursor-pointer">
            <ArrowDown className="w-8 h-8 text-accent group-hover:text-orange-warm transition-colors duration-300" />
            <span className="text-sm text-muted-foreground mt-2 group-hover:text-accent transition-colors duration-300">Scroll to know more</span>
          </div>
        </FadeContent>
      </section>

      {/* Leadership Team Photo */}
      <section className="py-24 bg-card">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">Our Leadership in Action</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">See our leaders collaborating and making an impact</p>
          </div>

          <FadeContent delay={0.2}>
            <div className="image-placeholder aspect-video max-w-4xl mx-auto rounded-2xl mb-16">
              <div className="text-center">
                <svg className="w-20 h-20 mb-6 mx-auto opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <p className="text-2xl font-semibold mb-2">Leadership Team Photo</p>
                <p className="text-lg opacity-75">Add a professional group photo of your leadership team here</p>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">Meet Our Leaders</h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">Get to know the individuals shaping our future</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, idx) => (
              <FadeContent key={idx} delay={idx * 0.1}>
                <div className="professional-card rounded-2xl overflow-hidden flex flex-col group">
                  {partner.img ? (
                    <img src={partner.img} alt={partner.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-64 bg-navy-light flex items-center justify-center text-4xl text-teal-primary group-hover:text-teal-light transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-teal-primary/20 flex items-center justify-center">
                        ?
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col justify-end">
                    <div className="text-lg font-semibold text-white mb-1 group-hover:text-teal-primary transition-colors duration-300">{partner.name}</div>
                    <div className="text-md text-white/80 mb-4">{partner.role}</div>
                    <div className="flex items-center space-x-3 mt-auto">
                      {partner.linkedin && (
                        <a
                          href={partner.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
<<<<<<< HEAD
                          className="text-white/70 hover:text-teal-primary transition-all duration-300 p-2 rounded-full hover:bg-teal-primary/10 group"
=======
                          className="text-muted-foreground hover:text-accent transition-all duration-300 p-2 rounded-full hover:bg-accent/10 group"
>>>>>>> b32fe7cbbec2bb3823fd13add1ea640133ef5bdc
                        >
                          <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        </a>
                      )}
                      <a
                        href={`mailto:contact@otcr.com?subject=Contact ${partner.name}`}
<<<<<<< HEAD
                        className="text-white/70 hover:text-teal-primary transition-all duration-300 p-2 rounded-full hover:bg-teal-primary/10 group"
=======
                        className="text-muted-foreground hover:text-accent transition-all duration-300 p-2 rounded-full hover:bg-accent/10 group"
>>>>>>> b32fe7cbbec2bb3823fd13add1ea640133ef5bdc
                      >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-24 bg-navy-deep">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white mb-8">Our Leadership Philosophy</h2>
            <FadeContent delay={0.3}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At OTCR, we believe that great leadership comes from a combination of expertise, empathy, and innovation. Our leadership team is carefully selected not just for their academic achievements, but for their passion for mentoring and their commitment to excellence.
              </p>
            </FadeContent>
            <FadeContent delay={0.5}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each leader brings unique perspectives from diverse backgrounds and industries, ensuring that our consulting approach is both comprehensive and cutting-edge. Together, they foster an environment where both clients and team members can thrive and achieve their goals.
              </p>
            </FadeContent>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
