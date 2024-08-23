import React from 'react';
import plantImg from '../../assets/home-images/discover1.jpg';
import potImg from '../../assets/home-images/discover2.jpg';
import subsImg from '../../assets/home-images/discover3.jpg';

const DiscoveSection = () => {
  return (
    <div className="pt-24 pb-4">
      <section className="bg-black text-white font-ptSerif  ">
        <div className="relative group">
          <p className="text-center md:text-3xl text-xl ">Shop by Category</p>
          <p className="text-center xl:text-[140px] sm:text-8xl px-2   text-5xl py-10 group-hover:scale-90 transition-all duration-500 ease-linear ">
            Discover Our Space
          </p>
          <div className="bg-transparent w-full top-[110px] h-[16px] xl:h-[60px] md1:h-[40px] absolute z-40 md1:top-36 xl:top-44 group-hover:blur-md group-hover:bg-black hidden mob2:block sm:hidden md1:block "></div>
        </div>

        {/* collage */}
        <div className=" flex flex-col  sm:grid  sm:grid-cols-3 gap-2 px-3   ">
          <div className=" row-span-2 col-span-2 overflow-hidden relative flex justify-center items-center group">
            <span className="absolute z-10 text-4xl font-stix  transiton duration-500 ease-linear group-hover:opacity-0 ">
              Plants
            </span>
            <img
            loading="lazy"
              src={plantImg}
              className={`  sm:h-[800px] w-full object-cover brightness-50  transition-all duration-700  ease-in hover:scale-110 hover:brightness-90`}
            />
          </div>

          <div className="overflow-hidden relative flex justify-center items-center group">
            <span className="absolute z-10 text-3xl font-stix  transiton duration-500 ease-linear group-hover:opacity-0 ">
              Pots
            </span>
            <img
            loading="lazy"
              src={potImg}
              className={`h-[392px]  w-full object-cover transition-all duration-700  ease-in brightness-50 hover:scale-110 hover:brightness-90`}
            />
          </div>

          <div className="overflow-hidden relative flex justify-center items-center group">
            <span className="absolute z-10 text-3xl font-stix  transiton duration-500 ease-linear group-hover:opacity-0 ">
              Subscription
            </span>
            <img
            loading="lazy"
              src={subsImg}
              className={`h-[392px]  w-full object-cover brightness-50  transition-all duration-700  ease-in hover:scale-110 hover:brightness-90`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoveSection;
