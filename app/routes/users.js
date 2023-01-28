const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/api/users', async (req, res) => {
  const users = await User.find().sort('name');
  res.send(users);
});

module.exports = router;