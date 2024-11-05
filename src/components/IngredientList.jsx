// src/components/IngredientList.jsx

const IngredientList = (props) => {
    return (
    <div>
        <h2>Ingredient List</h2>
    <ul>{props.ingredients.map((ingredient, index)=> (
        <div id = "ingredients" key ={index} style ={{backgroundColor: ingredient.color}}>
        <li>{ingredient.name}</li>
        <button onClick ={()=> props.addStack(ingredient)}>+</button>
        </div>
    ))}
    </ul>;

    </div>
    )
};
  
  export default IngredientList;
  