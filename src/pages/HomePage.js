import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import RecipeList from "../components/RecipeList";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

const HomePage = () => {
  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON == null) {
      return sampleRecipes;
    } else {
      return JSON.parse(recipeJSON);
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbsp" }],
    };

    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <PageHeader title="Homepage" />
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
};

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. put salt\n2. put chicken in oven\n3. eat the chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "2:45",
    instructions: "1. put salt\n2. put pork in oven\n3. eat the pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "5 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "3 Tbs",
      },
    ],
  },
];

export default HomePage;
