import express from 'express';
import { getRecipesByIngredients } from '../controller/recipe.controller.js';

const router = express.Router();

router.get('/search', getRecipesByIngredients);

export default router;
