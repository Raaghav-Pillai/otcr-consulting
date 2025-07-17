import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import React from 'react';

const RecruitmentResources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-6">Recruitment Resources</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Prepare for your OTCR recruitment journey with our curated interview tips, practice cases, and essential resources. Everything you need to succeed in the recruitment process is right here.
          </p>
        </div>
      </section>
      {/* --- INTERVIEWS SECTION --- */}
      <section className="bg-[#181c24] text-white py-24 px-4 rounded-2xl border border-border mb-24 mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12">Interviews</h2>
          <div className="flex flex-col md:flex-row md:items-stretch gap-12 mb-16">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-accent">Round 1 Interview</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                First round interviews will be split into two portions, a behavioral section and a case interview. The case interview will be interviewer led, and candidates will be evaluated on their problem solving and critical thinking skills. Candidates can expect a market sizing question, such as “How many t-shirts are sold in New York City?”, within the business strategy problem they will be looking into.
              </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Interview" className="rounded-xl shadow-lg w-full object-cover h-80 border border-border" />
            </div>
          </div>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-4 text-accent">Round 2 Interview</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Second round interviews are more focused on the traditional case interview, which will be interviewee led. We look for the ability to break down a problem into manageable and understandable pieces, draw concise conclusions from available data, and engage in a focused conversation with the interviewer. Candidates will develop a strategy to solve a business question, such as determining the cause and proposing a recommendation for declining profits.
            </p>
          </div>
        </div>
      </section>
      {/* --- PRACTICE CASES SECTION --- */}
      <section className="py-24">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">Practice Cases</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          <div className="flex flex-col items-center">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="30" width="80" height="40" rx="6" stroke="#fff" strokeWidth="4"/><rect x="70" y="45" width="30" height="20" rx="4" stroke="#fff" strokeWidth="4"/><rect x="25" y="55" width="10" height="10" rx="3" stroke="#fff" strokeWidth="4"/><rect x="65" y="55" width="10" height="10" rx="3" stroke="#fff" strokeWidth="4"/></svg>
          </div>
          <div className="flex flex-col items-center">
            <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="60" height="40" rx="8" stroke="#fff" strokeWidth="4"/><rect x="40" y="50" width="20" height="20" rx="4" stroke="#fff" strokeWidth="4"/><rect x="35" y="20" width="30" height="20" rx="4" stroke="#fff" strokeWidth="4"/></svg>
          </div>
          <div className="flex flex-col items-center">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="40" width="60" height="40" rx="8" stroke="#fff" strokeWidth="4"/><path d="M20 40 L50 20 L80 40" stroke="#fff" strokeWidth="4" fill="none"/><path d="M50 20 V60" stroke="#fff" strokeWidth="4" fill="none"/></svg>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RecruitmentResources; 