import React, {useState} from 'react';

export default function PizzaOrder() {
  const [order, setOrder] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState('');

  const ingredients = ['Schinken', 'Oliven', 'Ananas', 'Gorgonzola'];

  const handleSelectChange = (event) => {
    setSelectedIngredients(...selectedIngredients, event.target.value);
  }

  const orderPizza = () => {

  }

  return (
    <div>
      <h1>InJös Premium Pizza</h1>
      <form onSubmit={orderPizza}>
        <label>
        <select value={selectedIngredients} onChange={handleSelectChange}>
          {ingredients.map((ingredient) => {
            return <option value={ingredient}>{ingredient}</option>
          })}
        </select>
          Zutat
        </label>
        <label>
          <select value={selectedIngredients} onChange={handleSelectChange}>
            {ingredients.map((ingredient) => {
              return <option value={ingredient}>{ingredient}</option>
            })}
          </select>
          Zutat
        </label>
        <button type={'submit'}>Pizza bestellen</button>
      </form>
    </div>
  )
}
