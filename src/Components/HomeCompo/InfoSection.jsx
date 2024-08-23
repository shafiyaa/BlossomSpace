import React, { useEffect, useState } from 'react';
import { products } from '../../data/ProductData';
import { blogs } from '../../data/blogData';
import ProductCard from '../ShopCompo/ProductCard';
import BlogCard from '../CareCompo/BlogCard';
import { easeInOut, motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import useAnimateOnce from '../../hooks/useAnimateOnce';
import { Link } from 'react-router-dom';

const InfoSection = ({ title, btnName, dataType, isBlog,link }) => {
  let product = products.filter((data) => data.newArrival);
  let blog = blogs.slice(0, 3);

  //----
  const titleControls = useAnimation();
  const buttonControls = useAnimation();

  const titleRef = useAnimateOnce(titleControls, {
    x: -20,
    opacity: 1,
    transition: { duration: 1.2, ease: easeInOut, delay: 0.3 },
  });

  const buttonRef = useAnimateOnce(buttonControls, {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: easeInOut, delay: 0.3 },
  });

  return (
    <div className="w-11/12 mx-auto">
      {/* top */}
      <div className="sm:flex text-center flex-row items-center justify-between">
        {/* title */}
        <motion.div
          ref={titleRef}
          initial={{ x: -300, opacity: 0 }}
          animate={titleControls}
          className="flex flex-col"
        >
          {isBlog && <p className="text-xl">Our Blog</p>}

          <p className="mob3:text-6xl text-5xl font-stix">{title}</p>
        </motion.div>

        {/* button */}
        <motion.div
          ref={buttonRef}
          animate={buttonControls}
          initial={{ x: 100, opacity: 0 }}
          className="hidden md2:block"
        >
          <Link to={link}><button className="button-style2">{btnName}</button></Link>
          
        </motion.div>
      </div>

      {/* bottom */}
      <div className="mt-12 font-stix">
        {dataType === 'product' ? (
          <div>
            <div className="flex gap-y-10 flex-col mob2:flex-row   mob2:justify-around mob2:items-center mob2:flex-wrap">
              {product.map((data) => (
                <ProductCard data={data} key={data.id}></ProductCard>
              ))}
            </div>

            <div className=" md2:hidden grid place-items-center">
              <Link to={link}><button className="button-style2  w-full">
                {btnName}
              </button></Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col md:flex-row gap-16">
              {blog.map((data) => (
                <BlogCard key={data.id} data={data}></BlogCard>
              ))}
            </div>
            <div className=" md2:hidden grid place-items-center">
              <Link to={link}>
              <button className="button-style2   w-full">
                {btnName}
              </button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
