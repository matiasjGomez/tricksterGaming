import React, { createContext, useState, useEffect } from 'react';

// Create context
export const CartContext = createContext();

const CART_STORAGE_KEY = 'cart';

const CartProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState([]);
  // Item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // Total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load cart data from localStorage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    // Calculate and update the total price whenever the cart changes
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);

    // Update the cart data in localStorage whenever the cart changes
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // Update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // Add to cart
  const addToCart = (item, id) => {
    const newItem = { ...item, amount: 1 };

    // Check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // If cart item is already in the cart...
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // Decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


