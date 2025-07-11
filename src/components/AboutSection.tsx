import { Calendar, Users2, Building2, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Calendar,
      number: "2000",
      label: "Founded",
      description: "Established at the University of Illinois"
    },
    {
      icon: Users2,
      number: "300+",
      label: "Clients Served",
      description: "From startups to Fortune 500 companies"
    },
    {
      icon: Building2,
      number: "15+",
      label: "Industries",
      description: "Diverse sector expertise"
    },
    {
      icon: GraduationCap,
      number: "100%",
      label: "Student-Led",
      description: "Fresh perspectives, proven results"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in every project, delivering solutions that exceed expectations."
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge approaches and fresh perspectives to solve complex business challenges."
    },
    {
      title: "Collaboration",
      description: "We work closely with clients as partners, ensuring solutions align with their unique needs and goals."
    },
    {
      title: "Growth",
      description: "We focus on sustainable, scalable solutions that drive long-term business growth and success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
            About OTCR Consulting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over two decades, we've been bridging the gap between academic excellence 
            and real-world business impact, delivering strategic solutions that drive growth.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-navy-deep mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2000 at the University of Illinois, OTCR Consulting began with a simple yet 
                powerful vision: to harness the intellectual capital and fresh perspectives of top university 
                students to solve real-world business challenges.
              </p>
              <p>
                What started as a small student organization has evolved into a premier consulting firm 
                that has served over 300 clients across diverse industries. Our unique position at the 
                intersection of academic rigor and practical business application allows us to deliver 
                innovative solutions that traditional consulting firms might overlook.
              </p>
              <p>
                Today, we continue to uphold our founding principles while adapting to the evolving 
                business landscape, always maintaining our commitment to excellence, innovation, and 
                measurable results.
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border text-center"
              >
                <div className="bg-gradient-to-br from-navy-deep to-navy-light p-3 rounded-lg w-fit mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-navy-deep mb-2">{achievement.number}</div>
                <div className="font-semibold text-foreground mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-gray-light to-white rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-navy-deep mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-warm to-orange-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{value.title[0]}</span>
                </div>
                <h4 className="text-xl font-bold text-navy-deep mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <div className="bg-navy-deep text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg lg:text-xl leading-relaxed opacity-90">
              "To empower businesses with innovative, data-driven solutions while providing 
              exceptional learning opportunities for the next generation of business leaders. 
              We believe that combining academic excellence with real-world application creates 
              value that benefits both our clients and our student consultants."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;