import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ItemContext } from '../contexts/ItemContext';
import ItemDetail from '../components/ItemDetail'; 

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const { items } = useContext(ItemContext);
  const { addToCart } = useContext(CartContext);

  const item = items.find((item) => {
    return item.id === id;
  });

  if (!item) {
    return (
      <section className='h-screen flex justify-center'>
        Now Loading...
      </section>
    );
  }

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <ItemDetail item={item} />
      </div>
    </section>
  );
};

export default ItemDetailsContainer;
