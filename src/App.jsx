import React from 'react';
import Categories from './Categories';

export default function App() {
  function onClick(e) {
    console.log(`${e.target.value}`)
  }
  const categories = [
    '서울', '대구', '부산', '대전', '강원도', '광주'
  ]
  const regions = [
    '한식', '중식', '일식', '양식', '분식'
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
