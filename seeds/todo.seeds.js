
// We can reuse the same DB connection from our main app
require('../db')

// create ToDo items to add to our collection
const myToDos = [
  {title: "Make pizza", description: "add a bunch of pinnaple to it"},
  {title: "Play some Skyrim", description: "Hope it doesn't crash"},
  {title: "Make a ToDo lecture", description: "Hope for the bebst"}
]

// Insert ToDo items to the DB
const mongoose = require('mongoose'); // mongoose to close connection after we are done seeding the DB
const ToDo = require('../models/ToDo.model.js') // The model that will allow us to contact the DB

// .create() method to insert multiple elements to the DB (Seeding)
ToDo.create(myToDos)
  .then(() => {
    console.log("yay! all good");
    // Close connection
    mongoose.connection.close()
  })
  .catch(() => {
    console.log("There was a problem adding the info")
  })
