import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaMinus } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa';
import { deleteItem, totalPrice, updateCount } from '../../hooks/cartFunctions';
import toast from 'react-hot-toast';

const CartCard = ({ data, setCartItems, setTotal }) => {
  const [input, setInput] = useState(data.quantity);
  const [itemCost, setItemCost] = useState(data.quantity * data.price);

  useEffect(() => {
    setTotal(totalPrice);
  }, [itemCost, input]);

  function deletingItem(id) {
    const remainingItems = deleteItem(id);
    setCartItems(remainingItems);
    setTotal(totalPrice());
    toast.success('Item Removed', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '	#FF0000',
      },
      iconTheme: {
        primary: '	#FF0000',
        secondary: '	#FFFF00',
      },
    });
  }

  function inputChange(e, id) {
    let count = e.target.value;
    count = Number(count);

    updateCount(count, id, setTotal);
    setInput(count);
    setItemCost(count * data.price);
    // setTotal(totalPrice())
  }

  function increment(count, id) {
    let newCount = count + 1;

    setInput(newCount);

    updateCount(newCount, id);
    setItemCost(newCount * data.price);
  }
  function decrement(count, id) {
    if (count <= 1) {
      setInput(1);
      return;
    }
    let newCount = count - 1;
    setInput(newCount);
    updateCount(newCount, id);
    setItemCost(newCount * data.price);
  }

  return (
    <div className="text-white flex justify-between  ">
      {/* img */}
      <img
        src={data.img}
        loading="lazy"
        className="w-[100px] h-[120px] sm:w-[120px] sm:h-[150px]"
      />

      <div className="flex flex-col md2:flex-row gap-4 px-3 ">
        {/* name and price */}
        <div className="flex gap-4 ">
          <div>
            <p>{data.name}</p>
            <p>${data.price}</p>
          </div>
        </div>

        {/* cost and quantity */}
        <div className="flex flex-col md1:flex-row justify-around gap-4 ">
          <div className="flex items-center justify-evenly border  h-[30px] px-2">
            <span
              className="text-[12px]"
              onClick={() => decrement(input, data.id)}
            >
              <FaMinus />
            </span>
            <span className="">
              <input
                type="number"
                min="1"
                value={input}
                className=" focus:outline-none max-w-[30px] ml-4 bg-black "
                onChange={(e) => inputChange(e, data.id)}
              />
            </span>

            <span
              className="text-[12px]"
              onClick={() => increment(input, data.id)}
            >
              <FaPlus />
            </span>
          </div>

          <div className="w-[80px]">${itemCost.toFixed(2)}</div>
        </div>
      </div>

      {/* delete */}
      <div onClick={() => deletingItem(data.id)}>
        <RiDeleteBin5Line />
      </div>
    </div>
  );
};

export default CartCard;
