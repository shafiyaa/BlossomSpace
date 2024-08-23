import React ,{useState} from 'react';
import { motion } from 'framer-motion';
import {products} from '../../data/ProductData'

const ProductSection = ({ name, filterCriteria }) => {
   const [showData,setShowData] = useState([])

   if(filterCriteria==='newArrival'){

   }else if(filterCriteria ==='')
    

  return (
    <div className=" border border-red-500 w-11/12 mx-auto">
      <div className=" flex justify-between items-center relative ">
        <motion.p
          className="text-6xl font-stix opacity-0 absolute left-[-250px] "
          animate={{ x: 250, opacity: 1 }}
          transition={{ ease: 'easeIn', duration: 1, delay: 1 }}
        >
          {name}
        </motion.p>

        <button
          className="text-lg w-fit py-3 px-7 mt-8 opacity:0 rounded-lg transiton-all duration-500 ease-linear bg-tangerine hover:bg-olive text-white absolute right-0"
        //   animate={{ x:180, opacity: 1 }}
        //   transition={{ ease: 'easeIn', duration: 1, delay: 1 }}
        >
          Shop All
        </button>
      </div>
      <div>

      </div>
    </div>
  );
};

export default ProductSection;
