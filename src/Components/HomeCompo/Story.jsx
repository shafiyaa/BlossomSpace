import React from 'react';
import storyImg from '../../assets/home-images/story2.jpg';
import { useAnimation } from 'framer-motion';
import useAnimateOnce from '../../hooks/useAnimateOnce';
import { motion } from 'framer-motion';

const Story = () => {

  const initialProperty = {
    y: 50,
    opacity: 0,
  };
  
  const animationProperty = {
    y: -40,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut', delay: 0.1 },
  };

  const headingControls = useAnimation();
  const paraControls = useAnimation();
  const buttonControls = useAnimation();

  const headingRef = useAnimateOnce(headingControls, animationProperty);

  const paraRef = useAnimateOnce(paraControls, animationProperty);

  const buttonRef = useAnimateOnce(buttonControls, animationProperty);

  return (
    <div
      style={{ backgroundImage: `url(${storyImg})` }}
      className="h-[125vh] sm:h-[100vh] bg-cover bg-no-repeat   text-white  bg-fixed font-stix "
    >
      <div className="flex justify-center items-center flex-col h-fit pt-40  px-2">
        <motion.p
          ref={headingRef}
          initial={initialProperty}
          animate={headingControls}
          className="mob3:text-6xl text-4xl text-center "
        >
          From Our Space to Your Space
        </motion.p>
        <motion.p
          ref={paraRef}
          animate={paraControls}
          initial={initialProperty}
          className="text-lg text-center mob3:w-[50%] pt-8 pb-2"
        >
          From lush ferns to sleek succulents, our collection is curated to
          bring life and tranquility into your space. With every plant
          thoughtfully paired with its perfect pot, we ensure that each piece
          complements your aesthetic while promoting a sense of calm and
          well-being.
        </motion.p>
        <motion.button
          ref={buttonRef}
          animate={buttonControls}
          initial={initialProperty}
          className="button-style1"
        >
          Our Story
        </motion.button>
      </div>
    </div>
  );
};

export default Story;
