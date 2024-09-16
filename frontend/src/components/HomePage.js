import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('/api/items');
      setItems(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      {items.map(item => (
        <CartItem key={item._id} item={item} />
      ))}
    </div>
  );
}

export default HomePage;
