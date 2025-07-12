import { useRef, useEffect } from 'react';

const companyNames = [
  "Bloomberg", "MIT", "HRT", "Penn", "PWC", "Citadel", "J.P.Morgan", "Bain & Company", "IMC",
  "Microsoft", "Facebook", "Robinhood", "NASA", "Harvard", "Rubrik", "Uber", "University of Chicago",
  "Deloitte", "DRW", "Amazon", "Google", "Jane Street", "Tesla", "BCG", "LinkedIn", "Goldman Sachs",
  "McKinsey & Company", "Stanford"
];

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Optional: Play video on mount for mobile compatibility
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-end items-center overflow-hidden bg-gradient-to-b from-[#181c24] via-[#181c24] to-black">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-center items-center pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-xl">
            OTCR<br />
            <span className="font-normal text-2xl">The Premier Student-Run Consulting Firm
            at the University of Illinois</span>
          </h1>
        </div>
      </div>
      {/* Scrolling Company Names Row */}
      <div className="relative z-20 w-full flex justify-center items-center pb-8 overflow-hidden">
        <div className="w-full max-w-6xl">
          <div className="flex whitespace-nowrap animate-company-scroll">
            {[...companyNames, ...companyNames].map((name, idx) => (
              <span
                key={idx}
                className="mx-8 text-white/80 text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Animation styles */}
      <style>{`
        @keyframes company-scroll {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(-75%); }
        }
        .animate-company-scroll {
          animation: company-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
