const router = require ('express').Router();
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');
const { User } = require('../../models');

// localhost/api/user/...

// Sign up
router.post('/signup', async (req, res) => {

})

// Log in
router.post('/login', async (req, res) => {

})

// Logout
router.post('/logout', withAuth, async (req, res) => {

})

module.exports = router;