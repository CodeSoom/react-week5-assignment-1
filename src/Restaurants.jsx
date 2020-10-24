import React from 'react';

const isEmpty = (array = []) => array.length === 0;

export default function Restaurants({ restaurants }) {
  if (isEmpty(restaurants)) {
    return <p>레스토랑이 없습니다!</p>;
  }

  return (
    <ul>
      {restaurants.map(({ id, name, address }) => (
        <li key={id}>
          <span title={address}>
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}
