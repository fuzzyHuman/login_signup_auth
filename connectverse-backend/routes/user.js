const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');



router.get('/user', authMiddleware, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password'); // Fetch user without the password
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      res.json({ username: user.username });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  