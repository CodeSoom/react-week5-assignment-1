import { useState } from 'react';

import List from './List';
import Input from './Input';

export default function App() {
  const [state, setState] = useState({
    nameValue: '',
    categoryValue: '',
    placeValue: '',
    restaurants: [
      {
        name: '모토쿠라시',
        category: '일식',
        place: '서울 송파구',
      },
    ],
  });

  const {
    restaurants, nameValue, categoryValue, placeValue,
  } = state;

  function handleChangeValue(event) {
    setState({
      ...state,
      nameValue: event.target.value,
      categoryValue: event.target.value,
      placeValue: event.target.value,
    });
  }

  function handleClickAdd() {
    setState({
      ...state,
      nameValue: '',
      categoryValue: '',
      placeValue: '',
      restaurants: [...restaurants,
        {
          name: nameValue,
          category: categoryValue,
          place: placeValue,
        },
      ],
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <List
        restaurants={restaurants}
      />
      <Input
        onChange={handleChangeValue}
        onClick={handleClickAdd}
      />
    </div>
  );
}
