import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

const stats = [
  { number: '25+', label: 'Years of Experience', desc: 'Established at the University of Illinois' },
  { number: '300+', label: 'Alumni Network', desc: 'Successful careers across industries' },
  { number: '15+', label: 'Industries', desc: 'Diverse sector expertise' },
  { number: '100%', label: 'Student-Led', desc: 'Fresh perspectives, proven results' },
];

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
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-2">About OTCR Consulting</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            For over two decades, we've been the premier student-run consulting firm at the University of Illinois, developing the next generation of business leaders.
          </p>
        </div>
      </section>
      {/* Past Clients Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-8">Past Clients</h2>
          <div className="overflow-x-hidden space-y-6">
            {/* Top row: scrolls left */}
            <div className="flex items-center gap-12 animate-marquee-l whitespace-nowrap" style={{ minWidth: '200%' }}>
              {Array.from({ length: 50 }).map((_, idx) => (
                <img
                  key={"top-"+idx}
                  src={`https://logo.clearbit.com/${randomCompanyDomain(idx)}`}
                  alt="Company Logo"
                  className="h-16 w-auto object-contain inline-block"
                  style={{ minWidth: '64px' }}
                />
              ))}
              {Array.from({ length: 50 }).map((_, idx) => (
                <img
                  key={"top-dup-"+idx}
                  src={`https://logo.clearbit.com/${randomCompanyDomain(idx)}`}
                  alt="Company Logo"
                  className="h-16 w-auto object-contain inline-block"
                  style={{ minWidth: '64px' }}
                />
              ))}
            </div>
            {/* Bottom row: scrolls right */}
            <div className="flex items-center gap-12 animate-marquee-r whitespace-nowrap" style={{ minWidth: '200%' }}>
              {Array.from({ length: 50 }).map((_, idx) => (
                <img
                  key={"bot-"+idx}
                  src={`https://logo.clearbit.com/${randomCompanyDomain(49-idx)}`}
                  alt="Company Logo"
                  className="h-16 w-auto object-contain inline-block"
                  style={{ minWidth: '64px' }}
                />
              ))}
              {Array.from({ length: 50 }).map((_, idx) => (
                <img
                  key={"bot-dup-"+idx}
                  src={`https://logo.clearbit.com/${randomCompanyDomain(49-idx)}`}
                  alt="Company Logo"
                  className="h-16 w-auto object-contain inline-block"
                  style={{ minWidth: '64px' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
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
      {/* Stats */}
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

      {/* Team Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white text-center mb-2">Lead by Mission-Driven People</h2>
          <p className="text-md text-muted-foreground text-center mb-12">Whose expertise can be yours during our collaboration.</p>
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
      {/* After OTCR Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12">After OTCR</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center max-w-6xl mx-auto">
            {companyLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <img src={logo} alt="Company Logo" className="max-h-16 w-auto object-contain" />
              </div>
            ))}
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