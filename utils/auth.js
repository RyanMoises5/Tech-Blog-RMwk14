const withAuth = (req, res, next) => {
  // If the user is not logged in, render the request to the login route with error message
  if (!req.session.logged_in) {
    res.render('login', {
      message: "User account required. Please log in or sign up"
    })
  } else {
    next();
  }
};

module.exports = withAuth;
