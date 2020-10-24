import React from 'react';

export default function Categories() {
  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
    { id: 6, name: '과자' },
    { id: 7, name: '치킨' },
  ];

  return (
    <ul>
      {
        categories.map(({ id, name }) => (
          <li key={id}>
            <button type="button">
              {name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
