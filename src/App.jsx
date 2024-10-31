// src/App.jsx

import { useState } from 'react';
import './App.css';
// import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
  
];
console.log(availableIngredients)
const App = () => {
  const [stack, setStack] = useState([])

  const addStack =(newStack)=> {
    setStack([...stack, newStack])
  }

  const removeStack =(item, index) => {
    let newStack = [...stack]
    newStack.splice(index, 1)
    setStack(newStack)
  }
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList ingredients ={availableIngredients} addStack ={addStack}/>
      <BurgerStack stack = {stack} removeStack={removeStack}/>
      </section>
    </main>
  );
};

export default App;

