import React from 'react';

export default function App() {
  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
  ];

  return (
    <div>
      {
        categories.map((category) => (
          <button type="button" key={category.id}>
            { category.name }
          </button>
        ))
      }
    </div>
  );
}
