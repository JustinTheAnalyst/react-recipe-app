import React, { useEffect, useState } from 'react'
import '../css/recipeStyles.scss';

const Recipes = () => {
    const [recipes, setRecipes] = useState({});

    // useEffect(() => {
    //     fetch("https://api.airtable.com/v0/appfVTtGtSXx5mj9R/recipes?api_key=keyioVRnOKYch04XY")
    //     .then((res) => res.json())
    //     .then((data) => {
    //     setRecipes(data.records);
    //     console.log(data);
    //     })
    //     .catch((error) => {
    //     console.log(error);
    //     });
    // }, []);

  return (
    <div className='recipe-container'>
      {recipes.length > 0 ? (
          recipes.map((record) => (
            <a href={record.fields.url} key={record.id} target="_blank" rel="noreferrer">
              <img src={record.fields.photo[0].url} alt={record.fields.recipe} />
              <p>{record.fields.menu}</p>
            </a>
          ))
        ) : (
          <p>Fetching Data...</p>
        )
      }
    </div>
  )
}

export default Recipes
