import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import loginImg from '../assets/auth-images/login-img.jpg';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  // document.body.classList.add('overflow-hidden');

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: '',
        password: '',
      });
    }
  }, [isSubmitSuccessful, reset]);

  const submitHandler = (data) => {
    
    try {
      toast.success('Logged In!')
      navigate('/shop/all-product')
      // console.log('Login is submitted');
    } catch (error) {
      // console.log('error in submitting the login form');
    }
   
  };

  

  return (
    <div className="  bg-offWhite pb-10 sm:flex font-stix">
      <Link to={'/'}>
        {' '}
        <div className="py-4 px-5 flex h-[40px] items-center gap-2">
          <IoMdArrowRoundBack />
          <p>Home</p>
        </div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="sm:w-[50%] mx-auto w-[100%]   sm:mt-24 mt-16   "
      >
        <p className="md1:text-6xl  text-5xl text-center ">Welcome Back</p>
        <p className="text-center md1:text-xl text-lg mt-4">
          Enter your Credential to login
        </p>

        <form onSubmit={handleSubmit(submitHandler)} className="mt-8">
          <div className="flex flex-col justify-center items-center gap-4 mt-8">
            {/* email */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="input-style"
                {...register('email', { required: true })}
              />

              {errors.email && (
                <span className="text-sm text-center font-semibold text-red-600">
                  Check your Email
                </span>
              )}
            </div>

            {/* password */}
            <div className="flex flex-col gap-2">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="input-style"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-center font-semibold text-red-600">
                  Enter your Username
                </span>
              )}
            </div>

            <button className="rounded-lg bg-green-400 text-white text-center py-2 px-8  w-[210px] font-semibold">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-center">Forgot Password?</p>

        <p className="text-[14px] text-center mt-4">
          Dont have an Account?
          <span
            className="text-[18px] font-semibold cursor-pointer hover:text-red-700"
            onClick={() => navigate('/signup')}
          >
            {' '}
            Signup
          </span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="w-[50%] hidden sm:block"
      >
        <img
          src={loginImg}
          loading="lazy"
          className="w-[100%] h-full object-cover "
        />
      </motion.div>
    </div>
  );
};

export default Login;
