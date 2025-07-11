import { Users, BookOpen, Trophy, Network, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const JoinSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Real-World Experience",
      description: "Work directly with Fortune 500 companies and innovative startups on actual business challenges."
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Develop critical business analysis, strategic thinking, and consulting skills through hands-on projects."
    },
    {
      icon: Trophy,
      title: "Leadership Opportunities",
      description: "Take on leadership roles and build your professional portfolio with meaningful accomplishments."
    },
    {
      icon: Network,
      title: "Professional Network",
      description: "Connect with industry professionals, alumni, and like-minded peers who share your ambition."
    }
  ];

  const positions = [
    {
      title: "Business Analyst",
      description: "Conduct market research, competitive analysis, and data-driven insights for client projects.",
      requirements: ["Strong analytical skills", "Proficiency in Excel/Google Sheets", "Interest in business strategy"],
      commitment: "10-15 hours/week"
    },
    {
      title: "Project Manager",
      description: "Lead client engagements, coordinate team activities, and ensure project deliverables meet quality standards.",
      requirements: ["Leadership experience", "Strong communication skills", "Project management interest"],
      commitment: "15-20 hours/week"
    },
    {
      title: "Research Specialist",
      description: "Deep-dive into industry trends, emerging technologies, and market dynamics to support strategic recommendations.",
      requirements: ["Research experience", "Attention to detail", "Curiosity about industry trends"],
      commitment: "8-12 hours/week"
    }
  ];

  const applicationProcess = [
    { step: 1, title: "Submit Application", description: "Complete our online application form with your resume and cover letter." },
    { step: 2, title: "Initial Screening", description: "Brief phone or video interview to discuss your background and interests." },
    { step: 3, title: "Case Study Exercise", description: "Complete a business case study to demonstrate your analytical thinking." },
    { step: 4, title: "Final Interview", description: "In-depth interview with our leadership team and current members." },
    { step: 5, title: "Onboarding", description: "Welcome to the team! Begin training and your first project assignment." }
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-navy-deep to-navy-light text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Are you a University of Illinois student passionate about business strategy and consulting? 
            Join OTCR and gain invaluable experience while making a real impact on businesses.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Why Join OTCR?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-orange-warm" />
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="opacity-90 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Open Positions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3">{position.title}</h4>
                  <p className="opacity-90 mb-4 leading-relaxed">{position.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Requirements:</h5>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-warm mt-0.5 flex-shrink-0" />
                          <span className="text-sm opacity-90">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-orange-warm/20 rounded-lg p-3">
                    <span className="text-sm font-semibold">Time Commitment: </span>
                    <span className="text-sm">{position.commitment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Application Process</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {applicationProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-warm w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white">
                    {step.step}
                  </div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm opacity-90">{step.description}</p>
                  {index < applicationProcess.length - 1 && (
                    <ArrowRight className="w-6 h-6 mx-auto mt-4 opacity-60 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="opacity-90 mb-6">
              Applications are reviewed on a rolling basis. Join our team and start building your consulting career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="group">
                Apply Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-navy-deep">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;