const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

// This is also good practice!
// const todoRoutes = require('./todo.routes')
// app.use('/', todoRoutes)

module.exports = router;
