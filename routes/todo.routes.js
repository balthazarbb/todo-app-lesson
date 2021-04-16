const router = require("express").Router();

// the model will allow us to access the DB for managing our collection
const ToDo = require('../models/ToDo.model')

// Do all our ToDo routes

// ***** (C)reate Routes *****
router.get('/todos/create', (req, res, next) => {
  // render the form where users will be able to create new elements
  res.render('create-form.hbs')
})

router.post('/todos/create', (req, res, next) => {
  // check information being sent from user
  const { title, description } = req.body
  console.log(title, description);
  
  // use that information to create a new element in out DB
  ToDo.create({title, description})
  .then( (data) => {
    // send the user somewhere
    res.redirect('/todos')
  })
  .catch( (err) => console.log(err)); 
})

// ***** (R)ead Routes *****

// GET Route to show all ToDos to the user
router.get("/todos", (req, res, next) => {
  // we need to get the ToDo elements from the DB
  ToDo.find()
  .then((allTodos) => {
    console.log(allTodos);
    // render a view with all ToDos
    res.render('todos-list.hbs', { allTodos }) // on renders, never start with a "/error-handling"
  })
})

// GET Route to show a specific ToDo item with details
router.get("/todos/:id", (req, res, next) => {
  // catch the id of the ToDo we need to display

  // let toDoId = req.params.id // perfectly fine
  const { id } = req.params // best practices

  // look in the DB for that specific ToDo
  ToDo.findById(id)
    .then( (data) => {
      // render a detailed view to the user with the ToDo details
      res.render('todo-details.hbs', { data })
    })
    .catch( (err) => console.log(err));
})

// ***** (U)pdate Routes *****

// GET route
router.get('/todos/:id/edit', (req, res, next) => {
  const { id } = req.params

  // const title = 
  // const description = 
  // ToDo.findByIdAndUpdate(id)

  ToDo.findById(id)
  .then( (data) => {
    res.render('edit-form.hbs', {data})
  })
  .catch( (err) => console.log(err));

  // render a form
})

// POST route
router.post('/todos/:id/edit', (req, res, next) => {
  // get the id
  const { id } = req.params

  // get body with elements to be edited
  const { title, description } = req.body

  // go to the database and edit the element
  ToDo.findByIdAndUpdate(id, { title, description })
  .then( (data) => {
    res.redirect('/todos')
  })
  .catch( (err) => console.log(err));
})



// ***** (D)elete Routes *****
router.post('/todos/:id/delete', (req, res, next) => {
  // receive id from user
  const { id } = req.params

  // delete the element from the DB
  ToDo.findByIdAndDelete(id)
  .then( (data) => {
    // do something with the user
    res.redirect('/todos')
  })
  .catch( (err) => console.log(err));

})


module.exports = router