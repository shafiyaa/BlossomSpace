import React from 'react';
import Logo from './Logo';
import { footerdata } from '../../data/footerlink';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black text-white px-3">
      <div className="py-20 text-center">
        <Logo></Logo>
      </div>

      <hr className="bg-white" />

      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-around  py-20 font-ptSerif">
        {footerdata.map((data) => (
          <div key={data.id} className="sm:w-[20%]">
            <p className="text-2xl pb-3">{data.title}</p>
            {data.title === 'Contact' ? (
              <div className="">
                {data.data.map((info, index) => (
                  <p key={index}>
                    {info.type}:{info.value}
                  </p>
                ))}
              </div>
            ) : (
              <div className="">
                {data.data.map((info, index) => (
                  <Link to={info.link} key={index}>
                    <p>{info.value}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
