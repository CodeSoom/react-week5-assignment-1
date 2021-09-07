import { useReducer, useEffect } from 'react';

import { loadCategories, loadRegions, loadRestaurants } from './services/api';

import RegionList from './RegionList';
import CategoryList from './CategoryList';
import RestaurantList from './RestaurantList';

const initialState = {
  regions: [],
  categories: [],
  selectedRegion: {},
  selectedCategory: {},
  restaurants: [],
};

const reducers = {
  UPDATE_FIELD: (state, action) => ({
    ...state,
    [action.payload.field]: action.payload.value,
  }),
};

const reducer = (state, action) => {
  try {
    return reducers[action.type](state, action);
  } catch (error) {
    return state;
  }
};

export default function App() {
  const [{
    regions,
    categories,
    selectedRegion,
    selectedCategory,
    restaurants,
  }, dispatch] = useReducer(reducer, initialState);

  const handleClick = ({ field, value }) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { field, value },
    });
  };

  const isEmpty = (param) => Object.keys(param).length === 0;

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await loadCategories();
      const regionsData = await loadRegions();

      dispatch({
        type: 'UPDATE_FIELD',
        payload: {
          field: 'categories',
          value: categoriesData,
        },
      });
      dispatch({
        type: 'UPDATE_FIELD',
        payload: {
          field: 'regions',
          value: regionsData,
        },
      });
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

      dispatch({
        type: 'UPDATE_FIELD',
        payload: {
          field: 'restaurants',
          value: data,
        },
      });
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
