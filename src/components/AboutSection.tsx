const AboutSection = () => {
  const achievements = [
    {
      number: "25+",
      label: "Years of Excellence",
      description: "Established at the University of Illinois"
    },
    {
      number: "300+",
      label: "Alumni Network", 
      description: "Successful careers across industries"
    },
    {
      number: "15+",
      label: "Industries",
      description: "Diverse sector expertise"
    },
    {
      number: "100%",
      label: "Student-Led",
      description: "Fresh perspectives, proven results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About OTCR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over two decades, we've been the premier student-run consulting firm at the 
            University of Illinois, developing the next generation of business leaders.
          </p>
        </div>

        {/* Story and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2000 at the University of Illinois, OTCR Consulting began with a simple yet 
                powerful vision: to provide exceptional learning opportunities for students while delivering 
                real value to businesses.
              </p>
              <p>
                What started as a small student organization has evolved into a premier consulting firm 
                that has served over 300 clients. Our unique position allows us to combine academic 
                rigor with fresh perspectives that drive innovation.
              </p>
              <p>
                Today, we continue to uphold our founding principles while adapting to the evolving 
                business landscape, always maintaining our commitment to student development and 
                professional excellence.
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border text-center hover:bg-secondary transition-colors"
              >
                <div className="text-3xl font-bold text-accent mb-2">{achievement.number}</div>
                <div className="font-semibold text-foreground mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
            <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
              "To provide exceptional learning opportunities for University of Illinois students 
              while delivering innovative, strategic solutions to businesses. We believe that 
              combining academic excellence with real-world application creates value that 
              benefits both our student consultants and our clients."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
