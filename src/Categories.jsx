import React from 'react';

const categories = ['한식', '분식', '중식', '일식', '양식'];

export default function Categories() {
  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            {category}
          </li>
        ))}
      </ul>
    </>
  );
}
