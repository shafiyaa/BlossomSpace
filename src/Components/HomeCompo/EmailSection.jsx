import React, { useState } from 'react';
import emailBg from '../../assets/home-images/email-bg2.jpg';
import { useAnimation, motion, easeInOut } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import useAnimateOnce from '../../hooks/useAnimateOnce';
import Modal from '../Common/Modal';
import validator from 'validator';

const EmailSection = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const headingControls = useAnimation();
  const emailControls = useAnimation();

  const subscription = (e) => {
    e.preventDefault();
    const isValidEmail = validator.isEmail(email);

    if (isValidEmail) {
      document.body.classList.add('overflow-hidden');
      setError('');
      setOpen(true);
      setEmail('');
    } else {
      setError('Please enter a valid email!');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const headingRef = useAnimateOnce(headingControls, {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut', delay: 0.3 },
  });

  const emailRef = useAnimateOnce(emailControls, {
    y: -40,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut', delay: 0.1 },
  });

  return (
    <div
      style={{ backgroundImage: `url(${emailBg})` }}
      className="h-[90vh] text-white flex flex-col items-center  font-ptSerif relative "
    >
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0 }}
        animate={headingControls}
        className="w-8/12 py-20"
      >
        <p className="md2:text-5xl text-3xl text-center">
          Everything You Need to Know About Plants and More. No Spam, We
          Promise.
        </p>
        <p className="sm:text-xl text-base text-center py-4 sm:py-8">
          Subscribe now and get 15% off your first purchase
        </p>
      </motion.div>

      <motion.div
        ref={emailRef}
        initial={{ y: 50, opacity: 0 }}
        animate={emailControls}
        className="mob3:w-7/12 w-full  flex flex-col font-stix items-center "
      >
        <p className="text-base mx-auto">Enter Your Email here *</p>

        <div className="flex flex-col md2:flex-row pt-2 items-center md2:space-x-2 space-y-4 md2:space-y-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 pl-3 w-[90%] md2:w-[350px] bg-black bg-opacity-40 rounded-md border hover:border-2 focus:outline-none"
          />
          <button
            className="button-style2 w-[90%] md2:w-fit"
            onClick={(e) => subscription(e)}
          >
            Subscribe
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            className="absolute top-[37%] sm:top-[30%] md2:top-[27%] bg-black  rounded-lg  bg-blur-lg mt-4  mob3:w-[500px] w-[90%]"
          >
            <Modal
              animate={{ x: 20 }}
              heading={'Thank You for Subscribing!'}
              subheading={
                " You've successfully subscribed to our newsletter. Keep an eye on your inbox for the latest updates, exclusive offers, and more!"
              }
              buttonText={'Close'}
              modalClose={setOpen}
            ></Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailSection;
