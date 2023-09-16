import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';

const CartView = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="p-4 mt-10">
      <h2 className="text-2xl font-semibold mb-4 mt-8">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((item) => (
          <div key={item.id} className="bg-white shadow-md p-4 mt-8"> {/* Add mt-4 class for more space */}
            <CartItem item={item} />
          </div>
        ))}
      </div>
      <p className="text-xl font-semibold mt-4">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default CartView;
