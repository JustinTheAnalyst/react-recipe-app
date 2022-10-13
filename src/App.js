import './App.css';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <RecipeList recipes={sampleRecipes} />
  );
}

const sampleRecipes = [
  {
      id: 1,
      name: 'Plain Chicken',
      servings: 3,
      cookTime: '1:45',
      instructions: "1. put salt\n2. put chicken in oven\n3. eat the chicken"
  },
  {
      id: 2,
      name: 'Plain Pork',
      servings: 5,
      cookTime: '2:45',
      instructions: "1. put salt\n2. put pork in oven\n3. eat the pork"
  },
]

export default App;
