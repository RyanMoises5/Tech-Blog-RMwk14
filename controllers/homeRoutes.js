const router = require('express').Router();
const withAuth = require('../utils/auth');

// Get route for home (all posts)
router.get('/', async (req, res) => {
  try {
    res.render('home')
  } catch (err) {
    res.status(500).json(err);
  }
})

// Get route for single post

// Get route for dashboard

// Get route for login
router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err);
  }
})

// Get route for sign up
router.get('/signup', async (req, res) => {
  try {
    res.render('signup')
  } catch (err) {
    res.status(500).json(err);
  }
})

// Wildcard back to home
router.get('*', async (req, res) => {
  try {
    res.redirect('/')
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
