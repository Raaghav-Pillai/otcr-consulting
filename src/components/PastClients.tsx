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
  const clients = [
    { name: 'Microsoft', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png' },
    { name: 'Google', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
    { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
    { name: 'Apple', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png' },
    { name: 'Meta', logo: 'https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png' },
    { name: 'Netflix', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png' },
    { name: 'Tesla', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Tesla-Logo.png' },
    { name: 'Spotify', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Spotify-Logo.png' },
    { name: 'Uber', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' },
    { name: 'LinkedIn', logo: 'https://logos-world.net/wp-content/uploads/2020/06/LinkedIn-Logo.png' },
    { name: 'Airbnb', logo: 'https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png' },
    { name: 'Adobe', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Adobe-Logo.png' }
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

      <section className="py-24 bg-gradient-to-br from-navy-deep to-navy-medium relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-warm rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 space-y-12 relative z-10">
          <h2 className="text-4xl font-extrabold text-center text-white">
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
