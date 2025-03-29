import Recipe from "../models/recipe.model.js";
import { responce } from "../utils/responce.js";

/** Get all recipes */
export async function getRecipies(req, res) {
  try {
    const recipes = await Recipe.find().select("cuisine name _id image");
    return responce(res, 200, "All recipes retrieved", recipes, null, true);
  } catch (error) {
    console.log(error)
    return responce(res, 500, "Server error: Unable to process", null, error.message, false);
  }
}

/**  Get a recipe by ID */
export async function getRecipeById(req, res) {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return responce(res, 404, "Recipe not found", null, "Recipe does not exist", false);
    }
    return responce(res, 200, "Recipe retrieved successfully", recipe, null, true);
  } catch (error) {
    console.log(error)
    return responce(res, 500, "Server error: Unable to process", null, error.message, false);
  }
}

/** Delete a recipe by ID */
export async function deleteRecipeById(req, res) {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
      return responce(res, 404, "Recipe not found", null, "Recipe does not exist", false);
    }
    return responce(res, 200, "Recipe deleted successfully", null, null, true);
  } catch (error) {
    console.log(error)
    return responce(res, 500, "Server error: Unable to process", null, error.message, false);
  }
}

/**  Upload a new recipe */
export async function uploadRecipe(req, res) {
  try {
    const { name, cuisine, image, ingredients, instructions } = req.body;

    if (!name || !cuisine || !image || !ingredients?.length || !instructions?.length) {
      return responce(res, 400, "Missing required fields", null, "Please provide all recipe details", false);
    }

    const recipe = await Recipe.create({ name, cuisine, image, ingredients, instructions });

    return responce(res, 201, "Recipe created successfully", recipe, null, true);
  } catch (error) {
    console.log(error)
    return responce(res, 500, "Server error: Unable to process", null, error.message, false);
  }
}

/** Search recipes by name or cuisine */
export async function searchRecipe(req, res) {
  try {
    const { query } = req.query;
    if (!query || query.trim().length === 0) {
      return responce(res, 400, "Enter a valid search term", null, null, false);
    }

    const recipes = await Recipe.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { cuisine: { $regex: query, $options: "i" } }
      ]
    }).select("cuisine name _id image");

    return responce(res, 200, "Recipes related to search", recipes, null, true);
  } catch (error) {
    console.log(error)
    return responce(res, 500, "Server error: Unable to process", null, error.message, false);
  }
}
