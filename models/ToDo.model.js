const { Schema, model } = require("mongoose")

// Schema is the format our DB elements will have
// timestamp setting for allowing record of creation time and update time of objects
const todoSchema = new Schema({
  title: String,
  description: String,
},
{
  timestamps: true
}
)

// this will create the model we use for accesing the ToDo collection
const ToDo = model("ToDo", todoSchema) // automatically the collection is going to be model name, all lowercase and plural => "todos"

module.exports = ToDo