const router = require ('express').Router();
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');
const { User } = require('../../models');

// localhost/api/user/...

// Sign up
router.post('/signup', async (req, res) => {
  try {

    // Password hash
    const hashPass = await bcrypt.hash(req.body.password, 10);

    // Creates user in database with hash password
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashPass
    });

    // Saves cookie with User Data and logged in flag
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

// Log in
router.post('/login', async (req, res) => {
  try {

    // req.body = { username, password }

    // Finds user data from database using entered Username
    const userData = await User.findOne({ where: { username: req.body.username } });
    
    if (!userData) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare passwords from database
    const checkPassword = (x) => {
      return bcrypt.compareSync(x.password, userData.password);
    }
    if (checkPassword(req.body) == false) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Saves cookie with User Data and logged in flag
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json({ user_id: userData.id, message: 'Login successful.' });
    });

  } catch (err) {
    res.status(500).json(err);
  }

})

// Logout
router.post('/logout', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

module.exports = router;