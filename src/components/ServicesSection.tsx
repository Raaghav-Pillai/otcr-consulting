import { BarChart3, Search, Target, Cog, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Industry & Market Analysis",
      description: "Comprehensive analysis of industry trends, technology developments, and market dynamics to inform strategic decisions.",
      features: ["Competitive landscape mapping", "Technology trend analysis", "Market sizing & forecasting"]
    },
    {
      icon: Target,
      title: "Marketing & Growth Strategies",
      description: "Data-driven marketing strategies and growth plans designed to accelerate business expansion and market penetration.",
      features: ["Go-to-market strategy", "Customer acquisition optimization", "Brand positioning & messaging"]
    },
    {
      icon: BarChart3,
      title: "Market Entry & Competitor Analysis",
      description: "Strategic market entry planning with detailed competitor analysis to identify opportunities and mitigate risks.",
      features: ["Market entry feasibility", "Competitor benchmarking", "Risk assessment & mitigation"]
    },
    {
      icon: Cog,
      title: "Operations Analysis",
      description: "Process optimization and operational efficiency improvements to streamline business operations and reduce costs.",
      features: ["Process mapping & optimization", "Cost structure analysis", "Performance metrics design"]
    },
    {
      icon: Lightbulb,
      title: "Product Development & Validation",
      description: "End-to-end product development support from ideation to market validation and launch strategy.",
      features: ["Product-market fit validation", "User research & testing", "MVP development strategy"]
    },
    {
      icon: Rocket,
      title: "Technology Commercialization",
      description: "Bridge the gap between innovative technology and commercial success with comprehensive commercialization strategies.",
      features: ["IP strategy & licensing", "Technology transfer", "Commercialization roadmaps"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive business and technology solutions across six core service areas, 
            combining academic rigor with practical business expertise to drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-md"
            >
              <CardContent className="p-8">
                {/* Service Icon */}
                <div className="bg-gradient-to-br from-navy-deep to-navy-light p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-navy-deep mb-4 group-hover:text-navy-light transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-warm rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-navy-deep mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our team can help drive your business forward with strategic solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-navy-deep text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
              <button className="border border-navy-deep text-navy-deep px-8 py-3 rounded-lg font-semibold hover:bg-navy-deep hover:text-white transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;