import React from 'react';
import { useSelector } from 'react-redux';

export default function Restaurants() {
  const {
    region, categoryId, isLoading, restaurants,
  } = useSelector((state) => state);

  if (isLoading.restaurants) {
    return (<div>로딩중입니다</div>);
  }

  if (region && categoryId && restaurants.length === 0) {
    return (<div>정보가없습니다</div>);
  }

  return (
    <ul>
      {restaurants.map(({ name, id }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
}
