const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  id: { type: String, required: true },
  animal: { type: String, required: true },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  sex: { type: String, required: true },
  age: { type: String, required: true },
  description: String,
  photo: { type: String, required: true },
  contact: { type: String, required: true },

  date: { type: Date, default: Date.now }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
