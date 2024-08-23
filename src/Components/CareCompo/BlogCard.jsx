import React, { useState } from 'react';
import { PiEyesLight } from 'react-icons/pi';
import { TfiComment } from 'react-icons/tfi';
import { GoHeart } from 'react-icons/go';

const BlogCard = ({ data, blog }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <img
        loading="lazy"
        src={data.img}
        onLoad={() => setIsLoaded(true)}
        className={`  w-full object-cover  transition-all duration-1000 ease-in-out ${
          blog ? ' h-[240px]' : 'max-h-[250px] max-w-[460px]'
        }  ${isLoaded ? 'blur-0' : 'blur-md'}`}
      />

      <div className="  flex items-center text-sm gap-4">
        <span>{data.date}</span>
        <span className="h-[2px] w-[2px] bg-black"></span>
        <span>{data.time} min</span>
      </div>

      <div className="group h-full flex flex-col gap-4">
        <p
          className={`${
            blog ? 'text-lg mob3:text-xl md2:text-2xl' : 'text-2xl '
          } group-hover:text-brown  min-h-[80px]`}
        >
          {data.title}
        </p>
        <p className="group-hover:text-brown min-h-[160px] text-base ">
          {data.subtitle}...
        </p>
      </div>

      <hr className="text-slate-500" />

      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <PiEyesLight />
            <span>{data.views}</span>
          </div>

          <div className="flex items-center gap-2">
            <TfiComment />
            <span>{data.comments}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span>{data.like}</span>
          <GoHeart className="text-tangerine " />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
