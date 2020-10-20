import React from 'react';

export default function App() {
  const categories = [
    '서울', '대구', '부산', '대전', '강원도', '광주'
  ]
  const regions = [
    '한식', '중식', '일식', '양식', '분식'
  ]
  return (
    <>
      <ul>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
      <ul>
        {regions.map((region) => (
          <li>{region}</li>
        ))}
      </ul>
    </>
  );
}
