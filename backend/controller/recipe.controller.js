import { fetchRecipes } from '../utils/axios.js';

export const getRecipesByIngredients = async (req, res) => {
    const { ingredients } = req.query;

    if (!ingredients) {
        return res.status(400).json({ error: 'Ingredients query parameter is required' });
    }

    try {
        const recipes = await fetchRecipes(ingredients);
        if (!recipes.length) {
            return res.status(404).json({ error: 'No recipes found for these ingredients' });
        }
        res.json(recipes);
    } catch (error) {
        console.error(error); // <-- log full error
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
};
