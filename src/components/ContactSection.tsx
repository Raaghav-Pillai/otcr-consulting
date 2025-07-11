import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@otcrconsulting.com",
      description: "Send us a message anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(217) 555-0123",
      description: "Monday - Friday, 9AM - 5PM"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "University of Illinois",
      description: "Urbana-Champaign, IL"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "24-48 hours",
      description: "We'll get back to you quickly"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with strategic consulting? 
            Get in touch with our team to discuss your project needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-navy-deep mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-navy-deep focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-navy-deep focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-navy-deep focus:border-transparent transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-navy-deep focus:border-transparent transition-colors"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-navy-deep focus:border-transparent transition-colors">
                  <option>Select a service</option>
                  <option>Industry & Market Analysis</option>
                  <option>Marketing & Growth Strategies</option>
                  <option>Market Entry & Competitor Analysis</option>
                  <option>Operations Analysis</option>
                  <option>Product Development & Validation</option>
                  <option>Technology Commercialization</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-navy-deep focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and how we can help..."
                />
              </div>

              <Button variant="professional" size="lg" className="w-full group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-deep mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're a business looking for strategic consulting or a student 
                interested in joining our team, we'd love to hear from you. Our team is 
                always ready to discuss new opportunities and partnerships.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-navy-deep to-navy-light p-3 rounded-lg">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="font-medium text-navy-deep mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <div className="bg-navy-deep rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Quick Facts</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-warm rounded-full" />
                  <span>Free initial consultation for all new clients</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-warm rounded-full" />
                  <span>Flexible engagement models to fit your budget</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-warm rounded-full" />
                  <span>Direct access to University of Illinois resources</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-warm rounded-full" />
                  <span>Proven track record with 300+ successful projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;