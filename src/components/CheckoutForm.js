import React from 'react';

const CheckoutForm = ({
  buyerName,
  setBuyerName,
  buyerPhone,
  setBuyerPhone,
  buyerEmail,
  setBuyerEmail,
  cart,
  sendOrder,
  total,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendOrder();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg mt-20 mb-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buyerName">
            Name:
          </label>
          <input
            id="buyerName"
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buyerPhone">
            Phone:
          </label>
          <input
            id="buyerPhone"
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={buyerPhone}
            onChange={(e) => setBuyerPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buyerEmail">
            E-mail:
          </label>
          <input
            id="buyerEmail"
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={buyerEmail}
            onChange={(e) => setBuyerEmail(e.target.value)}
            required
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">Cart Details:</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-2">
              {item.name} - ${item.price} - Total: $ {item.totalPrice.toFixed(2)}
            </li>
          ))}
        </ul>
        <div className='font-semibold mt-2'>
            Purchase total: $ {total.toFixed(2)}
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
        >
          Make an order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
