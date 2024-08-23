import React from 'react';
import Navbar from '../Components/Common/Navbar';
import { blogs } from '../data/blogData';
import BlogCard from '../Components/CareCompo/BlogCard';


const Blog = () => {
  return (
    <div 
    className="bg-black  ">
      <Navbar className=""></Navbar>

      <div className=" flex flex-col w-full md2:w-[95%] mx-auto mt-4">
        <h1 className="text-white text-3xl sm:text-5xl py-8 text-center font-ptSerif">Your Guide to Plant Care</h1>

        <div className=" bg-offWhite grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3   ">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full  p-2">
              <BlogCard data={blog} blog={true}></BlogCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
