import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/home-images/main2.jpg';
import { motion } from 'framer-motion';
import Banner from '../Components/HomeCompo/Banner';
import Navbar from '../Components/Common/Navbar';
import InfoSection from '../Components/HomeCompo/InfoSection';
import DiscoveSection from '../Components/HomeCompo/DiscoveSection';
import Story from '../Components/HomeCompo/Story';
import Subscription from '../Components/HomeCompo/Subscription';
import Gram from '../Components/HomeCompo/Gram';
import EmailSection from '../Components/HomeCompo/EmailSection';

const Home = () => {
  document.body.classList.remove('overflow-hidden');
  return (
    <div>
      <div
        className="h-[100vh] mob3:h-[130vh] w-[100vw]  bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Banner></Banner>

        <Navbar home={true}></Navbar>

        <motion.div
          className="text-center text-white  flex flex-col items-center gap-2 w-8/12 mx-auto py-12  mt-[200px]"
          initial={{y:100,opacity:0}}
          animate={{ y: -200, opacity: [null,0.5,1] }}
          transition={{ ease: 'easeIn', duration: 1.3, delay: 0.8 }}
        >
          <p className="md2:text-8xl mob3:text-6xl text-4xl font-stix">
            Is There Such a Thing as Too Many Plants?
          </p>
          <p className=" text-lg md2:text-2xl">
            Discover the latest addition to your growing plant collection
          </p>
          <Link to={'/shop/plant'}> <button className="button-style1">Shop Plants</button></Link>
         
        </motion.div>
      </div>

      <div className="bg-gray  py-28">
        <InfoSection
          title={'New Arrivals'}
          btnName={'Shop All'}
          dataType={'product'}
          link={'/shop/all-product'}
          isBlog={false}
        ></InfoSection>
      </div>

      <div className="bg-black bg-fixed ">
        <DiscoveSection></DiscoveSection>
      </div>

      <Story></Story>

      <Subscription></Subscription>

      <div className="bg-gray  py-28">
        <InfoSection
          title={'Your Guide to Plant Care'}
          btnName={'Read More'}
          dataType={'blog'}
          link={'/blog'}
          isBlog={true}
        ></InfoSection>
      </div>

      <div className='bg-olive text-white '>
        <Gram></Gram>
      </div>

      <div>
        
    <EmailSection></EmailSection>

      </div>
    </div>
  );
};

export default Home;
