import React, { useState, useEffect } from 'react';
import { navlinks } from '../../data/navlink';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { VscThreeBars } from 'react-icons/vsc';
import ResNavbar from './ResNavbar';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

const Navbar = ({ home }) => {
  const [open, isOpen] = useState(false);
  document.body.classList.remove('overflow-hidden');

  let itemCount = [];
  try {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (Array.isArray(cartItems)) {
      itemCount = cartItems.map((item) =>
        item && typeof item.quantity === 'number' ? item.quantity : 0
      );
    }
  } catch (error) {
    console.error('Error parsing cart data:', error);
  }
  itemCount = itemCount.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="relative font-ptSerif">
      {/* navicon for small screen */}
      <div
        className="md1:hidden  flex justify-between px-3 pt-4 text-white"
        onClick={() => isOpen(!open)}
      >
        <div className=" rounded-md p-1 bg-black bg-opacity-40">
          <VscThreeBars className="text-4xl " />
        </div>
      </div>

      {/* navbar */}

      <div className="flex justify-around items-center">
        {/* navlink */}
        <div className="hidden md1:block">
          <div
            className={`flex text-white gap-6 text-lg   bg-black bg-opacity-60  rounded-md ${
              home ? '' : 'border-white border'
            }`}
          >
            {navlinks.map((data, index) => (
              <div
                key={data.id}
                className={`transition-colors duration-500 ease-in-out px-4 py-2 hover:bg-tangerine    ${
                  index === 0 ? 'hover:rounded-l-md' : ''
                } ${index === navlinks.length - 1 ? 'hover:rounded-r-md' : ''}`}
              >
                <Link to={data.path}>{data.title}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* logo */}
        <Logo></Logo>

        {/* button and cart */}
        <div className="hidden md1:block">
          <div className="text-white text-lg flex justify-around gap-5 items-center group">
            {/* login */}
            <Link to={'/login'}>
              <button className="flex items-center gap-2 bg-black bg-opacity-60 py-2 px-5 rounded-md">
                <IoPersonCircleOutline className="text-3xl" />
                <span className="group-hover:text-gray transition-colors duration-200 ease-linear text-[15px]">
                  Log In
                </span>
              </button>
            </Link>

            {/* cart */}
            <div className="flex items-center">
              <PiShoppingCartSimple className="text-3xl" />
              <div className="text-sm">
                Cart
                <span className="text-sm">{itemCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* responsive navbar */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-black h-[100vh] fixed inset-0 z-10 md1:hidden"
            transition={{ duration: 0.5, ease: easeInOut }}
            initial={{ y: -50, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
          >
            <ResNavbar setOpen={isOpen} navlinks={navlinks}></ResNavbar>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
