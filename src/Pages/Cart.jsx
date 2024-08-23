import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Common/Navbar';
import CartCard from '../Components/CartCompo/CartCard';
import { totalPrice } from '../hooks/cartFunctions';
import toast from 'react-hot-toast';
import Modal from '../Components/Common/Modal';
import { useAnimation, motion, easeInOut } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
   const[open,setOpen] = useState(false)
  const [total, setTotal] = useState(totalPrice());

  useEffect(() => {
    setTotal(totalPrice());
  }, [cartItems]);

  const orderConfirm=()=>{
    
    if(!cartItems.length){
      toast.error('Cart is Empty')
      return
    }else{
      document.body.classList.add('overflow-hidden');
      setOpen(true)
    }


  }

  
  
  return (
    <div className={`bg-black text-white pb-60 }`}>
      <div className={`${open ? 'pointer-events-none blur-sm' : ''}`}>
      <Navbar></Navbar>
      </div>
      

      <div className={`flex flex-col md1:flex-row justify-around w-[90%] mob2:w-[70%]  md1:w-[80%] mx-auto mt-8 font-stix ${open ? 'pointer-events-none blur-sm overflow-hidden' : ''} `}>
        {/* Mycart */}
        <div className={`flex flex-col space-y-8 ${open ? 'pointer-events-none blur-sm' : ''}`}>
          <p className="text-2xl">My Cart</p>
          <hr className="h-1 w-full" />

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-8">
                <CartCard
                  data={item}
                  setCartItems={setCartItems}
                  setTotal={setTotal}
                />
                <hr className="h-1 w-full" />
              </div>
            ))
          ) : (
            <div>Cart is Empty</div>
          )}
        </div>

        {/* order  */}
        <div className=" md2:w-[35%] flex flex-col space-y-8 pt-10 px-8">
          <p className="text-2xl">Order Summary</p>
          <hr className="h-1 w-full" />

          <div className="flex justify-between text-xl">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          
          </div>

          <button className="button-style2" onClick={()=>orderConfirm()}>Checkout</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.4, ease: easeInOut }}
            className="fixed md1:top-[20%] top-[15%] lg:left-[40%] sm:left-[20%] left-[5%]  bg-black border-white border  rounded-lg  mt-4  mob3:w-[500px] w-[310px]"
          >
            <Modal
              animate={{ x: 20 }}
              heading={'Order Confirmed!'}
              subheading={
                " Thank you for your order! Your order has been confirmed and is being processed. You will receive a confirmation email with the details shortly"
              }
              buttonText={'Close'}
              modalClose={setOpen}
            ></Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
