import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Common/Navbar';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { products } from '../data/ProductData';

const Shop = () => {
  const [browseType, setBrowseType] = useState('');
  const location = useLocation();

  const browseData = [
    { id: 1, title: 'All Product', link: '/shop/all-product' },
    { id: 2, title: 'New Arrival', link: '/shop/new-arrival' },
    { id: 3, title: 'Pot', link: '/shop/pot' },
    { id: 4, title: 'Plant', link: '/shop/plant' },
  ];

  const pathData = () => {
    const path = location.pathname.split('/');
    const lastSegment = path[path.length - 1];
    const name = lastSegment.replace(/-/g, ' ');
    setBrowseType(name);
  };

  useEffect(() => {
    pathData();
  }, [location.pathname]);

  return (
    <div className="bg-black text-white font-ptSerif  ">
      <Navbar></Navbar>
      {/* top */}

      <section className=" w-[95%] mx-auto flex space-x-3 items-center px-6 mt-4">
        <span>
          <Link to={'/'}>Home</Link>
        </span>
        <span>
          <LiaGreaterThanSolid />
        </span>
        <span className="capitalize">{browseType}</span>
      </section>

      {/* bottom */}
      <section className="flex space-x-5 mt-4 px-6 w-[100vw] mx-auto ">
        {/* left */}

        <div className=" w-[15%] hidden md1:block">
          {/* browse */}
          <div>
            {' '}
            <p className="lg:text-3xl text-2xl">Browse By</p>
            <div className="h-[1px] bg-white w-full my-3"></div>
            <div className="flex flex-col ">
              {browseData.map((data) => (
                <Link
                  to={data.link}
                  key={data.id}
                  className={`lg:text-xl text-lg py-1`}
                  onClick={() => pathData()}
                >
                  <p
                    className={` ${
                      data.title.toLowerCase() === browseType
                        ? 'font-semibold'
                        : ''
                    }`}
                  >
                    {' '}
                    {data.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div className=" w-[95%]">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Shop;
