import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true
  }],
  instructions: [{
    type: String,
    required: true
  }]
}, { timestamps: true });

const Recipe = model("Recipe", recipeSchema);

export default Recipe;
