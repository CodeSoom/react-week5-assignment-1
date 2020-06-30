import React from 'react';

import Restaurants from './Restaurants';

export default function App() {
  const restaurants = [
    {
      id: 1,
      name: '비동기처리',
      category: '코딩',
      address: '서울시 강남구 역삼동',
    },
  ];

  return (
    <div>
      <h1>Restaurants</h1>
      <Restaurants
        restaurants={restaurants}
      />
    </div>
  );
}
