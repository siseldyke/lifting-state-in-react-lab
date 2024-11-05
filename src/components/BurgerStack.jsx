// `src/components/BurgerStack.jsx`
const BurgerStack = ({stack, removeStack}) => {
    return   ( 
    <div>
        <h2> Your Burger </h2>
        <ul>
            {stack.map((ingredient, index)=> (
        <li key ={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
        
        <button onClick ={()=> removeStack(index)}>X</button>
        </li>
        ))}
     </ul>
    </div>
    )
    
};
  
  export default BurgerStack;
  