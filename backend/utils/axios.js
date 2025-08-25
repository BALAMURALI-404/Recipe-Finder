import axios from 'axios';

const API_KEY = 'a356fe5f87a44b339e38bee92e290dd0'; // Replace with your actual API key

export const fetchRecipes = async (ingredients) => {
    try {
        const formattedIngredients = ingredients.split(',').map(i => i.trim()).join(',');
        const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${formattedIngredients}&number=300&apiKey=${API_KEY}`;
        const response = await axios.get(apiUrl);
        return response.data || [];
    } catch (err) {
        console.error('Error fetching recipes:', err.message);
        return [];
    }
};
