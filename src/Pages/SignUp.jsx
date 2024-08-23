import React, { useEffect, useState } from 'react';
import img from '../assets/auth-images/signup-img.jpg';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { GrFormNextLink } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { motion,easeInOut } from 'framer-motion';
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  document.body.classList.add('overflow-hidden');
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  }, [isSubmitSuccessful, reset]);

  
  const submitHandler = (data) => {
  //  console.log(data)
    try {
      toast.success('Signed Up!')
      navigate('/')
      // console.log('Login is submitted');
    } catch (error) {
      // console.log('error in submitting the login form');
    }
    
  };

  return (
    <div className="sm:flex bg-offWhite font-stix relative">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="w-[50%] hidden sm:block"
      >
        <img src={img} alt="signup-img" loading="lazy" className='w-[100%] h-full object-cover' />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="sm:w-[50%] mx-auto w-[100%]   sm:mt-24 py-16 "
      >
        <p className="md1:text-6xl  text-5xl text-center">Sign up</p>
        <p className="text-center md1:text-xl text-lg mt-4">Create your account</p>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div className=" flex flex-col items-center gap-4 mt-8">
            {/* name */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                id="name"
                className="input-style"
                placeholder="Username"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-center font-semibold text-red-600">
                  Enter your Username
                </span>
              )}
            </div>

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
                  Enter your Password
                </span>
              )}
            </div>

            {/* confirm password */}
            <div className="flex flex-col gap-2">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="input-style"
                {...register('confirmPassword', { required: true })}
              />
              {errors.confirmPassword && (
                <span className="text-sm text-center font-semibold text-red-600">
                  Enter your Confirm
                </span>
              )}
            </div>

            <button className="rounded-lg bg-red-400 text-white text-center py-3 px-6 w-[210px] font-semibold">
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-[14px] text-center mt-4">
          Already have an Account?
          <span
            className="text-[18px] font-semibold cursor-pointer hover:text-green-700"
            onClick={() => navigate('/login')}
          >
            {' '}
            Login
          </span>
        </p>
      </motion.div>

      <Link to={'/'}>
        {' '}
        <div className=" text-end   py-4 px-5 flex h-[40px] items-center gap-2 absolute top-2 right-2 w-fit">
          <p>Home</p>
          <GrFormNextLink />
        </div>
      </Link>
    </div>
  );
};

export default Signup;
