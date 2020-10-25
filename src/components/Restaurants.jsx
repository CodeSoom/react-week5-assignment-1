import React from 'react';

const restaurants = [{
  id: 1,
  categoryId: 1,
  name: '양천주가',
  address: '서울 강남구 123456',
  information: '양천주가 in 서울 강남구 123456',
}];

export default function Restaurants() {
  return (
    <ul>
      {
        restaurants.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))
      }
    </ul>
  );
}
