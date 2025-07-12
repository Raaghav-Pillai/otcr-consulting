import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    about: [
      { label: 'Our Story', href: '/about' },
      { label: 'Our Team', href: '/about' },
      { label: 'Mission & Values', href: '/about' }
    ],
    join: [
      { label: 'Apply Now', href: '/join' },
      { label: 'Open Positions', href: '/join' },
      { label: 'Application Process', href: '/join' }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4 text-accent">
                OTCR Consulting
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Premier student-run consulting firm at the University of Illinois, 
                developing the next generation of business leaders since 2000.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">info@otcrconsulting.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">(217) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">University of Illinois, Urbana-Champaign</span>
                </div>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-foreground">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Join Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-foreground">Join Us</h3>
              <ul className="space-y-3">
                {footerLinks.join.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="text-center">
            <div className="text-muted-foreground text-sm">
              © 2024 OTCR Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
