import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import '../App/App.css';

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
    <div className="container">
      <h1 className="container__title">Todos</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3} />
    </div>);
}

export default App;