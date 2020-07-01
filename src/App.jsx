import React, { useState } from 'react';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';

export default function App() {
  const [regions, setRegions] = useState(regionsFixture);
  const [categories, setCategories] = useState(categoriesFixture);

  const check = (checkedId, { id, name }) => {
    const element = { id, name: name.replace('(v)', '') };
    if (element.id === checkedId) {
      element.name += '(v)';
    }
    return element;
  };

  const handleClickRegion = (checkedId) => {
    const checkedRegions = regions.map((region) => check(checkedId, region));
    setRegions(checkedRegions);
  };

  const handleClickCategory = (checkedId) => {
    const checkedCategories = categories.map((category) => check(checkedId, category));
    setCategories(checkedCategories);
  };

  return (
    <>
      <li>
        {regions.map(({ id, name }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleClickRegion(id)}
          >
            {name}
          </button>
        ))}
      </li>
      <li>
        {categories.map(({ id, name }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleClickCategory(id)}
          >
            {name}
          </button>
        ))}
      </li>
    </>
  );
}
