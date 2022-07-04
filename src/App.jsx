import { useState } from 'react';

import { regions, categories, restaurants } from '../__fixture__/restaurantsInfo';

export default function App() {
  // Todo: __fixture__에서 가져온 목록들을 api server에서 받아온 data로 대체
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleClick = (name, setSelected) => {
    setSelected(name);
  };

  return (
    <>
      <ul>
        {regions.map(({ name, id }) => (
          <li key={id}>
            <button type="button" onClick={() => handleClick(name, setSelectedRegion)}>
              {selectedRegion !== name ? (`${name}`) : (`${name}(V)`)}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ name, id }) => (
          <li key={id}>
            <button type="button" onClick={() => handleClick(name, setSelectedCategory)}>
              {selectedCategory !== name ? (`${name}`) : (`${name}(V)`)}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {/* Todo: 불러올 restaurants가 없을 경우에 대한 예외 케이스 추가 */}
        {restaurants.map(({ name, id }) => (<li key={id}>{name}</li>))}
      </ul>
    </>
  );
}
