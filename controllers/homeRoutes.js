const router = require('express').Router();
const withAuth = require('../utils/auth');

// Get route for home (all posts)
router.get('/', async (req, res) => {
  try {
    res.render('home', {
      active_page: 'home',
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

// Get route for single post
router.get('/posts/:id', async (req, res) => {
  try {
    res.render('post')
  } catch (err) {
    res.status(500).json(err);
  }
})

// Get route for dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    res.render('dashboard', {
      active_page: 'dashboard'
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

// Get route for login
router.get('/login', async (req, res) => {
  try {
    res.render('login', {
      active_page: 'login'
    })
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
