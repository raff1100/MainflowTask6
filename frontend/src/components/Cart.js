import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const result = await axios.get('/api/items');
      setItems(result.data);
    }
    fetchItems();
  }, []);

  const deleteItem = async (id) => {
    await axios.delete(`/api/items/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => deleteItem(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
