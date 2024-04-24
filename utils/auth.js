const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.render('login', {
      message: "User account required. Please log in or sign up"
    })
    // res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
