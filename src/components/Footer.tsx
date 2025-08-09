import { Mail, Phone, MapPin } from 'lucide-react';
import FadeContent from '@/reactbits/animations/FadeContent/FadeContent';

const Footer = () => {
  const footerLinks = {
    about: [
      { label: 'Our Story', href: '/about' },
      { label: 'Our Team', href: '/about' },
      { label: 'After OTCR', href: '/about' }
    ],
    join: [
      { label: 'Apply Now', href: '/join' },
      { label: 'Application Process', href: '/join' }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <FadeContent delay={0.1}>
              <div className="group">
                <div className="text-2xl font-bold mb-4 text-accent group-hover:text-orange-warm transition-colors duration-300">
                  OTCR Consulting
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Premier student-run consulting firm at the University of Illinois,
                  developing the next generation of business leaders since 2000.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 group hover:text-accent transition-colors duration-300">
                    <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white/75 group-hover:text-accent transition-colors duration-300">recruitment@otcrconsulting.com</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:text-accent transition-colors duration-300">
                    <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white/75 group-hover:text-accent transition-colors duration-300">(###) ###-####</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:text-accent transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white/75 group-hover:text-accent transition-colors duration-300">University of Illinois, Urbana-Champaign</span>
                  </div>
                </div>
              </div>
            </FadeContent>

            {/* About Links */}
            <FadeContent delay={0.2}>
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">About</h3>
                <ul className="space-y-3">
                  {footerLinks.about.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/75 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeContent>

            {/* Join Links */}
            <FadeContent delay={0.3}>
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Join Us</h3>
                <ul className="space-y-3">
                  {footerLinks.join.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/75 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeContent>
          </div>
        </div>
        
        {/* Copyright */}
        <FadeContent delay={0.4}>
          <div className="border-t border-border py-6 text-center">
            <p className="text-white/75">
              © 2025 OTCR Consulting. All rights reserved.
            </p>
          </div>
        </FadeContent>
      </div>
    </footer>
  );
};

export default Footer;
