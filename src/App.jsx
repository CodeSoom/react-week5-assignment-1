import React from 'react';
import Categories from './Categories';
import Regions from './Regions';

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
    { id: 1, region: '서울' },
    { id: 2, region: '대구' },
    { id: 3, region: '부산' },
    { id: 4, region: '대전' },
    { id: 5, region: '강원도' },
    { id: 6, region: '광주' },

  ];

  return (
    <>
      <Categories categories={categories} onClick={onClick} />
      <Regions regions={regions} onClick={onClick} />
    </>
  );
}
