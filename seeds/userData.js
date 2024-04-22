const { User } = require('../models/');

const userData = [
  {
    username: "ILoveCookies",
    email: "CookiesYaaaay@notReal.com",
    password: "dummy2"
  },
  {
    username: "John C.",
    email: "UcantCme@notReal.com",
    password: "dummy3"
  }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;