import React from 'react';

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

  return (
    <section className="py-24 bg-gradient-to-br from-navy-deep to-navy-medium overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-white animate-fade-in-up">
          Our Alumni Work At
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          OTCR graduates have gone on to work at some of the world's most prestigious companies
        </p>
        
        {/* Scrolling logos - 3 rows */}
        <div className="relative space-y-8">
          {/* Top row - scrolling left */}
          <div className="flex animate-scroll-left">
            {/* First set */}
            {clients.slice(0, 3).map((client, index) => (
              <div key={`top-first-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-scale">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
            {/* Second set for seamless scrolling */}
            {clients.slice(0, 3).map((client, index) => (
              <div key={`top-second-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-scale">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
            {/* Third set for seamless scrolling */}
            {clients.slice(0, 3).map((client, index) => (
              <div key={`top-third-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-scale">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>

          {/* Middle row - scrolling right */}
          <div className="flex animate-scroll-right">
            {/* First set */}
            {clients.slice(3, 6).map((client, index) => (
              <div key={`middle-first-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-scale">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
            {/* Second set for seamless scrolling */}
            {clients.slice(3, 6).map((client, index) => (
              <div key={`middle-second-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-scale">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
            {/* Third set for seamless scrolling */}
            {clients.slice(3, 6).map((client, index) => (
              <div key={`middle-third-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-scale">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>

          {/* Bottom row - scrolling left */}
          <div className="flex animate-scroll-left">
            {/* First set */}
            {clients.slice(6, 9).map((client, index) => (
              <div key={`bottom-first-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-scale">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
            {/* Second set for seamless scrolling */}
            {clients.slice(6, 9).map((client, index) => (
              <div key={`bottom-second-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-scale">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
            {/* Third set for seamless scrolling */}
            {clients.slice(6, 9).map((client, index) => (
              <div key={`bottom-third-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-scale">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastClients;