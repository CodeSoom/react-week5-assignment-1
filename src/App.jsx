import React from 'react';

export default function App() {
  const regions = [
    {
      id: 1, name: '서울',
    },
  ];
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button>{region.name}</button>
        </li>
      ))}
    </ul>
  );
}

//TODO 
// - 지역 리스트 만들기
// - 음식 카테고리 리스트 만들기
// - 각각 API 호출해서 데이터 불러오기
// 1. 지역 누르고 음식 카테고리를 누르면 해당 리스트를 불러옴
