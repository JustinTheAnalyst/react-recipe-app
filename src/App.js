import './App.css';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import Tabs from './components/Tabs';

const App = () => {
  return (
    <>
      <Navbar />
      <Tabs />
      <RecipeList recipes={sampleRecipes} />
    </>
  );
}

const sampleRecipes = [
  {
      id: 1,
      name: 'Plain Chicken',
      servings: 3,
      cookTime: '1:45',
      instructions: "1. put salt\n2. put chicken in oven\n3. eat the chicken",
      ingredients:[
        {
          id:1,
          name: 'Chicken',
          amount: '2 Pounds'
        },
        {
          id:2,
          name: 'Salt',
          amount: '1 Tbs'
        }
      ]
  },
  {
      id: 2,
      name: 'Plain Pork',
      servings: 5,
      cookTime: '2:45',
      instructions: "1. put salt\n2. put pork in oven\n3. eat the pork",
      ingredients:[
        {
          id:1,
          name: 'Pork',
          amount: '5 Pounds'
        },
        {
          id:2,
          name: 'Paprika',
          amount: '3 Tbs'
        }
      ]
  },
]

export default App;
