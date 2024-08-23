import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const ResNavbar = ({ setOpen, navlinks }) => {
  document.body.classList.add('overflow-hidden');
  return (
    <div className=" mt-20  text-white font-ptSerif flex justify-between px-5">
      <div className=" text-3xl" onClick={() => setOpen(false)}>
        <RxCross1 />
      </div>

      <div className="flex flex-col gap-6 ">
        <div>
          {navlinks.map((data, index) => (
            <Link to={data.path} key={index}>
              <motion.p
                className="text-3xl py-2"
                whileHover={{ scale: [null, 1.1] }}
              >
                {data.title}
              </motion.p>
            </Link>
          ))}
        </div>

        <div>
         <Link to={'/login'}> <button className="flex items-center gap-2 bg-black bg-opacity-60 py-2 px-5 rounded-md border">
            <IoPersonCircleOutline className="text-3xl" />
            <span className="group-hover:text-gray transition-colors duration-200 ease-linear text-[15px]">
              Log In
            </span>
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ResNavbar;
