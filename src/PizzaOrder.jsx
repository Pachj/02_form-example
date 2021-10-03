import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './images/pizza-image.jpeg';

export default function PizzaOrder() {
  const [selectedIngredient1, setSelectedIngredient1] = useState('');
  const [selectedIngredient2, setSelectedIngredient2] = useState('');
  const [orderMessage, setOrderMessage] = useState('');

  const ingredients = ['🥓 Speck', '🫒 Oliven', '🍍 Ananas', '🧀 Gorgonzola'];

  const orderPizza = () => {
    let tmpArray = [];

    if (selectedIngredient1 !== '') {
      tmpArray.push(selectedIngredient1);
    }
    if (selectedIngredient2 !== '') {
      tmpArray.push(selectedIngredient2);
    }

    const allSelectedIngredientsString = tmpArray.join(', ');

    setOrderMessage(
      <><p className={'full-width'}>Gewählte Zutaten: {allSelectedIngredientsString}</p>
      <p className={'full-width bold'}>Deine Pizza ist unterwegs zu dir. &#127829;</p></>
    )
  }

  return (
    <div className={'content-container'}>
      <div className={'inner-content-container'}>
        <img className={'logo'} src={logo} alt={'pizza'}/>
      </div>
      <div className={'inner-content-container'}>
        <h1>InJös Premium Pizza</h1>
      </div>
      <div className={'inner-content-container'}>
        <label className={'select-margin'}>
          1. Zutat
        <select className={'form-select form-select-sm'} value={selectedIngredient1} onChange={(event => {setSelectedIngredient1(event.target.value)})}>
          <option value={''}>none</option>
          {ingredients.map((ingredient) => {
            return <option value={ingredient}>{ingredient}</option>
          })}
        </select>
        </label>
        <label className={'select-margin'}>
          2. Zutat
          <select className={'form-select form-select-sm'} value={selectedIngredient2} onChange={(event => {setSelectedIngredient2(event.target.value)})}>
            <option value={''}>none</option>
            {ingredients.map((ingredient) => {
              return <option value={ingredient}>{ingredient}</option>
            })}
          </select>
        </label>
      </div>
      <div className={'inner-content-container'}>
        <button className={'btn btn-primary'} onClick={orderPizza}>Pizza bestellen</button>
      </div>
      <div className={'inner-content-container'}>
        {orderMessage}
      </div>
    </div>
  )
}
