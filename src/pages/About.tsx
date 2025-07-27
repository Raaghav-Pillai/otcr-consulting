import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PastClients from '@/components/PastClients';
import { Button } from '@/components/ui/button';
import { Linkedin, ArrowDown } from 'lucide-react';

const stats = [
  { number: '25+', label: 'Years of Experience', desc: 'Established at the University of Illinois' },
  { number: '300+', label: 'Alumni Network', desc: 'Successful careers across industries' },
  { number: '15+', label: 'Industries', desc: 'Diverse sector expertise' },
  { number: '100%', label: 'Student-Led', desc: 'Fresh perspectives, proven results' },
];

const About = () => {
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
    // Purples
    // (add purple logos here if you have any)
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
      <section className="min-h-screen flex flex-col justify-center items-center bg-background text-center px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-6 animate-fade-in-up">About OTCR</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in-up">
            For over two decades, we've been the premier student-run consulting firm at the University of Illinois, developing the next generation of business leaders.
          </p>
        </div>
        {/* Scroll arrow */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
          <ArrowDown className="w-8 h-8 text-accent" />
          <span className="text-sm text-muted-foreground mt-2">Scroll to know more</span>
        </div>
      </section>
      {/* Past Clients Section */}
      <PastClients />
      {/* Our Story */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Founded in 2000 at the University of Illinois, OTCR Consulting began with a simple yet powerful vision: to provide exceptional learning opportunities for students while delivering real value to businesses.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            What started as a small student organization has evolved into a premier consulting firm that has served over 300 clients. Our unique position allows us to combine academic rigor with fresh perspectives that drive innovation.
          </p>
          <p className="text-lg text-muted-foreground">
            Today, we continue to uphold our founding principles while adapting to the evolving business landscape, always maintaining our commitment to student development and professional excellence.
          </p>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-br from-navy-deep to-navy-medium">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-white animate-fade-in-up">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border hover-scale animate-fade-in-up">
              <h3 className="text-xl font-bold text-accent mb-4">Strategy Consulting</h3>
              <p className="text-muted-foreground">Comprehensive strategic planning and analysis to drive business growth and competitive advantage.</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover-scale animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-accent mb-4">Market Research</h3>
              <p className="text-muted-foreground">In-depth market analysis and consumer insights to inform strategic decision-making.</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover-scale animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold text-accent mb-4">Operations Optimization</h3>
              <p className="text-muted-foreground">Process improvement and operational efficiency enhancements to maximize performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* After OTCR Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12">After OTCR</h2>
          <div className="relative">
            <div className="flex animate-scroll-left">
              {/* First set of logos */}
              {companyLogos.map((logo, idx) => (
                <div key={`first-${idx}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                  <img src={logo} alt="Company Logo" className="max-h-16 w-auto object-contain" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((logo, idx) => (
                <div key={`second-${idx}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                  <img src={logo} alt="Company Logo" className="max-h-16 w-auto object-contain" />
                </div>
              ))}
              {/* Third set for seamless loop */}
              {companyLogos.map((logo, idx) => (
                <div key={`third-${idx}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                  <img src={logo} alt="Company Logo" className="max-h-16 w-auto object-contain" />
                </div>
              ))}
            </div>
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
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300"></div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="accent" size="lg" className="text-lg px-8">
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

// Helper to get a random company domain for logo
function randomCompanyDomain(idx: number) {
  const domains = [
    'google.com', 'microsoft.com', 'apple.com', 'amazon.com', 'facebook.com', 'netflix.com', 'adobe.com', 'tesla.com',
    'ibm.com', 'twitter.com', 'paypal.com', 'linkedin.com', 'slack.com', 'airbnb.com', 'uber.com', 'lyft.com',
    'dropbox.com', 'spotify.com', 'salesforce.com', 'zoom.us', 'intel.com', 'nvidia.com', 'oracle.com', 'cisco.com',
    'samsung.com', 'dell.com', 'hp.com', 'lenovo.com', 'huawei.com', 'tencent.com', 'baidu.com', 'alibaba.com',
    'bytedance.com', 'pinterest.com', 'snapchat.com', 'reddit.com', 'quora.com', 'yahoo.com', 'ebay.com', 'shopify.com',
    'stripe.com', 'coinbase.com', 'atlassian.com', 'doordash.com', 'instacart.com', 'github.com', 'notion.so', 'asana.com',
    'canva.com', 'figma.com', 'zendesk.com', 'cloudflare.com', 'heroku.com', 'digitalocean.com', 'mailchimp.com', 'wework.com'
  ];
  return domains[idx % domains.length];
}

// Add this CSS to your global styles (e.g., index.css or App.css):
/*
@keyframes marquee-l {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-r {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
*/