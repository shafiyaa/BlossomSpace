import toast from 'react-hot-toast';

export const addItem = (item, quantity = 1) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let existingItem = cart.findIndex((cartItem) => cartItem.id === item.id);

  if (existingItem !== -1) {
    cart[existingItem].quantity += quantity;
  } else {
    item.quantity = quantity;
    cart.push({ ...item });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  toast.success('Product Added.');
};

export const deleteItem = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartList = cart.filter((cartItem) => cartItem.id !== id);

  localStorage.setItem('cart', JSON.stringify(cartList));

  return cartList;
};

export const updateCount = (count, id) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // find the product
  let updatedProduct = cart.map((item) => {
    if (item.id === id) {
      item.quantity = count;
    }
    return item;
  });
  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(updatedProduct));
};

export const totalPrice = () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = JSON.parse(localStorage.getItem('totalCost')) || 0;

  if (cart.length === 0) {
    return (total = 0);
  }

  let cost = cart.map((item) => item.price * item.quantity);

  cost = cost.reduce((acc, curr) => {
    return acc + curr;
  }, total);

  localStorage.setItem('total', JSON.stringify(cost));
  return cost;
};
