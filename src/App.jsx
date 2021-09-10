import { useState } from 'react';

export default function App() {
  // TODO: 중복 제거
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const regions = [
    {
      id: 1,
      name: '서울',
    },
    {
      id: 2,
      name: '대전',
    },
    {
      id: 3,
      name: '대구',
    },
    {
      id: 4,
      name: '부산',
    },
    {
      id: 5,
      name: '광주',
    },
    {
      id: 6,
      name: '강원도',
    },
    {
      id: 7,
      name: '인천',
    },
    {
      id: 8,
      name: '제주',
    },
    {
      id: 9,
      name: '전주',
    },
    {
      id: 10,
      name: '순천',
    },
    {
      id: 11,
      name: '독도',
    },
  ];

  const categories = [
    {
      id: 1,
      name: '한식',
    },
    {
      id: 2,
      name: '중식',
    },
    {
      id: 3,
      name: '일식',
    },
    {
      id: 4,
      name: '양식',
    },
    {
      id: 5,
      name: '분식',
    },
    {
      id: 6,
      name: '과자',
    },
    {
      id: 7,
      name: '치킨',
    },
    {
      id: 1003,
      name: '테스트',
    },
    {
      id: 1034,
      name: '음료',
    },
    {
      id: 1036,
      name: '사탕',
    },
  ];

  function handleClickRegion(id) {
    setSelectedRegion(id);
  }

  function handleClickCategory(id) {
    setSelectedCategory(id);
  }

  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button
              type="button"
              onClick={() => {
                handleClickRegion(region.id);
              }}
            >
              {region.id === selectedRegion ? `${region.name}(V)` : region.name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <button
              type="button"
              onClick={() => {
                handleClickCategory(category.id);
              }}
            >
              {category.id === selectedCategory ? `${category.name}(V)` : category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
