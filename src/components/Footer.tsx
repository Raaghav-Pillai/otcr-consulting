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
    <footer className="bg-gradient-to-br from-navy-deep via-navy-medium to-background border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <FadeContent delay={0.1}>
              <div className="group">
                <div className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-blue-accent">
                  OTCR Consulting
                </div>
                <p className="text-white/80 mb-8 leading-relaxed text-lg">
                  Premier student-run consulting firm at the University of Illinois,
                  developing the next generation of business leaders since 2000.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-primary to-blue-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/75 group-hover:text-white transition-colors duration-300">recruitment@otcrconsulting.com</span>
                  </div>
                  <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-accent to-cyan-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/75 group-hover:text-white transition-colors duration-300">(###) ###-####</span>
                  </div>
                  <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-accent to-teal-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/75 group-hover:text-white transition-colors duration-300">University of Illinois, Urbana-Champaign</span>
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
