import React, { useState } from 'react';
import { addItem } from '../../hooks/cartFunctions';


const ProductCard = ({ data, shop }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className=" flex  flex-col relative px-2 
    ">
      {data.newArrival && (
        <p className="absolute z-10 bg-olive text-white text-sm py-[2px] px-2 rounded-sm top-3 left-3">
          New Arrival
        </p>
      )}

      <div className="">
        <img
          loading="lazy"
          src={data.img}
          onLoad={() => setIsLoaded(true)}
          className={` object-fill transition-all duration-1000 ease-in-out ${
            isLoaded ? 'blur-0' : 'blur-md'
          } ${
            shop
              ? 'sm:w-[280px] sm:h-[280px] w-[220px] h-[200px] mob2:h-[220px] md2:w-[320px] md2:h-[340px]'
              : 'sm:w-[300px] sm:h-[380px] w-[300px] h-[280px]'
          } `}
        />
      </div>

      <div className=" md2:min-h-[120px] min-h-[100px]  md2:mt-5">
        <p className={`${shop ?' pt-2 text-lg mob2:xl sm:text-2xl lg:text-3xl' :"md:text-3xl text-2xl"}`}>{data.name}</p>
        <p className="md:text-xl text-lg">${data.price}</p>
      </div>

      <button className="button-style1 w-full mob3:w-[80%]  hover:text-white  -mt-1" onClick={()=>addItem(data)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
