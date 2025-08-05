import React from 'react';
import FadeContent from '@/reactbits/animations/FadeContent/FadeContent';

// Enhanced LogoRow component with perfect infinite scroll
const LogoRow = ({ logos, direction = 'left', speed = 30, delay = 0 }) => {
  // Create multiple copies for seamless infinite scroll
  const extendedLogos = [...logos, ...logos, ...logos, ...logos];
  const animationName = direction === 'left' ? 'scroll-left-infinite' : 'scroll-right-infinite';
  const animationDelay = `${delay}s`;

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex whitespace-nowrap gap-12"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
          animationDelay,
          width: 'fit-content'
        }}
      >
        {extendedLogos.map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            className="flex-shrink-0 w-40 h-20 flex items-center justify-center group"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-w-32 max-h-14 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PastClients = () => {
  // Enhanced alumni companies list with better logos including consulting firms
  const clients = [
    // Tech Giants
    { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
    { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
    { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-14.svg' },
    { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg' },
    { name: 'Meta', logo: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg' },
    { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-4.svg' },
    { name: 'Tesla', logo: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg' },
    { name: 'Spotify', logo: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg' },
    { name: 'Uber', logo: 'https://cdn.worldvectorlogo.com/logos/uber-11.svg' },
    { name: 'LinkedIn', logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' },
    { name: 'Airbnb', logo: 'https://cdn.worldvectorlogo.com/logos/airbnb-2.svg' },
    { name: 'Adobe', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-1.svg' },
    // Consulting Firms
    { name: 'McKinsey & Company', logo: 'https://cdn.worldvectorlogo.com/logos/mckinsey-company.svg' },
    { name: 'BCG', logo: 'https://cdn.worldvectorlogo.com/logos/bcg-1.svg' },
    { name: 'Bain & Company', logo: 'https://cdn.worldvectorlogo.com/logos/bain-company.svg' },
    { name: 'Deloitte', logo: 'https://cdn.worldvectorlogo.com/logos/deloitte-2.svg' },
    { name: 'PwC', logo: 'https://cdn.worldvectorlogo.com/logos/pwc-2.svg' },
    { name: 'EY', logo: 'https://cdn.worldvectorlogo.com/logos/ey-2.svg' },
    { name: 'KPMG', logo: 'https://cdn.worldvectorlogo.com/logos/kpmg-1.svg' },
    // Financial Services
    { name: 'Goldman Sachs', logo: 'https://cdn.worldvectorlogo.com/logos/goldman-sachs.svg' },
    { name: 'JPMorgan Chase', logo: 'https://cdn.worldvectorlogo.com/logos/jp-morgan.svg' },
    { name: 'Morgan Stanley', logo: 'https://cdn.worldvectorlogo.com/logos/morgan-stanley.svg' },
    // Additional Tech Companies
    { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
    { name: 'Oracle', logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' },
  ];

  // Split into three rows for variety
  const row1 = clients.slice(0, 4);
  const row2 = clients.slice(4, 8);
  const row3 = clients.slice(8, 12);

  return (
    <>
      <style>{`
        @keyframes scroll-left-infinite {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(-25%); 
          }
        }
        @keyframes scroll-right-infinite {
          0% { 
            transform: translateX(-25%); 
          }
          100% { 
            transform: translateX(0); 
          }
        }
      `}</style>

      <section className="py-24 bg-gradient-to-br from-card to-muted/50 relative overflow-hidden">

        
        <div className="container mx-auto px-4 lg:px-8 space-y-12 relative z-10">
          <h2 className="text-4xl font-extrabold text-center text-foreground">
            Our Alumni Work At
          </h2>
          <FadeContent delay={0.3}>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              OTCR graduates have gone on to work at some of the world's most prestigious companies
            </p>
          </FadeContent>

          {/* Infinite scrolling logo rows */}
          <FadeContent delay={0.5}>
            <div className="space-y-8 mask-gradient">
              <LogoRow logos={row1} direction="left" speed={40} delay={0} />
              <LogoRow logos={row2} direction="right" speed={35} delay={0} />
              <LogoRow logos={row3} direction="left" speed={45} delay={0} />
            </div>
          </FadeContent>
        </div>
      </section>
      
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </>
  );
};

export default PastClients;
