import { Router } from "express";
import { deleteRecipeById, getRecipeById, getRecipies, uploadRecipe, searchRecipe } from "../controllers/recipe.controller.js";

const router = Router();

router.get("/search", searchRecipe);
router.get("/all-recipe", getRecipies);
router.get("/getById/:id", getRecipeById);
router.post("/upload", uploadRecipe);
router.delete("/deleteById/:id", deleteRecipeById);


export default router