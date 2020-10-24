import React from 'react';

export default function App() {
  const regions = [
    {id: 1, name: '서울'},
    {id: 2, name: '대전'},
    {id: 3, name: '대구'},
    {id: 4, name: '부산'},
    {id: 5, name: '광주'},
    {id: 6, name: '강원도'},
    {id: 7, name: '인천'},
  ];
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type='button'>{region.name}</button>
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
