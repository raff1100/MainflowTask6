const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Get all items (homepage)
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Add item to homepage
router.post('/', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

// Delete item from cart
router.delete('/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item removed' });
});

module.exports = router;
