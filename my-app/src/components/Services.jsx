import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

export default function Services() {
  const data = [
    {
      icon: 'https://cdn1.vectorstock.com/i/1000x1000/61/75/best-price-guarantee-label-icon-vector-14786175.jpg',
      title: 'Get Best Prices',
      subTitle:
        'Pay through our app and unlock thousands in savings with amazing rewards.',
    },
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWvS6nRgYfHNb_oViVV-XHqEECkpmx2hL-g&s',
      title: 'Hygienic',
      subTitle:
        'Our hotels follow strict Covid safety measures to ensure a worry-free stay.',
    },
    {
      icon: 'https://media.istockphoto.com/id/1470243585/vector/different-payment-options-vector-illustrations-set.jpg?s=612x612&w=0&k=20&c=dC-lcWeIUu3vhaQHD5MsQE158EZHMBGpYT_2KRg_a-I=',
      title: 'Flexible Payment',
      subTitle:
        'Enjoy multiple payment options and get exclusive rewards on every transaction.',
    },
    {
      icon: 'https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/destination/m_bali_l_393_629.jpg',
      title: 'Find The Best Near You',
      subTitle:
        'Discover the top-rated hotels, restaurants, and attractions nearby in one click.',
    },
  ];

  return (
    <section id="services" className="py-12 bg-black px-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-white">Why Choose Us?</h2>
        <p className="text-white mt-2">
          We offer the best services to make your travel experience seamless and enjoyable.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {data.map((service, index) => (
          <HoverCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

function HoverCard({ service }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - left - width / 2,
      y: e.clientY - top - height / 2,
    });
  };

  return (
    <Tilt
      className="relative bg-gradient-to-br from-green-700 to-yellow-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-out"
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.05}
    >
      <div
        className="relative group"
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic color glow effect */}
        <div
          className="absolute inset-0 bg-gradient-radial from-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.4), transparent)`,
          }}
        ></div>

        <div className="relative">
          <img
            src={service.icon}
            alt={service.title}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-white">{service.subTitle}</p>
        </div>
      </div>
    </Tilt>
  );
}
