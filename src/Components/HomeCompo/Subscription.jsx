import React from 'react';
import subsImg from '../../assets/home-images/subscription.jpg';
import { PiCactusLight } from 'react-icons/pi';
import { PiLeafLight } from 'react-icons/pi';
import { useAnimation, motion } from 'framer-motion';
import useAnimateOnce from '../../hooks/useAnimateOnce';

const Subscription = () => {
  const data = [
    {
      id: 1,
      icon: <PiCactusLight />,
      text: 'Cactus Lover Subscription',
    },
    {
      id: 2,
      icon: <PiLeafLight />,
      text: 'Exotic Plants Subscription',
    },
  ];
  const initialProperty = {
    x: -200,
    opacity: 0,
  };
  const animationProperty = {
    x: 0,
    opacity: [null,1],
    transition: { duration: 1.2, ease: 'easeInOut', delay: 0.1 },
  };

  const headingControls = useAnimation();
  const iconControls = useAnimation();

  const buttonControls = useAnimation();

  const headingRef = useAnimateOnce(headingControls, animationProperty);
  const iconRef = useAnimateOnce(iconControls, animationProperty);

  const buttonRef = useAnimateOnce(buttonControls, animationProperty);

  return (
    <div className="text-white">
      <div className="flex flex-col-reverse md:flex-row  w-full  ">
        {/* image */}
        <div className="">
          <img
          loading="lazy"
            src={subsImg}
            className=" md:w-[50vw] w-full md:h-full  h-[600px] object-cover "
          />
        </div>

        <div className="bg-tangerine  md:w-[50vw] ">
          <div className=" md:w-[48%] px-4 font-ptSerif mx-auto md2:pt-40 pt-32 pb-5  flex justify-center flex-col items-center gap-3">
            <motion.div
              ref={headingRef}
              initial={initialProperty}
              animate={headingControls}
              className="flex flex-col space-y-8"
            >
              <p className="md:text-4xl text-2xl text-center ">
                Shop Our Plant Subscription Boxes
              </p>
              <p className="md:text-lg text-base">
                and look forward to a new plant every month
              </p>
            </motion.div>

            <div className="flex  py-8 gap-5  md:flex-col md:gap-8 md:py-16">
              {data.map((data) => (
                <motion.div
                  ref={iconRef}
                  initial={initialProperty}
                  animate={iconControls}
                  key={data.id}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <motion.div className="ring-0 ring-white ring-offset-2 rounded-full  px-2 py-7">
                    <i className="sm:text-6xl text-4xl">{data.icon}</i>
                  </motion.div>
                  <p className="sm:text-xl text-base w-[130px]">{data.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              ref={buttonRef}
              initial={initialProperty}
              animate={buttonControls}
              className="button-style1"
            >
              Subscription
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
