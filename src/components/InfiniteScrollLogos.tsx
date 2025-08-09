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
              className="max-w-32 max-h-14 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface InfiniteScrollLogosProps {
  title: string;
  subtitle: string;
  clients: Array<{ name: string; logo: string }>;
  className?: string;
}

const InfiniteScrollLogos: React.FC<InfiniteScrollLogosProps> = ({
  title,
  subtitle,
  clients,
  className = ""
}) => {
  // Split into three rows for variety
  const row1 = clients.slice(0, Math.ceil(clients.length / 3));
  const row2 = clients.slice(Math.ceil(clients.length / 3), Math.ceil(clients.length * 2 / 3));
  const row3 = clients.slice(Math.ceil(clients.length * 2 / 3));

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

      <section className={`py-20 bg-background relative overflow-hidden ${className}`}>
        <div className="section-container space-y-12 relative z-10">
          <h2 className="text-4xl font-extrabold text-center text-foreground">
            {title}
          </h2>
          <FadeContent delay={0.3}>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              {subtitle}
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

export default InfiniteScrollLogos;
