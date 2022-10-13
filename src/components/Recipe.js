import React from 'react'

const Recipe = (props) => {
    const { 
        name, 
        cookTime, 
        servings, 
        instructions 
    } = props;
    
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Serving:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instruction:</span>
        <div>
            {instructions}
        </div>
      </div>
    </div>
  )
}

export default Recipe
