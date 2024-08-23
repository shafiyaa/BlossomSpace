import React, { useState } from 'react'


const Modal = ({heading,subheading,buttonText,modalClose}) => {
   
  function close(){
    document.body.classList.remove('overflow-hidden');
    modalClose(false)
  }

  return (
    <div
     className=' text-white py-4 px-6 flex flex-col gap-5 '>

      <p className='text-2xl text-center'>{heading}</p>
      <p className='text-lg text-center'>{subheading}</p>

      <button className='border py-3 px-5 text-red-400 hover:scale-105 transition-all duration-300 ease-linear' onClick={()=>close()}>{buttonText}</button>
    </div>
  )
}

export default Modal