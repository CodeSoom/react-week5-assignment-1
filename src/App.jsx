import { useEffect, useState } from 'react';

import { fetchCategories, fetchRegions, fetchRestaurants } from './service/api';

import isEmptyObj from './utils/IsEmptyObj';

export default function App() {
  const [regions, setRegions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [restaurants, setRestaurants] = useState([]);

  const handleClick = (setter, value) => () => {
    setter(value);
  };

  const loadCategories = async () => {
    const categoriesData = await fetchCategories();

    setCategories(categoriesData);
  };

  const loadRegions = async () => {
    const regionsData = await fetchRegions();

    setRegions(regionsData);
  };

  const loadRestaurants = async () => {
    const restaurantsData = await fetchRestaurants(selectedRegion.name, selectedCategory.id);

    setRestaurants(restaurantsData);
  };

  useEffect(() => {
    loadCategories();
    loadRegions();
  }, []);

  useEffect(() => {
    if (!isEmptyObj(selectedRegion) && !isEmptyObj(selectedCategory)) {
      loadRestaurants();
    }
  }, [selectedRegion, selectedCategory]);

  return (
    <>
      <ul>
        {regions.map((region) => (
          <li key={regions.id}>
            <button type="button" onClick={handleClick(setSelectedRegion, region)}>
              {selectedRegion.id !== region.id ? (`${region.name}`) : (`${region.name}(V)`)}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button" onClick={handleClick(setSelectedCategory, category)}>
              {selectedCategory.id !== category.id ? (`${category.name}`) : (`${category.name}(V)`)}
            </button>
          </li>
        ))}
      </ul>
      {restaurants.length !== 0 ? (
        <ul>
          {restaurants.map((restaurant) => (<li key={restaurant.id}>{restaurant.name}</li>))}
        </ul>
      ) : (
        <p>조건에 해당하는 식당이 없습니다.</p>
      )}
    </>
  );
}
