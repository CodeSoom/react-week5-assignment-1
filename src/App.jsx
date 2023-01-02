import { useState } from 'react';

import RestaurantsContainer from './RestaurantsContainer';
import Categories from './Categories';
import Regions from './Regions';

const categoryInitialState = [
  { id: 1, name: '한식', checked: false },
  { id: 2, name: '중식', checked: false },
  { id: 3, name: '일식', checked: false },
];

const regionsInitialState = [
  { id: 1, name: '서울', checked: false },
  { id: 2, name: '인천', checked: false },
  { id: 3, name: '경기', checked: false },
];

export default function App() {
  const [categories, setCategories] = useState(categoryInitialState);
  const [regions, setRegions] = useState(regionsInitialState);

  const updateCheckedRegions = (checkedRegionId) => {
    const updatedRegions = regions.map((region) => {
      const newRegion = {
        ...region,
        checked: false,
      };

      if (region.id === checkedRegionId) {
        newRegion.checked = true;
      }

      return newRegion;
    });

    setRegions(updatedRegions);
  };

  const updateCheckedCategory = (checkedCategoryId) => {
    const updatedCategories = categories.map((category) => {
      const newCategory = {
        ...category,
        checked: false,
      };

      if (category.id === checkedCategoryId) {
        newCategory.checked = true;
      }

      return newCategory;
    });

    setCategories(updatedCategories);
  };

  return (
    <>
      <Regions regions={regions} onUpdateRegion={updateCheckedRegions} />
      <Categories categories={categories} onUpdateCategory={updateCheckedCategory} />
      <RestaurantsContainer />
    </>
  );
}
