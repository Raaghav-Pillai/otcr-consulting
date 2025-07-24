import React from 'react';

// Reusable LogoRow component
const LogoRow = ({ logos, direction = 'left', speed = 20, delay = 0 }) => {
  const duplicated = [...logos, ...logos];
  const animationName = direction === 'left' ? 'scroll-left' : 'scroll-right';
  const animationDelay = `${delay}s`;

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div
        className="flex whitespace-nowrap space-x-8"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
          animationDelay
        }}
      >
        {duplicated.map((client, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
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
  ];

  // Split into three rows
  const top = clients.slice(0, 3);
  const mid = clients.slice(3, 6);
  const bot = clients.slice(6, 9);

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>

      <section className="py-24 bg-gradient-to-br from-navy-deep to-navy-medium">
        <div className="container mx-auto px-4 lg:px-8 space-y-8">
          <h2 className="text-4xl font-extrabold text-center text-white">
            Our Alumni Work At
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            OTCR graduates have gone on to work at some of the world's most prestigious companies
          </p>

          {/* Logo rows */}
          <LogoRow logos={top} direction="left" speed={20} delay={0} />
          <LogoRow logos={mid} direction="right" speed={20} delay={0} />
          <LogoRow logos={bot} direction="left" speed={20} delay={10} />
        </div>
      </section>
    </>
  );
};

export default PastClients;
