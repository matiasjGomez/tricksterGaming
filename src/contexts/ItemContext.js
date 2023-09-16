import { createContext, useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Import Firestore functions

// Create context
export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  // State to store fetched items
  const [items, setItems] = useState([]);

  // Fetch items
  useEffect(() => {
    const fetchItems = async () => {
      // Initialize Firebase Firestore
      const db = getFirestore();
      // Reference items from my collection in Firestore
      const itemsCollection = collection(db, "items");

      // Fetch documents from the "items" collection
      const querySnapshot = await getDocs(itemsCollection);
      // Map the documents to an array of items, including the ID from docs
      const fetchedItems = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // Update the state with the fetched items
      setItems(fetchedItems);
    };

    fetchItems();
  }, []);

  return (
    <ItemContext.Provider value={{ items }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;