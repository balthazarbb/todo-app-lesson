
// connect to the DB
require('../db')

// create ToDo items to add to our collection
const myToDos = [
  {title: "Make pizza", description: "add a bunch of pinnaple to it"},
  {title: "Play some Skyrim", description: "Hope it doesn't crash"},
  {title: "Make a ToDo lecture", description: "Hope for the bebst"}
]

// Insert ToDo items to the DB
const mongoose = require('mongoose');
const ToDo = require('../models/ToDo.model.js')

ToDo.create(myToDos)
  .then(() => {
    console.log("yay! all good");
    // Close connection
    mongoose.connection.close()
  })
  .catch(() => {
    console.log("There was a problem adding the info")
  })
