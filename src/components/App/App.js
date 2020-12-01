import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const App = () => {
  const items = [
    {
      value: 'Купить продукты'
    },
    {
      value: 'Заправить машину'
    },
    {
      value: 'Постирать кроссовки'
    }
  ];

  return (
    <div>
      <h1>Todos</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3} />
    </div>);
}

export default App;