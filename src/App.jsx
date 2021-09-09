import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories, loadRegions, loadRestaurants } from './services/api';

import updateField from './store/actions';

import RegionList from './RegionList';
import CategoryList from './CategoryList';
import RestaurantList from './RestaurantList';

export default function App() {
  const dispatch = useDispatch();
  const {
    regions,
    categories,
    selectedRegion,
    selectedCategory,
    restaurants,
  } = useSelector((state) => state);

  const handleClick = ({ field, value }) => {
    dispatch(updateField({ field, value }));
  };

  const isEmpty = (param) => Object.keys(param).length === 0;

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await loadCategories();
      const regionsData = await loadRegions();

      dispatch(updateField({ field: 'categories', value: categoriesData }));
      dispatch(updateField({ field: 'regions', value: regionsData }));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isEmpty(selectedRegion) || isEmpty(selectedCategory)) {
      return;
    }

    const fetchData = async () => {
      const data = await loadRestaurants({
        regionName: selectedRegion.name,
        categoryId: selectedCategory.id,
      });

      dispatch(updateField({ field: 'restaurants', value: data }));
    };

    fetchData();
  }, [selectedRegion, selectedCategory]);

  return (
    <>
      <RegionList
        regions={regions}
        onClick={handleClick}
        selectedRegion={selectedRegion}
      />
      <CategoryList
        categories={categories}
        onClick={handleClick}
        selectedCategory={selectedCategory}
      />
      <RestaurantList
        restaurants={restaurants}
      />
    </>
  );
}
