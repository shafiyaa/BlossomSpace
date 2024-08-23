import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const bannerMsg = [
    {
      text: 'Get 15% off on your first purchase',
      bgColor: 'olive',
    },
    {
      text: 'Free shipping on order above $500',
      bgColor: 'tangerine',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bannerMsg.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerMsg.length]);

  return (
    <div
      className={`transition-all duration-800 ease-in-out font-stix text-white text-lg py-4 text-center mb-12 bg-${bannerMsg[index].bgColor}`}
    >
      <p> {bannerMsg[index].text}</p>
    </div>
  );
};

export default Banner;
