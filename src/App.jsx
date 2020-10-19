import React from 'react';
import Regions from './Regions';

export default function App() {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '부산' },
    { id: 3, name: '대구' },
    { id: 4, name: '대전' },
  ];

  return (
    <Regions regions={regions} />
  );
}
