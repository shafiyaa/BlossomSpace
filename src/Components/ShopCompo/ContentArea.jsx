import React from 'react';
import ProductCard from './ProductCard';
import { motion,AnimatePresence } from 'framer-motion';

const ContentArea = ({ imgSrc, title, productData }) => {
  return (
    <div>
      <motion.img
      initial={{x:200, opacity:1}} animate={{x:0,opacity:1}} transition={{duration:1}}
        src={imgSrc}
        loading="lazy"
        className="w-full h-[370px] object-cover"
      />
      <motion.div initial={{y:200, opacity:1}} animate={{y:0,opacity:1}} transition={{duration:1}} >
      <p className="lg:text-8xl text-7xl py-10">{title}</p>
      <div className="flex flex-col gap-4 ">
        <p className="text-lg ">{productData.length} products</p>
        <div className=" grid grid-cols-2 mob3:grid-cols-2 gap-x-2 gap-y-10 md2:grid-cols-3  ">
          {productData.map((product) => (
            <ProductCard key={product.id} data={product} shop={true} />
          ))}
        </div>
      </div>
      </motion.div>
     
    </div>
  );
};

export default ContentArea;
