import React from 'react';
import Categories from './Categories';

export default function App() {
  function onClick(e) {
    console.log(`${e.target.value}`)
  }
  const categories = [
    { id: 1, category: '한식' },
    { id: 2, category: '중식' },
    { id: 3, category: '일식' },
    { id: 4, category: '양식' },
    { id: 5, category: '분식' },
  ];
  const regions = [
    '서울', '대구', '부산', '대전', '강원도', '광주'
  ]

  return (
    <>
      <Categories categories={categories} onClick={onClick} />
      <ul>
        {regions.map((region) => (
          <li><button onClick={onClick} type='button'>{region}</button></li>
        ))}
      </ul>
    </>
  );
}
