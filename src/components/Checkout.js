import React, { useState, useContext } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CheckoutForm from './CheckoutForm';
import { CartContext } from '../contexts/CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');

  // Calculate the total price of the entire cart based on item.totalPrice
  const total = cart.reduce((acc, item) => {
    return acc + (item.price *item.amount);
  }, 0);

  const sendOrder = async () => {
    if (cart.length === 0) {
      alert('Cart is empty. Add items before ordering.');
      return;
    }

    const order = {
      buyer: { name: buyerName, phone: buyerPhone, email: buyerEmail },
      items: cart.map((item) => ({
        name: item.name,
        price: item.price,
      })),
    };

    console.log('Order data:', order);

    try {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      await addDoc(ordersCollection, order);
      alert('Order successfully placed.');
    } catch (error) {
      console.error('Error: ', error);
      alert('There was an error. Please try again later.');
    }
  };


  const cartWithTotalPrice = cart.map((item) => ({
    ...item,
    totalPrice: item.price * item.amount,
  }));

  return (
    <>
      <CheckoutForm
        buyerName={buyerName}
        setBuyerName={setBuyerName}
        buyerPhone={buyerPhone}
        setBuyerPhone={setBuyerPhone}
        buyerEmail={buyerEmail}
        setBuyerEmail={setBuyerEmail}
        cart={cartWithTotalPrice}
        sendOrder={sendOrder}
        total={total}
      />
    </>
  );
};

export default Checkout;


