import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowDown } from 'lucide-react';
import React from 'react';

const RecruitmentResources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Intro Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-background text-center px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-6 animate-fade-in-up">Recruitment Resources</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in-up">
            Prepare for your OTCR recruitment journey with our curated interview tips, practice cases, and essential resources. Everything you need to succeed in the recruitment process is right here.
          </p>
        </div>
        {/* Scroll arrow */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
          <ArrowDown className="w-8 h-8 text-accent" />
          <span className="text-sm text-muted-foreground mt-2">Scroll to know more</span>
        </div>
      </section>

      {/* --- INTERVIEWS SECTION --- */}
      <section className="bg-gradient-to-br from-navy-medium to-navy-light text-white py-24 px-4 rounded-2xl border border-border mb-24 mt-24 animate-scale-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 animate-fade-in-up">Interviews</h2>
          
          {/* Round 1 Interview */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-12 mb-16">
            <div className="md:w-1/2 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4 text-accent">Round 1 Interview</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                First round interviews will be split into two portions, a behavioral section and a case interview. The case interview will be interviewer led, and candidates will be evaluated on their problem solving and critical thinking skills. Candidates can expect a market sizing question, such as "How many t-shirts are sold in New York City?", within the business strategy problem they will be looking into.
              </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Interview" className="rounded-xl shadow-lg w-full object-cover h-80 border border-border hover-scale" />
            </div>
          </div>

          {/* Coffee Chat */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-accent">Coffee Chat</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              After the first round, selected candidates will be invited for an informal coffee chat with current OTCR members. This is an opportunity for mutual evaluation - we get to know you better personally and professionally, while you can ask questions about OTCR culture, projects, and what it's really like to be part of our organization. This relaxed setting allows for genuine conversation about your interests, career goals, and how you might contribute to our team.
            </p>
          </div>

          {/* Round 2 Interview */}
          <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 text-accent">Round 2 Interview</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Second round interviews are more focused on the traditional case interview, which will be interviewee led. We look for the ability to break down a problem into manageable and understandable pieces, draw concise conclusions from available data, and engage in a focused conversation with the interviewer. Candidates will develop a strategy to solve a business question, such as determining the cause and proposing a recommendation for declining profits.
            </p>
          </div>
        </div>
      </section>

      {/* --- MARKET SIZING QUESTIONS SECTION --- */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-white animate-fade-in-up">Market Sizing Practice Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-8 rounded-xl border border-border hover-scale animate-fade-in-up">
                  <h3 className="text-xl font-bold text-accent mb-4">Question 1</h3>
                  <p className="text-muted-foreground">How many coffee shops are there in Chicago?</p>
                </div>
                <div className="bg-card p-8 rounded-xl border border-border hover-scale animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-xl font-bold text-accent mb-4">Question 2</h3>
                  <p className="text-muted-foreground">What is the market size for smartphones in the United States?</p>
                </div>
                <div className="bg-card p-8 rounded-xl border border-border hover-scale animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-xl font-bold text-accent mb-4">Question 3</h3>
                  <p className="text-muted-foreground">How many pizza slices are consumed daily in New York City?</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- CASE EXAMPLES SECTION --- */}
      <section className="py-24 bg-navy-medium">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-white animate-fade-in-up">Second Round Case Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border hover-scale animate-fade-in-up">
              <h3 className="text-xl font-bold text-accent mb-4">Profitability Case</h3>
              <p className="text-muted-foreground mb-4">A retail chain has seen declining profits over the past two years. Identify the root causes and recommend solutions.</p>
              <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                <li>Focus on revenue and cost analysis</li>
                <li>Consider market dynamics</li>
                <li>Propose actionable recommendations</li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover-scale animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-accent mb-4">Market Entry Case</h3>
              <p className="text-muted-foreground mb-4">A technology company wants to enter the European market. Should they proceed and how?</p>
              <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                <li>Assess market attractiveness</li>
                <li>Evaluate competitive landscape</li>
                <li>Develop entry strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEARNING RESOURCES SECTION --- */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-white animate-fade-in-up">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-xl border border-border hover-scale animate-fade-in-up">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Case Interview Fundamentals</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Learn the basics of structuring and solving case interviews with this comprehensive guide.</p>
                  <a href="#" className="text-accent hover:text-accent/80 text-sm font-medium">Watch Video →</a>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecruitmentResources;