import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PastClients from '@/components/PastClients';
import { Button } from '@/components/ui/button';
import { Linkedin, ArrowDown, Instagram } from 'lucide-react';
import ScrollReveal from '@/reactbits/textanimations/ScrollReveal/ScrollReveal';
import FadeContent from '@/reactbits/animations/FadeContent/FadeContent';
import AnimatedContent from '@/reactbits/animations/AnimatedContent/AnimatedContent';
import SplitText from '@/reactbits/textanimations/SplitText/SplitText';

const stats = [
  { number: '25+', label: 'Years of Experience', desc: 'Established at the University of Illinois' },
  { number: '300+', label: 'Alumni Network', desc: 'Successful careers across industries' },
  { number: '15+', label: 'Industries', desc: 'Diverse sector expertise' },
  { number: '100%', label: 'Student-Led', desc: 'Fresh perspectives, proven results' },
];

const About = () => {
  // Real Instagram posts from @otcr_consulting
  // To update: Replace these URLs with actual Instagram post image URLs and links
  const instagramPosts = [
    {
      image: 'https://instagram.fmdw2-1.fna.fbcdn.net/v/t51.29350-15/placeholder1.jpg',
      caption: 'Latest from OTCR - Replace with actual post',
      link: 'https://www.instagram.com/p/POST_ID_1/', // Replace with actual Instagram post URL
      postId: 'POST_ID_1' // Replace with actual Instagram post ID
    },
    {
      image: 'https://instagram.fmdw2-1.fna.fbcdn.net/v/t51.29350-15/placeholder2.jpg',
      caption: 'Latest from OTCR - Replace with actual post',
      link: 'https://www.instagram.com/p/POST_ID_2/', // Replace with actual Instagram post URL
      postId: 'POST_ID_2' // Replace with actual Instagram post ID
    },
    {
      image: 'https://instagram.fmdw2-1.fna.fbcdn.net/v/t51.29350-15/placeholder3.jpg',
      caption: 'Latest from OTCR - Replace with actual post',
      link: 'https://www.instagram.com/p/POST_ID_3/', // Replace with actual Instagram post URL
      postId: 'POST_ID_3' // Replace with actual Instagram post ID
    }
  ];

  const companyLogos = [
    // Reds/Pinks
    'https://upload.wikimedia.org/wikipedia/commons/7/7e/DoorDash_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2a/Meta-Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Adobe_Corporate_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    // Oranges/Yellows
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/PayPal.svg',
    // Yellows/Golds
    'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    // Greens
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Googleplex-Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Tesla_Motors.svg',
    // Blues
    'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6e/Microsoft_Office_Logo_%282013-2019%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2e/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2d/Expedia_Logo.svg',
    // Blacks/Greys
    'https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/Apple_logo_black.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2c/JP_Morgan_Logo_2008.svg',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* About Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-background text-center px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-orange-warm rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-accent rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-orange-warm rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <SplitText
            text="About OTCR"
            className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-6"
            splitType="words"
          />
          <FadeContent delay={0.8}>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              For over two decades, we've been the premier student-run consulting firm at the University of Illinois, developing the next generation of business leaders.
            </p>
          </FadeContent>
        </div>
        
        {/* Scroll arrow */}
        <FadeContent delay={1.2}>
          <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center animate-bounce-slow group cursor-pointer">
            <ArrowDown className="w-8 h-8 text-accent group-hover:text-orange-warm transition-colors duration-300" />
            <span className="text-sm text-muted-foreground mt-2 group-hover:text-accent transition-colors duration-300">Scroll to know more</span>
          </div>
        </FadeContent>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-foreground">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <FadeContent key={idx} delay={idx * 0.2}>
                <div className="text-center group">
                  <AnimatedContent className="scale-in">
                    <div className="text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:text-orange-warm transition-colors duration-300">
                      {stat.number}
                    </div>
                  </AnimatedContent>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.desc}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Past Clients Section */}
      <PastClients />
      
      {/* Our Story */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-6">Our Story</h2>
            <FadeContent delay={0.3}>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2000 at the University of Illinois, OTCR Consulting began with a simple yet powerful vision: to provide exceptional learning opportunities for students while delivering real value to businesses.
              </p>
            </FadeContent>
            <FadeContent delay={0.5}>
              <p className="text-lg text-muted-foreground mb-4">
                What started as a small student organization has evolved into a premier consulting firm that has served over 300 clients. Our unique position allows us to combine academic rigor with fresh perspectives that drive innovation.
              </p>
            </FadeContent>
            <FadeContent delay={0.7}>
              <p className="text-lg text-muted-foreground">
                Today, we continue to uphold our founding principles while adapting to the evolving business landscape, always maintaining our commitment to student development and professional excellence.
              </p>
            </FadeContent>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-br from-navy-deep to-navy-medium relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-warm rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-white">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeContent delay={0.2}>
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-orange-warm transition-colors duration-300">Strategy Consulting</h3>
                <p className="text-muted-foreground">Comprehensive strategic planning and analysis to drive business growth and competitive advantage.</p>
              </div>
            </FadeContent>
            <FadeContent delay={0.4}>
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-orange-warm transition-colors duration-300">Market Research</h3>
                <p className="text-muted-foreground">In-depth market analysis and consumer insights to inform strategic decision-making.</p>
              </div>
            </FadeContent>
            <FadeContent delay={0.6}>
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-orange-warm transition-colors duration-300">Operations Optimization</h3>
                <p className="text-muted-foreground">Process improvement and operational efficiency enhancements to maximize performance.</p>
              </div>
            </FadeContent>
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
            {instagramPosts.map((post, idx) => (
              <FadeContent key={idx} delay={idx * 0.2}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{post.caption}</p>
                  </div>
                </a>
              </FadeContent>
            ))}
          </div>
          <FadeContent delay={0.8}>
            <div className="text-center">
              <a
                href="https://www.instagram.com/otcr_consulting/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" size="lg" className="text-lg px-8 hover:transform hover:scale-105 transition-all duration-300">
                  @otcr_consulting
                </Button>
              </a>
            </div>
          </FadeContent>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
