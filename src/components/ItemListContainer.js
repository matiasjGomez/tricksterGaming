import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import product context
import { ItemContext } from '../contexts/ItemContext';
import ItemList from './ItemList'

const ItemListContainer = () => {
    //get items from item context
    const { items } = useContext(ItemContext)
    //get items by category
    const { categoryName } = useParams();
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect (() => {
        const filterItemsByCategory = () => {
            if (categoryName) {
                const filtered = items.filter ((item) => item.category_id.toLowerCase() === categoryName.toLowerCase()
                );
                setFilteredItems(filtered);
            } else {
                //if no category, then show all items
                setFilteredItems(items);
            }
        };
        filterItemsByCategory();
    }, [categoryName, items]);
    
  return (
    <div>
        <ItemList items={filteredItems} />
    </div>
  )
}

export default ItemListContainer