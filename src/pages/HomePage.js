import React, { useState } from 'react'
import PageHeader from '../components/PageHeader';
import RecipeList from '../components/RecipeList';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {id: uuidv4(), name: 'Name', amount:'1 Tbsp'}
      ]
    }
  
    setRecipes([...recipes, newRecipe]);
  }

  return (
    <>
      <PageHeader title="Homepage" />
      <RecipeList 
        recipes={recipes} 
        handleRecipeAdd={handleRecipeAdd}
      />
    </>
  )
  
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

export default HomePage
