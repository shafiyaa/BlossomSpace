import React from 'react';
import gram1 from '../../assets/home-images/gram1.jpg';
import gram2 from '../../assets/home-images/gram2.jpg';
import gram3 from '../../assets/home-images/gram5.jpg';
import gram4 from '../../assets/home-images/gram6.jpg';
import gram5 from '../../assets/home-images/gram7.jpg';
import gram6 from '../../assets/home-images/gram8.jpg';
import gram7 from '../../assets/home-images/gram9.jpg';
import gram8 from '../../assets/home-images/gram10.jpg';
import gram9 from '../../assets/home-images/gram11.jpg';
import gram10 from '../../assets/home-images/gram12.jpg';
import { useAnimation, motion } from 'framer-motion';
import useAnimateOnce from '../../hooks/useAnimateOnce';

const Gram = () => {
  const hashtag = ['#Plants', '#Pots', '#Garden', '#Home', '#Decor'];
  const gramImg = [
    gram1,
    gram3,
    gram2,
    gram4,
    gram6,
    gram5,
    gram7,
    gram10,
    gram9,
    gram8,
  ];
  const headingControls = useAnimation();
  const headingRef = useAnimateOnce(headingControls, {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
  });

  return (
    <div className="py-20 px-2 mob3:px-8 md:px-16  flex flex-col items-center overflow-hidden">
      <motion.p
        ref={headingRef}
        initial={{ opacity: 0 }}
        animate={headingControls}
        className="sm:text-5xl text-3xl font-ptSerif pb-10 sm:pb-14"
      >
        Blossom on the #Gram
      </motion.p>

      {/* gallery */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-1   ">
        {gramImg.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden min-w-[135px] max-h-[140px] mob3:max-h-[160px]  sm:min-w-full sm:max-h-[200px] md2:max-h-[330px] lg:max-h-full relative group  "
          >
            <img
            loading="lazy"
              src={img}
              className="w-full h-full object-cover transition-all duration-500 ease-linear hover:scale-105 group-hover:brightness-50"
            />
            <div className="  absolute top-[40%]  left-[10%] opacity-0 group-hover:opacity-100 transition-all  duration-500 ease-linear flex flex-wrap justify-center w-[80%] px-4 text-sm mob3:text-base ">
              {hashtag.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="button-style1 ">Load More</button>
    </div>
  );
};

export default Gram;
