// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return (
    <div>
        <h2>Ingredient List</h2>
    <ul>{props.ingredients.map((item, index)=> (
        <div id = "ingredients" key ={index} style ={{backgroundColor: item.color}}>
        <li>{item.name}</li>
        <button onClick ={()=> props.addStack(item)}>+</button>
        </div>
    ))}
    </ul>;

    </div>
    )
};
  
  export default IngredientList;
  