import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const useAnimateOnce = (controls, animateProps) => {
  const { ref: elementRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start(animateProps);
    }
  }, [inView, controls]);

  return elementRef;
};

export default useAnimateOnce;
