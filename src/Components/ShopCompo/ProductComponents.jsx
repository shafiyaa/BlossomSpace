import React from 'react';
import ContentArea from './ContentArea';
import { products } from '../../data/ProductData';
import allProductImg from '../../assets/shop-images/shop4.jpg';
import newArrivalImg from '../../assets/shop-images/shop-5.jpg';
import plantImg from '../../assets/shop-images/shop6.jpg';
import potImg from '../../assets/shop-images/shop7.jpg';


export const AllProduct = () => {
  return (
   
      <div >
      <ContentArea
        imgSrc={allProductImg}
        title={'All Product'}
        productData={products}
      ></ContentArea>
    </div>
  
    
  );
};

export const NewArrival = () => {
  const newArrivalProducts = products.filter((product)=>product.newArrival===true)
  return (
    <div>
      <ContentArea
        imgSrc={newArrivalImg}
        title={'New Arrival'}
        productData={newArrivalProducts}
      ></ContentArea>
    </div>
  );
};

export const Plant = () => {
  const plantProducts = products.filter((product)=> product.type==="Plant")
  return (
    <div>
      <ContentArea imgSrc={plantImg} title={'Plants'} productData={plantProducts}></ContentArea>
    </div>
  );
};

export const Pot = () => {
  const potProducts = products.filter((product)=>product.type ==="Pot")
  return (

    <div>
      <ContentArea imgSrc={potImg} title={'Pots'} productData={potProducts}></ContentArea>
    </div>
  );
};
