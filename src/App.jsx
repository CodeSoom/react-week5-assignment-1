import { useEffect, useState } from 'react';

import Categories from './Categories';
import Regions from './Regions';
import Restaurants from './Restaurants';

export default function App() {
  const [regions, setRegions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

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

  useEffect(() => {
    (async () => {
      Promise.all([
        fetch('https://eatgo-customer-api.ahastudio.com/regions'),
        fetch('https://eatgo-customer-api.ahastudio.com/categories'),
      ]).then(async (response) => {
        const initialRegions = await response[0].json();
        const initialCategories = await response[1].json();

        setRegions(initialRegions);
        setCategories(initialCategories);
      });
    })();
  }, []);

  useEffect(() => {
    const checkedRegion = regions.find((region) => region.checked);
    const checkedCategory = categories.find((category) => category.checked);

    if (checkedCategory && checkedRegion) {
      (async () => {
        const regionName = checkedRegion.name;
        const categoryId = checkedCategory.id;

        const response = await fetch(`https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`);
        const restaurantList = await response.json();

        setRestaurants(restaurantList);
      })();
    }
  }, [regions, categories]);

  return (
    <>
      <Regions regions={regions} onUpdateCheckedRegion={updateCheckedRegions} />
      <Categories categories={categories} onUpdateCategory={updateCheckedCategory} />
      <Restaurants restaurants={restaurants} />
    </>
  );
}
