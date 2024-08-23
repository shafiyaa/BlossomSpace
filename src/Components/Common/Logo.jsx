import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div>
      <Link to={'/'}>
        <div className="font-whisper text-6xl font-extrabold text-white flex flex-col  ">
          <span>Blossom</span>
          <span className="ml-12">Space</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
